import SportImage from './SportImage'
import { heroStats, sportImages } from '../data/siteData'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <SportImage src={sportImages.hero} className="hero__bg-img" loading="eager" />
      <div className="hero__overlay" />
      <div className="hero__grid-lines" aria-hidden="true" />
      <div className="hero__spotlight" aria-hidden="true" />

      <div className="container hero__layout">
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Portal esportivo
          </span>

          <h1 className="hero__title">
            O esporte em <span className="hero__highlight">todos os ângulos</span>
          </h1>

          <p className="hero__subtitle">
            Notícias, agenda, modalidades, curiosidades e histórias marcantes do
            universo esportivo em uma experiência moderna e completa.
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

        <div className="hero__stats">
          {heroStats.map((stat) => (
            <div key={stat.label} className="hero__stat card">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
