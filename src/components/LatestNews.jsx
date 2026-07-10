import { latestNews } from '../data/siteData'
import SectionTitle from './SectionTitle'

function LatestNews() {
  return (
    <section id="noticias" className="section latest">
      <div className="container">
        <SectionTitle
          label="Feed"
          title="Últimas Notícias"
          subtitle="Tudo que está acontecendo no esporte, atualizado para você"
        />

        <div className="latest__grid">
          {latestNews.map((news) => (
            <article key={news.id} className="latest__card card">
              <div
                className="latest__image"
                style={{ background: news.gradient }}
              >
                <span className="latest__icon" aria-hidden="true">
                  {news.icon}
                </span>
                <span className="latest__category">{news.category}</span>
              </div>

              <div className="latest__body">
                <time className="latest__date">{news.date}</time>
                <h3>{news.title}</h3>
                <p>{news.excerpt}</p>
                <a href="#noticias" className="latest__btn">
                  Ler notícia →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews
