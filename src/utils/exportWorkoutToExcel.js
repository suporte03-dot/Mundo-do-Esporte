import * as XLSX from 'xlsx'
import { getExerciseById } from '../data/exercisesData'

const WEEKDAY_LABELS = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
  'Domingo',
]

const HEADERS = [
  'Dia',
  'Tipo de treino',
  'Objetivo',
  'Nível',
  'Duração estimada',
  'Grupo muscular',
  'Exercício',
  'Séries',
  'Repetições',
  'Descanso',
  'Equipamento',
  'Observação',
  'Cuidados',
]

function dayLabel(dayNumber) {
  const index = Math.max(0, (dayNumber || 1) - 1) % WEEKDAY_LABELS.length
  return WEEKDAY_LABELS[index]
}

function resolveExerciseMeta(exercise, plan) {
  const full = exercise.exerciseId ? getExerciseById(exercise.exerciseId) : null
  const observation =
    exercise.observation ||
    full?.shortInstruction ||
    full?.executionSteps?.[0] ||
    full?.execution?.[0] ||
    'Movimento controlado'
  const care =
    exercise.safetyTip ||
    full?.safetyTips?.[0] ||
    full?.commonMistakes?.[0] ||
    plan.safetyNotes?.[0] ||
    'Evite carga excessiva. Pare em caso de dor.'

  return {
    equipment: exercise.equipment || full?.equipment || plan.equipment?.join(', ') || '—',
    observation,
    care,
  }
}

/**
 * Converte a planilha gerada em linhas tabulares para exportação (TODOS os dias).
 * @param {object} plan
 */
export function planToExcelRows(plan) {
  const days = plan?.weeklyPlan || plan?.schedule || []
  if (!days.length) return []

  const rows = []
  const objective = plan.objectiveLabel || plan.goal || plan.objective || '—'
  const level = plan.level || '—'

  days.forEach((day) => {
    const weekday = dayLabel(day.day)
    const workoutType = day.workoutType || day.name || '—'
    const duration = day.estimatedDuration || day.estimatedMinutes || plan.minutesPerWorkout || plan.duration || '—'

    day.exercises?.forEach((exercise) => {
      const meta = resolveExerciseMeta(exercise, plan)
      const rest = exercise.rest ?? exercise.restSeconds

      rows.push({
        Dia: `Dia ${day.day} (${weekday})`,
        'Tipo de treino': workoutType,
        Objetivo: objective,
        Nível: level,
        'Duração estimada': typeof duration === 'number' ? `${duration} min` : duration,
        'Grupo muscular': exercise.muscleGroup || (day.muscleGroups || day.focus || []).join('/'),
        Exercício: exercise.name,
        Séries: exercise.sets ?? '—',
        Repetições: exercise.reps ?? '—',
        Descanso: rest != null ? `${rest}s` : '—',
        Equipamento: meta.equipment,
        Observação: meta.observation,
        Cuidados: meta.care,
      })
    })
  })

  return rows
}

/**
 * Gera e baixa arquivo .xlsx da planilha atual (todos os dias).
 * @param {object} plan
 * @param {string} [filename]
 */
export function exportWorkoutToExcel(plan, filename = 'evoluafit-planilha-treino.xlsx') {
  const rows = planToExcelRows(plan)
  if (!rows.length) {
    throw new Error('Planilha vazia')
  }

  const worksheet = XLSX.utils.json_to_sheet(rows, { header: HEADERS })
  worksheet['!cols'] = [
    { wch: 18 },
    { wch: 22 },
    { wch: 18 },
    { wch: 14 },
    { wch: 16 },
    { wch: 16 },
    { wch: 28 },
    { wch: 8 },
    { wch: 12 },
    { wch: 10 },
    { wch: 16 },
    { wch: 40 },
    { wch: 40 },
  ]

  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Planilha de Treino')
  XLSX.writeFile(workbook, filename)
}
