import { useFitness } from '../context/FitnessContext'

export default function SessionResumeBanner() {
  const { pendingSession, activeWorkout, resumePendingSession, discardPendingSession } = useFitness()

  if (activeWorkout || !pendingSession?.workoutId) return null

  const name = pendingSession.workoutName || 'Treino em andamento'
  const setsDone = (pendingSession.sessionExercises || []).reduce(
    (sum, ex) => sum + (ex.completedSets || 0),
    0,
  )

  return (
    <div className="session-resume-banner" role="status">
      <div className="session-resume-banner__copy">
        <p className="session-resume-banner__eyebrow">Sessão salva neste aparelho</p>
        <p className="session-resume-banner__title">
          Continuar: <strong>{name}</strong>
          {setsDone > 0 ? (' · ' + setsDone + ' série' + (setsDone === 1 ? '' : 's') + ' feitas') : ''}
        </p>
      </div>
      <div className="session-resume-banner__actions">
        <button type="button" className="btn btn--primary btn--sm" onClick={resumePendingSession}>
          Continuar
        </button>
        <button type="button" className="btn btn--ghost btn--sm" onClick={discardPendingSession}>
          Descartar
        </button>
      </div>
    </div>
  )
}