import { sportImages } from '../data/siteData'

function Hero() {
  return (
    <section className="hero">
      <img
        src={sportImages.hero}
        alt=""
        className="hero__bg-img"
        loading="eager"
      />
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
      </div>
    </section>
  )
}

export default Hero
