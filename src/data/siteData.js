export const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Destaques', href: '#destaques' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Curiosidades', href: '#curiosidades' },
  { label: 'Histórias', href: '#historias' },
  { label: 'Contato', href: '#contato' },
]

export const spotlightOfTheDay = {
  id: 1,
  category: 'Futebol',
  title: 'Brasil vence clássico sul-americano com gol nos acréscimos',
  excerpt:
    'Em partida eletrizante no estádio lotado, a seleção virou o placar no último minuto e consolidou liderança nas eliminatórias. Torcida explode em comemoração histórica.',
  date: '10 Jul 2026',
  readTime: '6 min',
  tag: 'Destaque do Dia',
  gradient: 'linear-gradient(135deg, #0a3d2e 0%, #00a650 50%, #0d2847 100%)',
  icon: '⚽',
}

export const categories = [
  {
    id: 'futebol',
    name: 'Futebol',
    icon: '⚽',
    description: 'Campeonatos, seleções e mercado da bola',
    color: '#00a650',
    gradient: 'linear-gradient(160deg, #004d2a, #00c96b)',
  },
  {
    id: 'basquete',
    name: 'Basquete',
    icon: '🏀',
    description: 'NBA, NBB e competições internacionais',
    color: '#f5a623',
    gradient: 'linear-gradient(160deg, #7c4a00, #f5a623)',
  },
  {
    id: 'volei',
    name: 'Vôlei',
    icon: '🏐',
    description: 'Superliga, seleções e torneios mundiais',
    color: '#3b82f6',
    gradient: 'linear-gradient(160deg, #1e3a8a, #60a5fa)',
  },
  {
    id: 'formula1',
    name: 'Fórmula 1',
    icon: '🏎️',
    description: 'GPs, pilotos e classificação do mundial',
    color: '#ef4444',
    gradient: 'linear-gradient(160deg, #7f1d1d, #ef4444)',
  },
  {
    id: 'lutas',
    name: 'Lutas',
    icon: '🥊',
    description: 'UFC, boxe e artes marciais',
    color: '#8b5cf6',
    gradient: 'linear-gradient(160deg, #4c1d95, #a78bfa)',
  },
  {
    id: 'tenis',
    name: 'Tênis',
    icon: '🎾',
    description: 'Grand Slams, ATP e WTA',
    color: '#10b981',
    gradient: 'linear-gradient(160deg, #064e3b, #34d399)',
  },
  {
    id: 'olimpicos',
    name: 'Esportes Olímpicos',
    icon: '🏅',
    description: 'Atletismo, natação e modalidades olímpicas',
    color: '#f97316',
    gradient: 'linear-gradient(160deg, #9a3412, #fb923c)',
  },
  {
    id: 'radicais',
    name: 'Esportes Radicais',
    icon: '🏄',
    description: 'Surf, skate, escalada e aventura extrema',
    color: '#06b6d4',
    gradient: 'linear-gradient(160deg, #164e63, #22d3ee)',
  },
]

export const latestNews = [
  {
    id: 2,
    title: 'NBA: franquia surpreende e avança às finais da conferência',
    excerpt: 'Vitória épica no jogo 7 redefine a temporada e coloca o time no mapa da liga.',
    category: 'Basquete',
    date: '10 Jul 2026',
    readTime: '4 min',
    gradient: 'linear-gradient(135deg, #7c4a00, #f5a623)',
    icon: '🏀',
  },
  {
    id: 3,
    title: 'Superliga feminina define semifinalistas após rodada decisiva',
    excerpt: 'Clássicos e viradas emocionantes marcaram a reta final do campeonato nacional.',
    category: 'Vôlei',
    date: '09 Jul 2026',
    readTime: '3 min',
    gradient: 'linear-gradient(135deg, #1e3a8a, #60a5fa)',
    icon: '🏐',
  },
  {
    id: 4,
    title: 'Corredor brasileiro bate recorde sul-americano nos 100m',
    excerpt: 'Marca histórica coloca o atleta entre os favoritos para a próxima temporada.',
    category: 'Atletismo',
    date: '09 Jul 2026',
    readTime: '4 min',
    gradient: 'linear-gradient(135deg, #9a3412, #fb923c)',
    icon: '🏃',
  },
  {
    id: 5,
    title: 'Pilotos da F1 disputam pole position no GP da Europa',
    excerpt: 'Treinos classificatórios prometem disputa acirrada entre os principais nomes da temporada.',
    category: 'Fórmula 1',
    date: '08 Jul 2026',
    readTime: '3 min',
    gradient: 'linear-gradient(135deg, #7f1d1d, #ef4444)',
    icon: '🏎️',
  },
  {
    id: 6,
    title: 'Lutador nacional conquista cinturão em evento internacional',
    excerpt: 'Finalização no segundo round consagra atleta como novo campeão da categoria.',
    category: 'Lutas',
    date: '08 Jul 2026',
    readTime: '5 min',
    gradient: 'linear-gradient(135deg, #4c1d95, #a78bfa)',
    icon: '🥊',
  },
  {
    id: 7,
    title: 'Surfista brasileira vence etapa do circuito mundial',
    excerpt: 'Manobras perfeitas na onda garantem vitória e liderança no ranking internacional.',
    category: 'Esportes Radicais',
    date: '07 Jul 2026',
    readTime: '4 min',
    gradient: 'linear-gradient(135deg, #164e63, #22d3ee)',
    icon: '🏄',
  },
]

export const weekAgenda = [
  {
    id: 1,
    date: '10 Jul',
    day: 'Sex',
    time: '16:00',
    sport: 'Futebol',
    event: 'Brasil x Argentina — Eliminatórias',
    location: 'Maracanã, RJ',
    status: 'Hoje',
  },
  {
    id: 2,
    date: '11 Jul',
    day: 'Sáb',
    time: '21:30',
    sport: 'Basquete',
    event: 'Final da Conferência Leste — NBA',
    location: 'Boston, EUA',
    status: 'Amanhã',
  },
  {
    id: 3,
    date: '12 Jul',
    day: 'Dom',
    time: '15:00',
    sport: 'Fórmula 1',
    event: 'GP da Europa — Corrida',
    location: 'Silverstone, UK',
    status: 'Em breve',
  },
  {
    id: 4,
    date: '13 Jul',
    day: 'Seg',
    time: '20:00',
    sport: 'Vôlei',
    event: 'Superliga Feminina — Semifinal',
    location: 'Belo Horizonte, BR',
    status: 'Em breve',
  },
  {
    id: 5,
    date: '14 Jul',
    day: 'Ter',
    time: '19:00',
    sport: 'Lutas',
    event: 'UFC Fight Night — Card Principal',
    location: 'Las Vegas, EUA',
    status: 'Em breve',
  },
  {
    id: 6,
    date: '15 Jul',
    day: 'Qua',
    time: '14:00',
    sport: 'Tênis',
    event: 'Wimbledon — Semifinais',
    location: 'Londres, UK',
    status: 'Em breve',
  },
]

export const curiosities = [
  {
    id: 1,
    question: 'Por que o futebol tem 11 jogadores?',
    answer:
      'A regra surgiu na Inglaterra do século XIX, quando os times universitários adotaram 11 atletas para equilibrar o campo e o número permaneceu até hoje.',
    sport: 'Futebol',
  },
  {
    id: 2,
    question: 'Como surgiu a Fórmula 1?',
    answer:
      'O campeonato mundial foi criado em 1950 pela FIA, reunindo as principais corridas da Europa em um único título de pilotos.',
    sport: 'Fórmula 1',
  },
  {
    id: 3,
    question: 'Por que o tênis conta 15, 30 e 40?',
    answer:
      'A pontuação vem do jogo de paume medieval francês, em que o relógio marcava quartos de hora a cada ponto conquistado.',
    sport: 'Tênis',
  },
  {
    id: 4,
    question: 'Qual o esporte mais antigo do mundo?',
    answer:
      'A luta livre e o atletismo aparecem em registros de mais de 3.000 anos, com competições documentadas na Grécia Antiga.',
    sport: 'Olímpicos',
  },
]

export const stories = [
  {
    id: 1,
    year: '1970',
    title: 'O tetra que encantou o mundo',
    excerpt:
      'A Seleção Brasileira de 1970 é considerada a maior de todos os tempos, com futebol arte que eternizou Pelé e companhia.',
    sport: 'Futebol',
    tag: 'Copa do Mundo',
  },
  {
    id: 2,
    year: '2016',
    title: 'A virada impossível no basquete',
    excerpt:
      'Time americano venceu após estar 25 pontos atrás no terceiro quarto — uma das maiores recuperações da história da NBA.',
    sport: 'Basquete',
    tag: 'Recordes',
  },
  {
    id: 3,
    year: '2008',
    title: 'O salto que desafiou a gravidade',
    excerpt:
      'Usain Bolt cruzou a linha dos 100m em 9,69s na final olímpica, celebrando antes da chegada e entrando para a história.',
    sport: 'Atletismo',
    tag: 'Olimpíadas',
  },
  {
    id: 4,
    year: '1980',
    title: 'O milagre do gelo',
    excerpt:
      'A seleção amadora dos EUA derrotou a poderosa URSS no hóquei olímpico — um dos maiores upsets do esporte mundial.',
    sport: 'Hóquei',
    tag: 'História',
  },
]

export const fanModeChips = [
  { label: 'Ver futebol', href: '#modalidades', icon: '⚽' },
  { label: 'Ver agenda', href: '#agenda', icon: '📅' },
  { label: 'Ver curiosidades', href: '#curiosidades', icon: '💡' },
  { label: 'Ver histórias', href: '#historias', icon: '📖' },
]

export const footerLinks = {
  navegacao: [
    { label: 'Início', href: '#inicio' },
    { label: 'Destaques', href: '#destaques' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Agenda', href: '#agenda' },
  ],
  conteudo: [
    { label: 'Últimas notícias', href: '#noticias' },
    { label: 'Curiosidades', href: '#curiosidades' },
    { label: 'Histórias', href: '#historias' },
    { label: 'Newsletter', href: '#newsletter' },
  ],
  institucional: [
    { label: 'Sobre nós', href: '#contato' },
    { label: 'Política de privacidade', href: '#contato' },
    { label: 'Termos de uso', href: '#contato' },
    { label: 'Contato', href: '#contato' },
  ],
}

export const socialLinks = [
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'YouTube', href: '#', icon: 'youtube' },
  { name: 'Facebook', href: '#', icon: 'facebook' },
]
