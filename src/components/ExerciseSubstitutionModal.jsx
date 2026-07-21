import { useMemo } from 'react'
import { useFitness } from '../context/FitnessContext'
import { findExerciseAlternatives } from '../utils/exerciseSubstitution'
import Modal from './Modal'
import ExerciseMedia from './ExerciseMedia'

export default function ExerciseSubstitutionModal({
  isOpen,
  onClose,
  currentExercise,
  onSelect,
}) {
  const { profile } = useFitness()

  const { alternatives, emptyMessage } = useMemo(() => {
    if (!currentExercise) return { alternatives: [], emptyMessage: null }
    return findExerciseAlternatives(currentExercise, {
      userLevel: profile?.level,
      restrictions: profile?.restrictions || [],
      availableEquipment: profile?.equipment || [],
      limit: 10,
    })
  }, [currentExercise, profile])

  if (!isOpen || !currentExercise) return null

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Substituir exercício"
      size="md"
      className="exercise-substitution-modal"
    >
      <div className="exercise-substitution">
        <p className="exercise-substitution__current">
          Substituindo: <strong>{currentExercise.name}</strong>
          {currentExercise.muscleGroup ? ` · ${currentExercise.muscleGroup}` : ''}
        </p>

        {alternatives.length === 0 ? (
          <p className="exercise-substitution__empty">
            {emptyMessage || 'Nenhuma alternativa encontrada para este grupo.'}
          </p>
        ) : (
          <ul className="exercise-substitution__list">
            {alternatives.map((ex) => (
              <li key={ex.id}>
                <button
                  type="button"
                  className="exercise-substitution__option"
                  onClick={() => onSelect(ex)}
                >
                  <ExerciseMedia exercise={ex} aspectRatio="1/1" compact square />
                  <div className="exercise-substitution__option-body">
                    <strong>{ex.name}</strong>
                    <span>
                      {ex.muscleGroup || ex.category}
                      {ex.equipment ? ` · ${ex.equipment}` : ''}
                      {ex.level ? ` · ${ex.level}` : ''}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="exercise-substitution__footer">
          <button type="button" className="btn btn--ghost" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  )
}
