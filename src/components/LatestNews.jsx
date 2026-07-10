import { latestNews } from '../data/siteData'
import SectionTitle from './SectionTitle'

function LatestNews() {
  return (
    <section className="section latest">
      <div className="container">
        <SectionTitle
          label="Atualizações"
          title="Últimas notícias"
          subtitle="Fique por dentro de tudo que acontece no esporte"
        />

        <div className="latest__grid">
          {latestNews.map((news) => (
            <article key={news.id} className="latest__card card">
              <div className="latest__header">
                <span className="latest__category">{news.category}</span>
                <time>{news.date}</time>
              </div>
              <h3>{news.title}</h3>
              <div className="latest__footer">
                <span>{news.readTime} de leitura</span>
                <a href="#noticias">Ler mais</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews
