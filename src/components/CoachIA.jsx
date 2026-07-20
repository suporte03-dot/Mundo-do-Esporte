import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useFitness } from '../context/FitnessContext'
import { getExerciseCache } from '../data/exerciseCache'
import { scrollToSection } from '../utils/scrollToSection'
import { formatDateShort } from '../utils/dateFormat'
import useCoachVoice from '../hooks/useCoachVoice'
import { cancelSpeech } from '../utils/coachVoice'
import SectionTitle from './SectionTitle'
import {
  askCoach,
  adjustWorkoutPlan,
  clearCoachMessages,
  COACH_ACTIONS,
  createHomeWorkoutSuggestion,
  createRecoverySuggestion,
  createShortWorkoutSuggestion,
  explainExercise,
  generateVariation,
  generateWorkoutSuggestion,
  getCoachSummary,
  getTodaySuggestion,
  loadCoachMessages,
  QUICK_CHIPS,
  saveCoachExchange,
  saveCoachSuggestionToPlan,
} from '../services/coachService'

const MAIN_CHIP_IDS = ['hoje', 'montar', 'explicar', 'ajustar']

function formatTime(iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  } catch {
    return ''
  }
}

function formatDateLabel(iso) {
  if (!iso) return 'Sem registro'
  return formatDateShort(iso)
}

function renderAnswer(text) {
  return String(text || '')
    .split('\n')
    .map((line, i) => {
      const trimmed = line.trim()
      if (!trimmed) return <br key={i} />
      if (trimmed === '---') return <hr key={i} className="coach-ia__divider" />
      if (trimmed.startsWith('## ')) {
        return (
          <h4 key={i} className="coach-ia__answer-heading">
            {trimmed.replace(/^##\s*/, '')}
          </h4>
        )
      }
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g)
      return (
        <p key={i} className="coach-ia__answer-line">
          {parts.map((part, j) =>
            part.startsWith('**') && part.endsWith('**') ? (
              <strong key={j}>{part.slice(2, -2)}</strong>
            ) : (
              part
            ),
          )}
        </p>
      )
    })
}

const ACTION_LABELS = {
  [COACH_ACTIONS.SAVE]: 'Salvar na planilha',
  [COACH_ACTIONS.START]: 'Iniciar treino',
  [COACH_ACTIONS.RELATED]: 'Ver exercícios relacionados',
  [COACH_ACTIONS.VARIATION]: 'Gerar variação',
  [COACH_ACTIONS.COPY]: 'Copiar sugestão',
}

export default function CoachIA() {
  const {
    profile,
    workouts,
    history,
    performance,
    goals,
    showToast,
    savePlan,
    addPlanWorkouts,
    addWorkoutToPlan,
    addExerciseToPlan,
    startWorkout,
  } = useFitness()

  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState(() => loadCoachMessages())
  const [showExercisePicker, setShowExercisePicker] = useState(false)
  const [selectedExerciseId, setSelectedExerciseId] = useState('')
  const [moreOpen, setMoreOpen] = useState(false)
  const chatEndRef = useRef(null)
  const inputRef = useRef(null)
  const loadingRef = useRef(false)

  const context = useMemo(
    () => ({ profile, workouts, history, performance, goals }),
    [profile, workouts, history, performance, goals],
  )

  const summary = useMemo(() => getCoachSummary(context), [context])

  const mainChips = useMemo(
    () => QUICK_CHIPS.filter((c) => MAIN_CHIP_IDS.includes(c.id)),
    [],
  )
  const extraChips = useMemo(
    () => QUICK_CHIPS.filter((c) => !MAIN_CHIP_IDS.includes(c.id)),
    [],
  )

  const exerciseOptions = useMemo(() => {
    const cached = getExerciseCache()
    if (cached?.length) return cached.map((ex) => ({ id: ex.id, name: ex.name }))
    const fromWorkouts = workouts.flatMap((w) => w.exercises || [])
    const seen = new Set()
    return fromWorkouts
      .filter((ex) => {
        if (seen.has(ex.exerciseId)) return false
        seen.add(ex.exerciseId)
        return true
      })
      .map((ex) => ({ id: ex.exerciseId, name: ex.name }))
  }, [workouts])

  const chronological = useMemo(() => {
    return [...messages].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
  }, [messages])

  useEffect(() => {
    const end = chatEndRef.current
    if (!end) return
    // Scroll only inside the chat panel — never the page (scrollIntoView was
    // jumping the home viewport past the hero on mount).
    const panel = end.closest('.coach-ia__chat')
    if (panel) {
      panel.scrollTop = panel.scrollHeight
      return
    }
    end.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [messages, loading])

  const pushExchange = useCallback((question, result) => {
    const { userMsg, coachMsg } = saveCoachExchange(question, result)
    setMessages((prev) => [coachMsg, userMsg, ...prev.filter((m) => m.id !== userMsg.id && m.id !== coachMsg.id)])
    return coachMsg
  }, [])

  const speakCoachReplyRef = useRef(null)
  const markIdleRef = useRef(null)

  const runCoach = useCallback(
    async (question, handler) => {
      const q = String(question || '').trim()
      if (!q || loadingRef.current) return
      loadingRef.current = true
      setLoading(true)
      try {
        const result = await handler()
        pushExchange(q, result)
        loadingRef.current = false
        setLoading(false)
        markIdleRef.current?.()
        // Speak after UI unlocks — don't block on TTS
        void speakCoachReplyRef.current?.(result)
      } catch {
        showToast('Não foi possível obter resposta do Coach. Tente novamente.', 'error')
        loadingRef.current = false
        setLoading(false)
        markIdleRef.current?.()
      }
    },
    [pushExchange, showToast],
  )

  const handleVoiceTranscript = useCallback(
    (transcript) => {
      const q = String(transcript || '').trim()
      if (!q) {
        markIdleRef.current?.()
        return
      }
      setInput(q)
      runCoach(q, () => askCoach(q, context))
      setInput('')
    },
    [context, runCoach],
  )

  const {
    voiceState,
    interimText,
    error: voiceError,
    supported: voiceSupported,
    ttsSupported,
    ttsEnabled,
    setSpeakReplies,
    toggleListening,
    stopListening,
    speakCoachReply,
    markIdle,
    clearError: clearVoiceError,
  } = useCoachVoice({ onTranscript: handleVoiceTranscript })

  speakCoachReplyRef.current = speakCoachReply
  markIdleRef.current = markIdle

  const handleSubmit = (e) => {
    e.preventDefault()
    const question = input.trim()
    if (!question) return
    setInput('')
    stopListening()
    runCoach(question, () => askCoach(question, context))
  }

  const voiceStatusLabel =
    voiceState === 'listening'
      ? 'Ouvindo… fale agora'
      : voiceState === 'processing'
        ? 'Processando sua pergunta…'
        : voiceSupported
          ? 'Toque no microfone para perguntar por voz'
          : 'Voz indisponível neste navegador — use o teclado'

  const voiceErrorMessage =
    voiceError === 'unsupported'
      ? 'Este navegador não oferece reconhecimento de fala. Continue digitando.'
      : voiceError === 'permission'
        ? 'Permissão de microfone negada. Ative nas configurações do navegador ou digite.'
        : voiceError === 'no-speech'
          ? 'Não captamos fala. Toque no microfone e tente de novo.'
          : voiceError === 'error'
            ? 'Falha no reconhecimento. Tente de novo ou digite.'
            : null

  const fillAndAsk = (prompt, handler) => {
    setInput(prompt)
    runCoach(prompt, handler)
  }

  const handleChip = (chip) => {
    switch (chip.id) {
      case 'hoje':
        fillAndAsk(chip.prompt, () => getTodaySuggestion(context))
        break
      case 'montar':
        fillAndAsk(chip.prompt, () => generateWorkoutSuggestion(context))
        break
      case 'ajustar':
        fillAndAsk(chip.prompt, () => adjustWorkoutPlan(context, 'trocar'))
        break
      case 'explicar':
        setInput(chip.prompt)
        setShowExercisePicker(true)
        inputRef.current?.focus()
        break
      case 'rapido30':
        fillAndAsk(chip.prompt, () => createShortWorkoutSuggestion(context, 30))
        break
      case 'casa':
        fillAndAsk(chip.prompt, () => createHomeWorkoutSuggestion(context))
        break
      case 'descanso':
        fillAndAsk(chip.prompt, () => createRecoverySuggestion(context))
        break
      default:
        fillAndAsk(chip.prompt, () => askCoach(chip.prompt, context))
    }
  }

  const handleExplainExercise = () => {
    if (!selectedExerciseId) {
      showToast('Selecione um exercício.', 'info')
      return
    }
    setShowExercisePicker(false)
    const ex = exerciseOptions.find((e) => e.id === selectedExerciseId)
    const question = `Explicar exercício: ${ex?.name || selectedExerciseId}`
    setInput('')
    runCoach(question, () => explainExercise(selectedExerciseId, context))
  }

  const handleClear = () => {
    stopListening()
    cancelSpeech()
    clearCoachMessages()
    setMessages([])
    showToast('Conversa limpa.', 'info')
  }

  const applySuggestion = useCallback(
    (suggestion, mode = 'save') => {
      const payload = saveCoachSuggestionToPlan(suggestion)
      if (!payload) {
        showToast('Nenhuma sugestão para aplicar.', 'info')
        return
      }

      if (payload.kind === 'plan') {
        savePlan(payload.plan)
        addPlanWorkouts(payload.workouts)
        if (mode === 'start' && payload.sampleWorkout) {
          addWorkoutToPlan(payload.sampleWorkout)
          startWorkout(payload.sampleWorkout)
        }
        return
      }

      if (payload.kind === 'workout') {
        addWorkoutToPlan(payload.workout)
        if (mode === 'start') {
          startWorkout(payload.workout)
        }
        return
      }

      if (payload.kind === 'exercise') {
        addExerciseToPlan(payload.exercise)
      }
    },
    [addExerciseToPlan, addPlanWorkouts, addWorkoutToPlan, savePlan, showToast, startWorkout],
  )

  const openRelatedExercises = (muscleGroup) => {
    const group = muscleGroup || summary.recommendedGroup || 'Todos'
    window.dispatchEvent(
      new CustomEvent('evoluafit:filter-exercises', {
        detail: { group },
      }),
    )
    scrollToSection('exercicios')
    showToast(`Filtrando exercícios: ${group}`, 'info')
  }

  const handleMessageAction = async (msg, action) => {
    const suggestion = msg.suggestion
    const workout = msg.relatedWorkout || suggestion?.data || suggestion?.sampleWorkout

    switch (action) {
      case COACH_ACTIONS.SAVE:
        applySuggestion(suggestion || (workout ? { type: 'workout', data: workout } : null), 'save')
        break
      case COACH_ACTIONS.START: {
        const startSuggestion =
          suggestion?.type === 'plan'
            ? { type: 'workout', data: suggestion.sampleWorkout || workout }
            : suggestion || (workout ? { type: 'workout', data: workout } : null)
        if (!startSuggestion?.data && !workout) {
          showToast('Nenhum treino sugerido para iniciar.', 'info')
          return
        }
        applySuggestion(
          startSuggestion?.data ? startSuggestion : { type: 'workout', data: workout },
          'start',
        )
        break
      }
      case COACH_ACTIONS.RELATED:
        openRelatedExercises(msg.relatedMuscleGroup || workout?.muscleGroups?.[0])
        break
      case COACH_ACTIONS.VARIATION:
        await runCoach('Gerar variação do treino sugerido', () =>
          generateVariation(context, workout),
        )
        break
      case COACH_ACTIONS.COPY: {
        const text = msg.content || ''
        try {
          await navigator.clipboard.writeText(text)
          showToast('Sugestão copiada!', 'success')
        } catch {
          showToast('Não foi possível copiar.', 'error')
        }
        break
      }
      default:
        break
    }
  }

  return (
    <section id="coach-ia" className="section section--alt coach-ia">
      <div className="container">
        <div className="coach-ia__header">
          <SectionTitle
            tag="Assistente de treino"
            title="Coach IA"
            subtitle="Suas perguntas e rotina ficam neste aparelho — privacidade primeiro, sugestões responsáveis."
          />
        </div>

        <div className="coach-ia__context" aria-label="O que o Coach considera">
          <p className="coach-ia__context-label">O Coach considera agora</p>
          <div className="coach-ia__context-chips">
            <span className="coach-ia__context-chip">
              Último treino:{' '}
              {summary.lastWorkout
                ? `${summary.lastWorkout.name} · ${formatDateLabel(summary.lastWorkout.date)}`
                : 'ainda nenhum'}
            </span>
            <span className="coach-ia__context-chip">
              Sugestão: {summary.nextSuggestion}
            </span>
            <span className="coach-ia__context-chip">
              Grupo: {summary.recommendedGroup}
            </span>
            <span className="coach-ia__context-chip coach-ia__context-chip--care">
              {summary.attention}
            </span>
            <span
              className="coach-ia__context-chip coach-ia__context-chip--privacy"
              title="Reconhecimento de fala pelo navegador"
            >
              Voz: reconhecimento pelo navegador — áudio não enviado aos nossos servidores
            </span>
          </div>
        </div>

        <div className="coach-ia__main glass-card">
          <form className="coach-ia__form" onSubmit={handleSubmit}>
            <label htmlFor="coach-question" className="sr-only">
              Pergunte ao Coach IA sobre seu treino
            </label>
            <div className="coach-ia__input-row">
              <textarea
                ref={inputRef}
                id="coach-question"
                className="coach-ia__input"
                rows={2}
                placeholder={
                  voiceState === 'listening'
                    ? 'Ouvindo… diga, por exemplo: o que treino hoje?'
                    : 'Ex.: Monte um treino de costas de 40 min · ou use o microfone'
                }
                value={interimText && voiceState === 'listening' ? interimText : input}
                onChange={(e) => {
                  if (voiceState === 'listening') stopListening()
                  setInput(e.target.value)
                }}
                disabled={loading || voiceState === 'processing'}
                aria-describedby="coach-voice-status"
              />
              <button
                type="button"
                className={`coach-ia__mic${voiceState === 'listening' ? ' is-listening' : ''}${
                  voiceState === 'processing' ? ' is-processing' : ''
                }${!voiceSupported ? ' is-unsupported' : ''}`}
                onClick={toggleListening}
                disabled={loading || voiceState === 'processing' || !voiceSupported}
                aria-label={
                  voiceState === 'listening'
                    ? 'Parar de ouvir'
                    : voiceSupported
                      ? 'Falar com o Coach IA'
                      : 'Reconhecimento de voz indisponível'
                }
                aria-pressed={voiceState === 'listening'}
                title={
                  voiceSupported
                    ? 'Modo voz — microfone só é pedido ao tocar'
                    : 'Navegador sem reconhecimento de fala'
                }
              >
                {voiceState === 'listening' ? (
                  <span className="coach-ia__mic-wave" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                ) : voiceState === 'processing' ? (
                  <span className="coach-ia__mic-spin" aria-hidden="true" />
                ) : (
                  <span className="coach-ia__mic-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z" />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            <div className="coach-ia__voice-bar" aria-live="polite">
              <p id="coach-voice-status" className="coach-ia__voice-status">
                {voiceStatusLabel}
              </p>
              <div className="coach-ia__voice-toggles">
                {ttsSupported && (
                  <label className="coach-ia__tts-toggle">
                    <input
                      type="checkbox"
                      checked={ttsEnabled}
                      onChange={(e) => setSpeakReplies(e.target.checked)}
                    />
                    <span>Ouvir respostas</span>
                  </label>
                )}
              </div>
            </div>
            {voiceErrorMessage && (
              <p className="coach-ia__voice-error" role="status">
                {voiceErrorMessage}{' '}
                <button type="button" className="coach-ia__voice-error-dismiss" onClick={clearVoiceError}>
                  Entendi
                </button>
              </p>
            )}

            <div className="coach-ia__form-actions">
              <button
                type="submit"
                className="btn btn--primary coach-ia__btn-send"
                disabled={loading || !input.trim()}
              >
                {loading ? 'Analisando…' : 'Perguntar'}
              </button>
              {messages.length > 0 && (
                <button type="button" className="btn btn--ghost coach-ia__btn-clear" onClick={handleClear}>
                  Limpar conversa
                </button>
              )}
            </div>
          </form>

          <div className="coach-ia__main-actions" role="list" aria-label="Ações principais">
            {mainChips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                role="listitem"
                className="coach-ia__main-btn"
                onClick={() => handleChip(chip)}
                disabled={loading}
              >
                {chip.label}
              </button>
            ))}
          </div>

          <div className="coach-ia__more">
            <button
              type="button"
              className={`disclose-toggle disclose-toggle--inline${moreOpen ? ' is-open' : ''}`}
              onClick={() => setMoreOpen((o) => !o)}
              aria-expanded={moreOpen}
            >
              <span>{moreOpen ? 'Ocultar sugestões' : 'Mais sugestões'}</span>
              <span aria-hidden="true">{moreOpen ? '▲' : '▼'}</span>
            </button>
            {moreOpen && (
              <div className="coach-ia__chips" role="list">
                {extraChips.map((chip) => (
                  <button
                    key={chip.id}
                    type="button"
                    role="listitem"
                    className="coach-ia__chip"
                    onClick={() => handleChip(chip)}
                    disabled={loading}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {showExercisePicker && (
            <div className="coach-ia__picker glass-card">
              <h4>Escolha um exercício</h4>
              <select
                className="coach-ia__select"
                value={selectedExerciseId}
                onChange={(e) => setSelectedExerciseId(e.target.value)}
              >
                <option value="">Selecione…</option>
                {exerciseOptions.map((ex) => (
                  <option key={ex.id} value={ex.id}>
                    {ex.name}
                  </option>
                ))}
              </select>
              <div className="coach-ia__picker-actions">
                <button type="button" className="btn btn--primary btn--sm" onClick={handleExplainExercise}>
                  Explicar
                </button>
                <button
                  type="button"
                  className="btn btn--ghost btn--sm"
                  onClick={() => setShowExercisePicker(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          <div className="coach-ia__chat" aria-live="polite">
            {chronological.length === 0 && !loading && (
              <div className="coach-ia__empty coach-ia__empty--example">
                <p className="coach-ia__empty-title">Exemplo de conversa</p>
                <div className="coach-ia__example">
                  <div className="coach-ia__example-user">
                    “O que treino hoje?” <span className="coach-ia__example-voice">(voz ou texto)</span>
                  </div>
                  <div className="coach-ia__example-coach">
                    Resposta curta falada + texto na tela, com botão para iniciar o treino —
                    sem prometer resultados milagrosos.
                  </div>
                </div>
                <p className="coach-ia__empty-desc">
                  No treino com as mãos ocupadas, use o microfone. O reconhecimento é do navegador;
                  o áudio não vai para os servidores EvoluaFit.
                </p>
              </div>
            )}

            {chronological.map((msg) =>
              msg.role === 'user' ? (
                <div key={msg.id} className="coach-ia__message coach-ia__message--user">
                  <div className="coach-ia__bubble-wrap">
                    <div className="coach-ia__bubble">{msg.content}</div>
                    <time className="coach-ia__time" dateTime={msg.createdAt}>
                      {formatTime(msg.createdAt)}
                    </time>
                  </div>
                </div>
              ) : (
                <div key={msg.id} className="coach-ia__message coach-ia__message--coach">
                  <span className="coach-ia__avatar" aria-hidden="true">
                    ✦
                  </span>
                  <div className="coach-ia__bubble-wrap coach-ia__bubble-wrap--coach">
                    <div className="coach-ia__bubble coach-ia__bubble--answer coach-ia__answer-card">
                      {msg.blocks?.title && (
                        <div className="coach-ia__block-meta">
                          <span className="coach-ia__block-title">{msg.blocks.title}</span>
                        </div>
                      )}
                      {renderAnswer(msg.content)}
                      {msg.blocks?.workout?.exercises?.length > 0 && (
                        <div className="coach-ia__workout-card">
                          <div className="coach-ia__workout-card-head">
                            <strong>{msg.blocks.workout.name}</strong>
                            <span>~{msg.blocks.workout.estimatedMinutes || 40} min</span>
                          </div>
                          <ul className="coach-ia__workout-list">
                            {msg.blocks.workout.exercises.map((ex, idx) => (
                              <li key={`${ex.exerciseId || ex.name}-${idx}`}>
                                <span>{ex.name}</span>
                                <span>
                                  {ex.sets}×{ex.reps}
                                  {ex.restSeconds ? ` · ${ex.restSeconds}s` : ''}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <time className="coach-ia__time" dateTime={msg.createdAt}>
                      Coach · {formatTime(msg.createdAt)}
                    </time>
                    {Array.isArray(msg.actions) && msg.actions.length > 0 && (
                      <div className="coach-ia__msg-actions">
                        {msg.actions.map((action) => (
                          <button
                            key={`${msg.id}-${action}`}
                            type="button"
                            className={`coach-ia__msg-action ${
                              action === COACH_ACTIONS.START || action === COACH_ACTIONS.SAVE
                                ? 'coach-ia__msg-action--primary'
                                : ''
                            }`}
                            onClick={() => handleMessageAction(msg, action)}
                            disabled={loading}
                          >
                            {ACTION_LABELS[action] || action}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ),
            )}

            {loading && (
              <div className="coach-ia__message coach-ia__message--coach coach-ia__message--loading">
                <span className="coach-ia__avatar" aria-hidden="true">
                  ✦
                </span>
                <div className="coach-ia__bubble">
                  <span className="coach-ia__typing">Coach IA está analisando sua rotina</span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>
        </div>
      </div>
    </section>
  )
}
