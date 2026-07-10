import { featuredNews } from '../data/siteData'
import SectionTitle from './SectionTitle'

function FeaturedNews() {
  const [main, ...others] = featuredNews

  return (
    <section id="noticias" className="section featured">
      <div className="container">
        <SectionTitle
          label="Em destaque"
          title="Notícias em destaque"
          subtitle="As principais manchetes do mundo esportivo nesta semana"
        />

        <div className="featured__grid">
          <article className="featured__main card">
            <div className="featured__image featured__image--main">
              <span className="featured__tag">{main.tag}</span>
            </div>
            <div className="featured__body">
              <div className="featured__meta">
                <span className="featured__category">{main.category}</span>
                <time>{main.date}</time>
              </div>
              <h3>{main.title}</h3>
              <p>{main.excerpt}</p>
              <a href="#noticias" className="featured__link">
                Ler matéria completa →
              </a>
            </div>
          </article>

          <div className="featured__side">
            {others.map((news) => (
              <article key={news.id} className="featured__side-card card">
                <div
                  className="featured__image featured__image--side"
                  data-category={news.category}
                >
                  <span className="featured__tag featured__tag--small">
                    {news.tag}
                  </span>
                </div>
                <div className="featured__body">
                  <div className="featured__meta">
                    <span className="featured__category">{news.category}</span>
                    <time>{news.date}</time>
                  </div>
                  <h3>{news.title}</h3>
                  <p>{news.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedNews
