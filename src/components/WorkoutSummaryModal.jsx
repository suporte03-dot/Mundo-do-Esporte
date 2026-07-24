import { calculateSessionStats } from '../utils/performanceUtils'
import { scrollToSection } from '../utils/scrollToSection'
import Modal from './Modal'

function formatDatePt(iso) {
  if (!iso) return new Date().toLocaleDateString('pt-BR')
  try {
    return new Date(iso).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return String(iso)
  }
}

export default function WorkoutSummaryModal({ isOpen, onClose, onConfirm, sessionData, workoutName }) {
  if (!isOpen || !sessionData) return null

  const stats = calculateSessionStats(sessionData)
  const volume = sessionData.volume != null ? sessionData.volume : stats.volume
  const muscleGroups = sessionData.muscleGroups || []
  const statusLabel = sessionData.partial ? 'Parcial' : 'Concluído'
  const completedExercises =
    sessionData.progress?.completedExercises ??
    sessionData.exercises?.filter((ex) => (ex.completedSets || 0) > 0).length ??
    stats.exerciseCount

  const handleSave = () => {
    onConfirm?.()
  }

  const handleDismiss = () => {
    if (
      window.confirm(
        'Fechar sem salvar? Este resumo não entrará no histórico. A sessão ainda pode ser retomada se você não salvou antes.',
      )
    ) {
      onClose?.()
    }
  }

  const handleBackToWorkouts = () => {
    onConfirm?.()
    setTimeout(() => scrollToSection('treinos'), 80)
  }

  const handlePerformance = () => {
    onConfirm?.()
    setTimeout(() => scrollToSection('desempenho'), 80)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleDismiss} title="Resumo do treino" size="md">
      <div className="workout-summary workout-summary--complete">
        <div className="workout-summary__celebrate" aria-hidden="true">
          <span>✓</span>
        </div>
        <h3 className="workout-summary__name">{workoutName}</h3>
        <p className="workout-summary__done-label">Treino {statusLabel.toLowerCase()}</p>
        <p className="workout-summary__date">{formatDatePt(sessionData.completedAt || sessionData.date)}</p>

        <div className="workout-summary__stats">
          <div className="workout-summary__stat">
            <span>Duração</span>
            <strong>{sessionData.durationMinutes} min</strong>
          </div>
          <div className="workout-summary__stat">
            <span>Exercícios</span>
            <strong>
              {completedExercises}/{sessionData.exercises?.length || stats.exerciseCount}
            </strong>
          </div>
          <div className="workout-summary__stat">
            <span>Séries</span>
            <strong>{stats.totalSets}</strong>
          </div>
          <div className="workout-summary__stat">
            <span>Volume</span>
            <strong>{Math.round(volume).toLocaleString('pt-BR')}</strong>
          </div>
        </div>

        {muscleGroups.length > 0 && (
          <div className="workout-summary__muscles">
            {muscleGroups.map((g) => (
              <span key={g} className="muscle-tag">
                {g}
              </span>
            ))}
          </div>
        )}

        {sessionData.exercises?.length > 0 && (
          <ul className="workout-summary__exercises">
            {sessionData.exercises.map((ex) => (
              <li key={ex.exerciseId || ex.name}>
                <strong>{ex.name}</strong>
                <span>
                  {ex.completedSets || 0} séries · {ex.load || '—'} · {ex.reps || '—'} reps
                </span>
              </li>
            ))}
          </ul>
        )}

        {sessionData.notes && (
          <div className="workout-summary__notes">
            <span>Observações</span>
            <p>{sessionData.notes}</p>
          </div>
        )}

        <p className="safety-note">
          Hidrate-se e respeite o tempo de recuperação. Consistência importa mais que intensidade.
        </p>

        <div className="workout-summary__actions workout-summary__actions--stack">
          <button type="button" className="btn btn--primary btn--lg" onClick={handleSave}>
            Salvar
          </button>
          <button type="button" className="btn btn--ghost" onClick={handleBackToWorkouts}>
            Voltar Meus treinos
          </button>
          <button type="button" className="btn btn--ghost" onClick={handlePerformance}>
            Ver desempenho
          </button>
        </div>
      </div>
    </Modal>
  )
}
