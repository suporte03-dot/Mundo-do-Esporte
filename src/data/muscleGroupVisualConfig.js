/**
 * Visual registry for Biblioteca de Exercícios muscle-group cards.
 * Colors, short codes, expanding flags, and illustration keys.
 */

export const GROUP_VISUAL_CONFIG = {
  Todos: {
    shortCode: 'TO',
    tone: 'default',
    color: '#2DD4BF',
    rgb: '45, 212, 191',
    subtitle: 'Todos os grupos',
    illustration: 'chest',
    expanding: false,
  },
  Peitoral: {
    shortCode: 'PT',
    tone: 'peito',
    color: '#2DD4BF',
    rgb: '45, 212, 191',
    subtitle: 'Peito e empurrar',
    illustration: 'chest',
    expanding: false,
  },
  Costas: {
    shortCode: 'CO',
    tone: 'costas',
    color: '#3B82F6',
    rgb: '59, 130, 246',
    subtitle: 'Puxar e postura',
    illustration: 'back',
    expanding: false,
  },
  Pernas: {
    shortCode: 'PN',
    tone: 'pernas',
    color: '#F97316',
    rgb: '249, 115, 22',
    subtitle: 'Base e potência',
    illustration: 'legs',
    expanding: false,
  },
  Glúteos: {
    shortCode: 'GL',
    tone: 'gluteos',
    color: '#A855F7',
    rgb: '168, 85, 247',
    subtitle: 'Posterior e estabilidade',
    illustration: 'glutes',
    expanding: true,
  },
  Ombros: {
    shortCode: 'OM',
    tone: 'ombros',
    color: '#38BDF8',
    rgb: '56, 189, 248',
    subtitle: 'Deltoides e mobilidade',
    illustration: 'shoulders',
    expanding: false,
  },
  Bíceps: {
    shortCode: 'BI',
    tone: 'biceps',
    color: '#FACC15',
    rgb: '250, 204, 21',
    subtitle: 'Flexão e controle',
    illustration: 'biceps',
    expanding: false,
  },
  Tríceps: {
    shortCode: 'TR',
    tone: 'triceps',
    color: '#22C55E',
    rgb: '34, 197, 94',
    subtitle: 'Extensão e trava',
    illustration: 'triceps',
    expanding: false,
  },
  Abdômen: {
    shortCode: 'AB',
    tone: 'abdomen',
    color: '#8B5CF6',
    rgb: '139, 92, 246',
    subtitle: 'Core e estabilidade',
    illustration: 'abs',
    expanding: true,
  },
  Lombar: {
    shortCode: 'LO',
    tone: 'lombar',
    color: '#16A34A',
    rgb: '22, 163, 74',
    subtitle: 'Suporte e postura',
    illustration: 'lower-back',
    expanding: false,
  },
  Cardio: {
    shortCode: 'CA',
    tone: 'cardio',
    color: '#EF4444',
    rgb: '239, 68, 68',
    subtitle: 'Resistência e energia',
    illustration: 'cardio',
    expanding: true,
  },
  Mobilidade: {
    shortCode: 'MO',
    tone: 'mobilidade',
    color: '#22D3EE',
    rgb: '34, 211, 238',
    subtitle: 'Movimento livre',
    illustration: 'mobility',
    expanding: true,
  },
  Antebraço: {
    shortCode: 'AN',
    tone: 'antebraco',
    color: '#94A3B8',
    rgb: '148, 163, 184',
    subtitle: 'Pegada e controle',
    illustration: 'forearm',
    expanding: false,
  },
  Trapézio: {
    shortCode: 'TP',
    tone: 'trapezio',
    color: '#6366F1',
    rgb: '99, 102, 241',
    subtitle: 'Pescoço e postura',
    illustration: 'traps',
    expanding: false,
  },
  Panturrilha: {
    shortCode: 'PA',
    tone: 'panturrilha',
    color: '#F59E0B',
    rgb: '245, 158, 11',
    subtitle: 'Impulso e estabilidade',
    illustration: 'calves',
    expanding: false,
  },
  Funcional: {
    shortCode: 'FU',
    tone: 'funcional',
    color: '#14B8A6',
    rgb: '20, 184, 166',
    subtitle: 'Movimento integrado',
    illustration: 'functional',
    expanding: false,
  },
  Alongamento: {
    shortCode: 'AL',
    tone: 'alongamento',
    color: '#7DD3FC',
    rgb: '125, 211, 252',
    subtitle: 'Flexibilidade e relax',
    illustration: 'stretch',
    expanding: false,
  },
}

const DEFAULT_VISUAL = {
  shortCode: 'MG',
  letter: 'MG',
  tone: 'default',
  color: '#2DD4BF',
  rgb: '45, 212, 191',
  subtitle: 'Grupo muscular',
  illustration: 'chest',
  expanding: false,
}

/** Resolve visual config for a muscle group id */
export function getMuscleGroupVisual(groupId) {
  const cfg = GROUP_VISUAL_CONFIG[groupId]
  if (!cfg) return DEFAULT_VISUAL
  return {
    ...cfg,
    letter: cfg.shortCode,
  }
}

/** Legacy alias map used by older imports */
export const groupLetters = Object.fromEntries(
  Object.entries(GROUP_VISUAL_CONFIG).map(([id, cfg]) => [id, cfg.shortCode]),
)

export const FEATURED_GROUP_IDS = []

export { GROUP_VISUAL_CONFIG as GROUP_VISUALS }
