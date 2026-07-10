import { useState } from 'react'
import { allNews, newsFilters } from '../data/siteData'
import SectionTitle from './SectionTitle'

function SportsHighlights({ onReadMore }) {
  const [activeFilter, setActiveFilter] = useState('todos')

  const filtered =
    activeFilter === 'todos'
      ? allNews
      : allNews.filter((news) => news.filter === activeFilter)

  return (
    <section id="destaques" className="section highlights">
      <div className="container">
        <SectionTitle
          label="Cobertura"
          title="Destaques esportivos"
          subtitle="As principais notícias do mundo esportivo, filtradas por modalidade"
        />

        <div className="highlights__filters" role="tablist" aria-label="Filtrar notícias">
          {newsFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              className={`highlights__filter ${activeFilter === filter.id ? 'highlights__filter--active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="highlights__grid" id="noticias">
          {filtered.map((news) => (
            <article key={news.id} className="highlights__card card">
              <div className="highlights__image-wrap">
                <img src={news.image} alt="" className="highlights__img" />
                <div className="highlights__overlay" />
                <span className="highlights__category">{news.category}</span>
              </div>
              <div className="highlights__body">
                <div className="highlights__meta">
                  <time>{news.date}</time>
                  <span>{news.readTime} de leitura</span>
                </div>
                <h3>{news.title}</h3>
                <p>{news.excerpt}</p>
                <button
                  type="button"
                  className="highlights__btn"
                  onClick={() => onReadMore(news)}
                >
                  Ler mais →
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="highlights__empty">Nenhuma notícia encontrada para este filtro.</p>
        )}
      </div>
    </section>
  )
}

export default SportsHighlights
