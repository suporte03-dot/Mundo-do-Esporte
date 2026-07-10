function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <span className="hero__badge">Portal esportivo #1 do Brasil</span>
        <h1 className="hero__title">
          Tudo sobre o mundo do <span>esporte</span> em um só lugar
        </h1>
        <p className="hero__subtitle">
          Notícias em tempo real, análises, calendário de eventos e as
          curiosidades que movem o universo esportivo.
        </p>
        <div className="hero__actions">
          <a href="#noticias" className="btn btn--primary">
            Ver notícias
          </a>
          <a href="#calendario" className="btn btn--outline">
            Calendário de jogos
          </a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <strong>500+</strong>
            <span>Notícias por mês</span>
          </div>
          <div className="hero__stat">
            <strong>7</strong>
            <span>Modalidades</span>
          </div>
          <div className="hero__stat">
            <strong>24h</strong>
            <span>Cobertura</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
