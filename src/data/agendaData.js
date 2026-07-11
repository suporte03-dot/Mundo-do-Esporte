import {
  addDays,
  enrichAgendaEvent,
  filtrarEventosPorPeriodo,
  getAgendaWeekDays,
  getTodayBrazil,
  toISO,
} from '../utils/agendaDateUtils'

const asset = (file) => `${import.meta.env.BASE_URL}assets/sports/${file}`

const rawAgendaEvents = [
  {
    id: 1,
    daysOffset: 0,
    title: 'Final do campeonato nacional',
    sport: 'Futebol',
    filter: 'futebol',
    time: '20:30',
    location: 'Maracanã, Rio de Janeiro',
    description: 'Decisão do título nacional em jogo único com estádio lotado.',
    fullDescription: [
      'A grande final do campeonato nacional reúne os dois melhores times da temporada em confronto direto pelo título.',
      'Com mais de 70 mil torcedores esperados, a partida promete ser um espetáculo de emoção, técnica e rivalidade histórica.',
      'A Arena 360 acompanha cada lance com cobertura completa antes, durante e depois do apito final.',
    ],
    featured: true,
    image: asset('futebol.jpg'),
    tag: 'Destaque',
    eventType: 'Final',
    phase: 'Decisão do título',
    importance: 'Alta',
  },
  {
    id: 2,
    daysOffset: 0,
    title: 'Semifinal da conferência leste — NBA',
    sport: 'Basquete',
    filter: 'basquete',
    time: '22:00',
    location: 'Boston, EUA',
    description: 'Jogo 6 pode definir o finalista da conferência leste.',
    fullDescription: [
      'A franquia da casa busca fechar a série em casa diante de uma torcida que lota o ginásio.',
      'O confronto coloca frente a frente duas das melhores defesas da temporada, com ritmo intenso nos dois lados da quadra.',
    ],
    featured: false,
    image: asset('basquete.jpg'),
    tag: 'Playoffs',
    eventType: 'Semifinal',
    phase: 'Conferência Leste',
    importance: 'Alta',
  },
  {
    id: 3,
    daysOffset: 0,
    title: 'Superliga feminina — Semifinal',
    sport: 'Vôlei',
    filter: 'volei',
    time: '19:30',
    location: 'Belo Horizonte, MG',
    description: 'Primeira semifinal da Superliga Feminina 2026.',
    fullDescription: [
      'As equipes se enfrentam em série melhor de três, com vantagem de quadra para a dona da casa.',
      'A partida abre a reta decisiva do campeonato nacional de vôlei feminino.',
    ],
    featured: false,
    image: asset('volei.jpg'),
    tag: 'Nacional',
    eventType: 'Semifinal',
    phase: 'Superliga',
    importance: 'Média',
  },
  {
    id: 4,
    daysOffset: 0,
    title: 'Quartas de final — Grand Slam',
    sport: 'Tênis',
    filter: 'tenis',
    time: '15:00',
    location: 'Londres, Reino Unido',
    description: 'Brasileira busca vaga inédita entre as quatro melhores.',
    fullDescription: [
      'A tenista nacional entra em quadra como uma das grandes surpresas do torneio.',
      'Uma vitória garante a melhor campanha brasileira em Grand Slam na última década.',
    ],
    featured: false,
    image: asset('tenis.jpg'),
    tag: 'Grand Slam',
    eventType: 'Quartas de final',
    phase: 'Chave principal',
    importance: 'Alta',
  },
  {
    id: 5,
    daysOffset: 0,
    title: 'UFC Fight Night — Card principal',
    sport: 'Lutas',
    filter: 'lutas',
    time: '23:00',
    location: 'Las Vegas, EUA',
    description: 'Disputa de cinturão na categoria meio-pesado.',
    fullDescription: [
      'O card principal reúne dois campeões invictos em um confronto que pode definir o próximo grande nome da categoria.',
      'A transmissão começa com as preliminares a partir das 20h (horário local).',
    ],
    featured: false,
    image: asset('lutas.jpg'),
    tag: 'Cinturão',
    eventType: 'Título',
    phase: 'Card principal',
    importance: 'Alta',
  },
  {
    id: 6,
    daysOffset: 1,
    title: 'Treino classificatório — GP da Europa',
    sport: 'Fórmula 1',
    filter: 'formula1',
    time: '15:00',
    location: 'Silverstone, Reino Unido',
    description: 'Preparação decisiva para a corrida no histórico circuito britânico.',
    fullDescription: [
      'Os pilotos ajustam os carros em busca do melhor equilíbrio entre velocidade e estabilidade.',
      'A classificação de sábado promete disputa acirrada entre os três primeiros do mundial.',
    ],
    featured: false,
    image: asset('formula1.jpg'),
    tag: 'F1',
    eventType: 'Classificação',
    phase: 'GP da Europa',
    importance: 'Alta',
  },
  {
    id: 7,
    daysOffset: 1,
    title: 'Brasil x Argentina — Eliminatórias',
    sport: 'Futebol',
    filter: 'futebol',
    time: '21:00',
    location: 'Maracanã, Rio de Janeiro',
    description: 'Clássico sul-americano com impacto direto na classificação.',
    fullDescription: [
      'O clássico reúne duas seleções em boa fase e com histórico de jogos intensos nos últimos anos.',
      'A vitória pode consolidar a liderança nas eliminatórias rumo ao torneio continental.',
    ],
    featured: false,
    image: asset('futebol-2.jpg'),
    tag: 'Seleção',
    eventType: 'Eliminatórias',
    phase: 'Sul-americana',
    importance: 'Alta',
  },
  {
    id: 8,
    daysOffset: 1,
    title: 'Final da conferência oeste — NBA',
    sport: 'Basquete',
    filter: 'basquete',
    time: '19:30',
    location: 'Denver, EUA',
    description: 'Jogo 7 define o representante da conferência oeste.',
    fullDescription: [
      'A série chega ao duelo decisivo após seis jogos eletrizantes entre os dois melhores times do oeste.',
      'O vencedor avança à grande final da temporada da NBA.',
    ],
    featured: false,
    image: asset('basquete-2.jpg'),
    tag: 'Playoffs',
    eventType: 'Final de conferência',
    phase: 'Conferência Oeste',
    importance: 'Alta',
  },
  {
    id: 9,
    daysOffset: 2,
    title: 'GP da Europa — Corrida',
    sport: 'Fórmula 1',
    filter: 'formula1',
    time: '10:00',
    location: 'Silverstone, Reino Unido',
    description: 'Grande Prêmio no circuito mais tradicional do calendário.',
    fullDescription: [
      'A corrida em Silverstone costuma entregar ultrapassagens e mudanças de clima que alteram toda a estratégia.',
      'O líder do mundial precisa de um bom resultado para ampliar a vantagem no campeonato.',
    ],
    featured: false,
    image: asset('formula1.jpg'),
    tag: 'Corrida',
    eventType: 'Grande Prêmio',
    phase: 'Etapa 12',
    importance: 'Alta',
  },
  {
    id: 10,
    daysOffset: 2,
    title: 'Disputa de cinturão internacional',
    sport: 'Lutas',
    filter: 'lutas',
    time: '19:00',
    location: 'São Paulo, SP',
    description: 'Lutador brasileiro defende o título mundial dos médios.',
    fullDescription: [
      'O campeão entra no octógono pela terceira defesa consecutiva do cinturão internacional.',
      'O card completo reúne outras cinco lutas com atletas nacionais em ascensão.',
    ],
    featured: false,
    image: asset('lutas.jpg'),
    tag: 'MMA',
    eventType: 'Título',
    phase: 'Defesa de cinturão',
    importance: 'Alta',
  },
  {
    id: 11,
    daysOffset: 2,
    title: 'Final da Superliga masculina',
    sport: 'Vôlei',
    filter: 'volei',
    time: '18:00',
    location: 'Curitiba, PR',
    description: 'Decisão do campeonato nacional de vôlei masculino.',
    fullDescription: [
      'As duas melhores equipes da temporada se enfrentam em jogo único pela taça.',
      'A final promete alto nível técnico e disputa acirrada em todos os sets.',
    ],
    featured: false,
    image: asset('volei.jpg'),
    tag: 'Nacional',
    eventType: 'Final',
    phase: 'Superliga',
    importance: 'Alta',
  },
  {
    id: 12,
    daysOffset: 3,
    title: 'Semifinal do torneio mundial',
    sport: 'Tênis',
    filter: 'tenis',
    time: '10:00',
    location: 'Cincinnati, EUA',
    description: 'Semifinal masculina em quadra central.',
    fullDescription: [
      'Os semifinalistas chegam após uma semana de jogos intensos no torneio Masters 1000.',
      'A final está marcada para a noite de terça-feira.',
    ],
    featured: false,
    image: asset('tenis.jpg'),
    tag: 'ATP',
    eventType: 'Semifinal',
    phase: 'Masters 1000',
    importance: 'Média',
  },
  {
    id: 13,
    daysOffset: 3,
    title: 'Meeting Diamond League — Paris',
    sport: 'Atletismo',
    filter: 'atletismo',
    time: '14:30',
    location: 'Paris, França',
    description: 'Velocistas e fundistas em etapa crucial do circuito mundial.',
    fullDescription: [
      'A etapa parisiense do Diamond League reúne os principais nomes do atletismo mundial.',
      'Corredores brasileiros buscam índices olímpicos em provas de velocidade e meio-fundo.',
    ],
    featured: false,
    image: asset('atletismo.jpg'),
    tag: 'Diamond League',
    eventType: 'Meeting',
    phase: 'Circuito mundial',
    importance: 'Média',
  },
  {
    id: 14,
    daysOffset: 4,
    title: 'Seletiva olímpica — Natação',
    sport: 'Esportes Olímpicos',
    filter: 'olimpicos',
    time: '09:00',
    location: 'Rio de Janeiro, RJ',
    description: 'Provas classificatórias para os Jogos Olímpicos.',
    fullDescription: [
      'A seletiva define os representantes brasileiros nas provas de natação para a próxima olimpíada.',
      'Nadadores precisam atingir índices mínimos em cada modalidade para garantir vaga.',
    ],
    featured: false,
    image: asset('olimpicos.jpg'),
    tag: 'Olimpíadas',
    eventType: 'Seletiva',
    phase: 'Classificatória',
    importance: 'Alta',
  },
  {
    id: 15,
    daysOffset: 4,
    title: 'Copa estadual — Final',
    sport: 'Futebol',
    filter: 'futebol',
    time: '20:00',
    location: 'Arena Corinthians, SP',
    description: 'Decisão estadual em jogo de ida e volta.',
    fullDescription: [
      'Os finalistas chegam empatados na série e decidem o título estadual em jogo único.',
      'A partida fecha a temporada de competições regionais antes da pausa do calendário.',
    ],
    featured: false,
    image: asset('futebol-3.jpg'),
    tag: 'Estadual',
    eventType: 'Final',
    phase: 'Copa estadual',
    importance: 'Média',
  },
  {
    id: 16,
    daysOffset: 5,
    title: 'Estreia da temporada europeia',
    sport: 'Basquete',
    filter: 'basquete',
    time: '16:00',
    location: 'Madrid, Espanha',
    description: 'Abertura oficial da Euroliga 2026/27.',
    fullDescription: [
      'A nova temporada da principal liga europeia começa com o campeão defendendo o título em casa.',
      'Elencos reforçados prometem um dos campeonatos mais equilibrados dos últimos anos.',
    ],
    featured: false,
    image: asset('basquete-3.jpg'),
    tag: 'Euroliga',
    eventType: 'Estreia',
    phase: 'Temporada regular',
    importance: 'Média',
  },
  {
    id: 17,
    daysOffset: 6,
    title: 'Final ATP 500 — Toronto',
    sport: 'Tênis',
    filter: 'tenis',
    time: '17:00',
    location: 'Toronto, Canadá',
    description: 'Final masculina do torneio ATP 500.',
    fullDescription: [
      'Os finalistas chegam após duas semanas de jogos em quadras duras.',
      'O vencedor conquista pontos importantes para o ranking mundial.',
    ],
    featured: false,
    image: asset('tenis.jpg'),
    tag: 'ATP',
    eventType: 'Final',
    phase: 'ATP 500',
    importance: 'Média',
  },
  {
    id: 18,
    daysOffset: 6,
    title: 'Campeonato sul-americano de atletismo',
    sport: 'Atletismo',
    filter: 'atletismo',
    time: '11:00',
    location: 'Santiago, Chile',
    description: 'Provas de velocidade e salto em altura abrem o torneio.',
    fullDescription: [
      'O campeonato sul-americano reúne os melhores atletas do continente em busca de medalhas e índices.',
      'O Brasil envia delegação completa nas provas de pista e campo.',
    ],
    featured: false,
    image: asset('atletismo.jpg'),
    tag: 'Continental',
    eventType: 'Campeonato',
    phase: 'Sul-americano',
    importance: 'Média',
  },
  {
    id: 19,
    daysOffset: 10,
    title: 'Torneio internacional de vôlei de praia',
    sport: 'Vôlei',
    filter: 'volei',
    time: '13:00',
    location: 'Florianópolis, SC',
    description: 'Etapa brasileira do circuito mundial de vôlei de praia.',
    fullDescription: [
      'Duplas nacionais e internacionais disputam pontos para o ranking olímpico.',
      'A etapa catarinense abre a segunda metade da temporada sul-americana.',
    ],
    featured: false,
    image: asset('volei.jpg'),
    tag: 'Praia',
    eventType: 'Torneio',
    phase: 'Circuito mundial',
    importance: 'Média',
  },
  {
    id: 20,
    daysOffset: 18,
    title: 'GP do Brasil — Classificação',
    sport: 'Fórmula 1',
    filter: 'formula1',
    time: '14:00',
    location: 'Interlagos, São Paulo',
    description: 'Sessão classificatória no autódromo de Interlagos.',
    fullDescription: [
      'A classificação define o grid de largada da corrida mais esperada da temporada.',
      'A torcida brasileira lota as arquibancadas para apoiar os pilotos da casa.',
    ],
    featured: false,
    image: asset('formula1.jpg'),
    tag: 'F1',
    eventType: 'Classificação',
    phase: 'GP do Brasil',
    importance: 'Alta',
  },
  {
    id: 21,
    daysOffset: -1,
    title: 'Rodada regular — Encerrada',
    sport: 'Futebol',
    filter: 'futebol',
    time: '19:00',
    location: 'São Paulo, SP',
    description: 'Última rodada antes da final do campeonato nacional.',
    fullDescription: [
      'A rodada definiu os finalistas do campeonato nacional após vitória por 2 a 1 nos acréscimos.',
      'O resultado confirmou o acesso à grande final deste fim de semana.',
    ],
    featured: false,
    image: asset('futebol-2.jpg'),
    tag: 'Rodada',
    eventType: 'Campeonato',
    phase: 'Rodada regular',
    importance: 'Baixa',
  },
  {
    id: 22,
    daysOffset: -2,
    title: 'Torneio olímpico de ginástica — Seletiva',
    sport: 'Esportes Olímpicos',
    filter: 'olimpicos',
    time: '14:00',
    location: 'Belo Horizonte, MG',
    description: 'Ginastas disputam vagas para a delegação olímpica.',
    fullDescription: [
      'A seletiva nacional avaliou apresentações no solo, salto e barras assimétricas.',
      'Três atletas garantiram vaga na equipe que representará o país nos Jogos.',
    ],
    featured: false,
    image: asset('olimpicos.jpg'),
    tag: 'Olimpíadas',
    eventType: 'Seletiva',
    phase: 'Classificatória',
    importance: 'Média',
  },
]

export const agendaSportFilters = [
  { id: 'todos', label: 'Todos' },
  { id: 'futebol', label: 'Futebol' },
  { id: 'basquete', label: 'Basquete' },
  { id: 'volei', label: 'Vôlei' },
  { id: 'formula1', label: 'Fórmula 1' },
  { id: 'lutas', label: 'Lutas' },
  { id: 'tenis', label: 'Tênis' },
  { id: 'atletismo', label: 'Atletismo' },
  { id: 'olimpicos', label: 'Olímpicos' },
]

export const agendaPeriodFilters = [
  { id: 'todos', label: 'Todos' },
  { id: 'hoje', label: 'Hoje' },
  { id: 'amanha', label: 'Amanhã' },
  { id: 'semana', label: 'Esta semana' },
  { id: 'fim-de-semana', label: 'Fim de semana' },
  { id: '30-dias', label: 'Próximos 30 dias' },
]

export function getAgendaEvents() {
  return rawAgendaEvents.map(enrichAgendaEvent)
}

export const agendaEvents = getAgendaEvents()

export function getAgendaFeaturedEvent() {
  return getAgendaEvents().find((event) => event.featured)
}

export function getAgendaSummary() {
  const events = getAgendaEvents()
  const todayISO = toISO(getTodayBrazil())
  const weekEndISO = toISO(addDays(getTodayBrazil(), 6))
  const todayCount = events.filter((event) => event.dateISO === todayISO).length
  const weekCount = events.filter(
    (event) => event.dateISO >= todayISO && event.dateISO <= weekEndISO,
  ).length
  const sportsCount = new Set(events.map((event) => event.filter)).size
  const featured = events.find((event) => event.featured)

  return [
    { id: 'today', icon: '📅', value: String(todayCount), label: 'Eventos hoje' },
    { id: 'week', icon: '🔥', value: String(weekCount), label: 'Próximos 7 dias' },
    { id: 'sports', icon: '🏆', value: String(sportsCount), label: 'Modalidades' },
    {
      id: 'highlight',
      icon: '⭐',
      value: featured?.eventType ?? 'Final',
      label: 'Destaque nacional',
      isText: true,
    },
  ]
}

export function getEventCountByDay(dateISO) {
  return getAgendaEvents().filter((event) => event.dateISO === dateISO).length
}

export function filterAgendaEvents(events, { sport, period, dayISO }) {
  let result = [...events]

  if (sport && sport !== 'todos') {
    result = result.filter((event) => event.filter === sport)
  }

  if (dayISO) {
    return result.filter((event) => event.dateISO === dayISO)
  }

  if (!period || period === 'todos') {
    return result
  }

  return filtrarEventosPorPeriodo(result, period)
}

export { getAgendaWeekDays, filtrarEventosPorPeriodo, enrichAgendaEvent } from '../utils/agendaDateUtils'

/** @deprecated use agendaEvents */
export const weekAgenda = agendaEvents
