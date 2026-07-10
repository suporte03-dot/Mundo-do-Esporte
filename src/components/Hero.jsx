function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" />
      <div className="hero__lines" aria-hidden="true" />

      <div className="container hero__content">
        <span className="hero__badge">
          <span className="hero__badge-dot" />
          Ao vivo no esporte
        </span>

        <h1 className="hero__title">O esporte em todos os ângulos</h1>

        <p className="hero__subtitle">
          Notícias, curiosidades, histórias e agenda esportiva em um só lugar.
        </p>

        <div className="hero__actions">
          <a href="#destaques" className="btn btn--primary">
            Ver destaques
          </a>
          <a href="#agenda" className="btn btn--outline">
            Agenda da semana
          </a>
        </div>

        <div className="hero__ticker" aria-hidden="true">
          <div className="hero__ticker-track">
            <span>⚽ Futebol</span>
            <span>🏀 Basquete</span>
            <span>🏎️ Fórmula 1</span>
            <span>🥊 Lutas</span>
            <span>🎾 Tênis</span>
            <span>🏅 Olímpicos</span>
            <span>⚽ Futebol</span>
            <span>🏀 Basquete</span>
            <span>🏎️ Fórmula 1</span>
            <span>🥊 Lutas</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
