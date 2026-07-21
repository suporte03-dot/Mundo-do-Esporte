/**
 * Letter badges + accent colors for muscle-group browse cards.
 * Premium initials only — no SVGs, emojis, or images.
 */

export const groupLetters = {
  Todos: 'TO',
  Peitoral: 'PT',
  Costas: 'CO',
  Pernas: 'PN',
  Glúteos: 'GL',
  Ombros: 'OM',
  Bíceps: 'BI',
  Tríceps: 'TR',
  Abdômen: 'AB',
  Lombar: 'LO',
  Cardio: 'CA',
  Mobilidade: 'MO',
  Funcional: 'FU',
  Alongamento: 'AL',
  Panturrilha: 'PA',
  Antebraço: 'AN',
  Trapézio: 'TP',
}

/**
 * Central registry: letter + tone + color + rgb + subtitle per group.
 * ExerciseLibrary reads via getMuscleGroupVisual().
 */
const GROUP_VISUALS = {
  Todos: {
    letter: groupLetters.Todos,
    tone: 'default',
    color: '#2DD4BF',
    rgb: '45, 212, 191',
    subtitle: 'Todos os grupos',
  },
  Peitoral: {
    letter: groupLetters.Peitoral,
    tone: 'peito',
    color: '#2DD4BF',
    rgb: '45, 212, 191',
    subtitle: 'Músculos e treinos',
  },
  Costas: {
    letter: groupLetters.Costas,
    tone: 'costas',
    color: '#3B82F6',
    rgb: '59, 130, 246',
    subtitle: 'Força posterior',
  },
  Pernas: {
    letter: groupLetters.Pernas,
    tone: 'pernas',
    color: '#F97316',
    rgb: '249, 115, 22',
    subtitle: 'Base e potência',
  },
  Glúteos: {
    letter: groupLetters.Glúteos,
    tone: 'gluteos',
    color: '#A855F7',
    rgb: '168, 85, 247',
    subtitle: 'Estabilidade e força',
  },
  Ombros: {
    letter: groupLetters.Ombros,
    tone: 'ombros',
    color: '#06B6D4',
    rgb: '6, 182, 212',
    subtitle: 'Mobilidade e força',
  },
  Bíceps: {
    letter: groupLetters.Bíceps,
    tone: 'biceps',
    color: '#FACC15',
    rgb: '250, 204, 21',
    subtitle: 'Braços e controle',
  },
  Tríceps: {
    letter: groupLetters.Tríceps,
    tone: 'triceps',
    color: '#22C55E',
    rgb: '34, 197, 94',
    subtitle: 'Empurrar e estabilizar',
  },
  Abdômen: {
    letter: groupLetters.Abdômen,
    tone: 'abdomen',
    color: '#8B5CF6',
    rgb: '139, 92, 246',
    subtitle: 'Core e estabilidade',
  },
  Lombar: {
    letter: groupLetters.Lombar,
    tone: 'lombar',
    color: '#10B981',
    rgb: '16, 185, 129',
    subtitle: 'Suporte e postura',
  },
  Cardio: {
    letter: groupLetters.Cardio,
    tone: 'cardio',
    color: '#EF4444',
    rgb: '239, 68, 68',
    subtitle: 'Resistência e energia',
  },
  Mobilidade: {
    letter: groupLetters.Mobilidade,
    tone: 'mobilidade',
    color: '#00D9FF',
    rgb: '0, 217, 255',
    subtitle: 'Movimento livre',
  },
  Antebraço: {
    letter: groupLetters.Antebraço,
    tone: 'antebraco',
    color: '#94A3B8',
    rgb: '148, 163, 184',
    subtitle: 'Pegada e controle',
  },
  Trapézio: {
    letter: groupLetters.Trapézio,
    tone: 'trapezio',
    color: '#6366F1',
    rgb: '99, 102, 241',
    subtitle: 'Pescoço e postura',
  },
  Panturrilha: {
    letter: groupLetters.Panturrilha,
    tone: 'panturrilha',
    color: '#F59E0B',
    rgb: '245, 158, 11',
    subtitle: 'Impulso e estabilidade',
  },
  Funcional: {
    letter: groupLetters.Funcional,
    tone: 'funcional',
    color: '#14B8A6',
    rgb: '20, 184, 166',
    subtitle: 'Movimento integrado',
  },
  Alongamento: {
    letter: groupLetters.Alongamento,
    tone: 'alongamento',
    color: '#38BDF8',
    rgb: '56, 189, 248',
    subtitle: 'Flexibilidade e relax',
  },
}

const DEFAULT_VISUAL = {
  letter: 'MG',
  tone: 'default',
  color: '#2DD4BF',
  rgb: '45, 212, 191',
  subtitle: 'Grupo muscular',
}

/** Resolve letter + tone/color/subtitle for a muscle group id */
export function getMuscleGroupVisual(groupId) {
  return GROUP_VISUALS[groupId] || DEFAULT_VISUAL
}

export { GROUP_VISUALS }
