import { spotlightOfTheDay } from '../data/siteData'
import SectionTitle from './SectionTitle'

function SpotlightOfTheDay() {
  const item = spotlightOfTheDay

  return (
    <section id="destaques" className="section spotlight">
      <div className="container">
        <SectionTitle
          label="Manchete"
          title="Destaque do Dia"
          subtitle="A notícia que está movimentando o mundo esportivo agora"
        />

        <article className="spotlight__card card">
          <div
            className="spotlight__image"
            style={{ background: item.gradient }}
          >
            <span className="spotlight__icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="spotlight__tag">{item.tag}</span>
          </div>

          <div className="spotlight__body">
            <div className="spotlight__meta">
              <span className="spotlight__category">{item.category}</span>
              <time>{item.date}</time>
              <span className="spotlight__read">{item.readTime} de leitura</span>
            </div>

            <h3 className="spotlight__title">{item.title}</h3>
            <p className="spotlight__excerpt">{item.excerpt}</p>

            <a href="#destaques" className="btn btn--primary spotlight__btn">
              Ler mais
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default SpotlightOfTheDay
