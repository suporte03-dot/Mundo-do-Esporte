export const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Futebol', href: '#categorias' },
  { label: 'Esportes', href: '#categorias' },
  { label: 'Curiosidades', href: '#curiosidades' },
  { label: 'Calendário', href: '#calendario' },
  { label: 'Contato', href: '#contato' },
]

export const featuredNews = [
  {
    id: 1,
    title: 'Seleção brasileira anuncia convocados para amistosos internacionais',
    excerpt:
      'Técnico revela lista com novidades e veteranos para preparar a equipe rumo à próxima competição continental.',
    category: 'Futebol',
    date: '10 Jul 2026',
    tag: 'Destaque',
  },
  {
    id: 2,
    title: 'NBA: franquia surpreende e avança às finais da conferência',
    excerpt:
      'Vitória épica no jogo 7 coloca time no mapa da temporada e anima torcida para decisão histórica.',
    category: 'Basquete',
    date: '09 Jul 2026',
    tag: 'NBA',
  },
  {
    id: 3,
    title: 'Superliga feminina define semifinalistas após rodada decisiva',
    excerpt:
      'Clássicos e viradas marcaram a fase final do campeonato nacional de vôlei.',
    category: 'Vôlei',
    date: '08 Jul 2026',
    tag: 'Superliga',
  },
]

export const categories = [
  {
    id: 'futebol',
    name: 'Futebol',
    icon: '⚽',
    description: 'Campeonatos, mercado da bola e seleções',
    color: '#00a650',
  },
  {
    id: 'basquete',
    name: 'Basquete',
    icon: '🏀',
    description: 'NBA, NBB e competições internacionais',
    color: '#f5a623',
  },
  {
    id: 'volei',
    name: 'Vôlei',
    icon: '🏐',
    description: 'Superliga, seleções e torneios mundiais',
    color: '#3b82f6',
  },
  {
    id: 'formula1',
    name: 'Fórmula 1',
    icon: '🏎️',
    description: 'GPs, pilotos e classificação do mundial',
    color: '#ef4444',
  },
  {
    id: 'lutas',
    name: 'Lutas',
    icon: '🥊',
    description: 'UFC, boxe e artes marciais',
    color: '#8b5cf6',
  },
  {
    id: 'tenis',
    name: 'Tênis',
    icon: '🎾',
    description: 'Grand Slams, ATP e WTA',
    color: '#10b981',
  },
  {
    id: 'olimpicos',
    name: 'Esportes Olímpicos',
    icon: '🏅',
    description: 'Atletismo, natação e modalidades olímpicas',
    color: '#f97316',
  },
]

export const latestNews = [
  {
    id: 4,
    title: 'Corredor brasileiro bate recorde sul-americano nos 100m',
    category: 'Atletismo',
    date: '10 Jul 2026',
    readTime: '4 min',
  },
  {
    id: 5,
    title: 'Pilotos da F1 disputam pole position no Grande Prêmio da Europa',
    category: 'Fórmula 1',
    date: '09 Jul 2026',
    readTime: '3 min',
  },
  {
    id: 6,
    title: 'Lutador nacional conquista cinturão em evento internacional',
    category: 'Lutas',
    date: '09 Jul 2026',
    readTime: '5 min',
  },
  {
    id: 7,
    title: 'Tênis: brasileira avança às quartas em torneio de Grand Slam',
    category: 'Tênis',
    date: '08 Jul 2026',
    readTime: '3 min',
  },
  {
    id: 8,
    title: 'Clube histórico anuncia novo técnico para a próxima temporada',
    category: 'Futebol',
    date: '08 Jul 2026',
    readTime: '4 min',
  },
  {
    id: 9,
    title: 'Seleção de basquete estreia com vitória em torneio pré-olímpico',
    category: 'Basquete',
    date: '07 Jul 2026',
    readTime: '4 min',
  },
]

export const curiosities = [
  {
    id: 1,
    title: 'O gol mais rápido da história',
    text: 'Um jogador marcou aos 2,4 segundos de jogo em partida oficial, entrando para o Guinness.',
    sport: 'Futebol',
  },
  {
    id: 2,
    title: 'Recorde de pontos em um jogo da NBA',
    text: 'Wilt Chamberlain marcou 100 pontos em um único jogo — feito que permanece inigualável.',
    sport: 'Basquete',
  },
  {
    id: 3,
    title: 'A bola de ouro olímpica',
    text: 'O vôlei de praia se tornou modalidade olímpica em 1996 e revolucionou o esporte de areia.',
    sport: 'Vôlei',
  },
  {
    id: 4,
    title: 'Velocidade extrema na pista',
    text: 'Carros de Fórmula 1 podem ultrapassar 350 km/h em trechos de alta velocidade.',
    sport: 'Fórmula 1',
  },
]

export const events = [
  {
    id: 1,
    date: '12 Jul',
    day: 'Dom',
    title: 'Final do Campeonato Estadual',
    sport: 'Futebol',
    location: 'São Paulo, BR',
  },
  {
    id: 2,
    date: '15 Jul',
    day: 'Qua',
    title: 'Grand Slam de Tênis — Semifinais',
    sport: 'Tênis',
    location: 'Londres, UK',
  },
  {
    id: 3,
    date: '18 Jul',
    day: 'Sáb',
    title: 'GP da Europa — Corrida Principal',
    sport: 'Fórmula 1',
    location: 'Silverstone, UK',
  },
  {
    id: 4,
    date: '20 Jul',
    day: 'Seg',
    title: 'UFC Fight Night',
    sport: 'Lutas',
    location: 'Las Vegas, EUA',
  },
  {
    id: 5,
    date: '22 Jul',
    day: 'Qua',
    title: 'Superliga Feminina — Final',
    sport: 'Vôlei',
    location: 'Belo Horizonte, BR',
  },
]

export const footerLinks = {
  navegacao: [
    { label: 'Início', href: '#inicio' },
    { label: 'Notícias', href: '#noticias' },
    { label: 'Categorias', href: '#categorias' },
    { label: 'Calendário', href: '#calendario' },
  ],
  esportes: [
    { label: 'Futebol', href: '#categorias' },
    { label: 'Basquete', href: '#categorias' },
    { label: 'Vôlei', href: '#categorias' },
    { label: 'Fórmula 1', href: '#categorias' },
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
