import SportImage from './SportImage'
import { heroStats, sportImages } from '../data/siteData'
import { handleSectionClick, scrollToSection } from '../utils/scrollToSection'

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
            <a
              href="#destaques"
              className="btn btn--primary"
              onClick={(event) => handleSectionClick(event, 'destaques')}
            >
              Ver destaques
            </a>
            <a
              href="#agenda"
              className="btn btn--outline"
              onClick={(event) => handleSectionClick(event, 'agenda')}
            >
              Agenda da semana
            </a>
          </div>
        </div>

        <div className="hero__stats">
          {heroStats.map((stat) => (
            <button
              key={stat.label}
              type="button"
              className="hero__stat card hero__stat--clickable"
              onClick={() => scrollToSection(stat.sectionId)}
            >
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
