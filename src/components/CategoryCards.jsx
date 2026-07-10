import { categories } from '../data/siteData'
import SectionTitle from './SectionTitle'

function CategoryCards() {
  return (
    <section id="categorias" className="section categories">
      <div className="container">
        <SectionTitle
          label="Modalidades"
          title="Categorias esportivas"
          subtitle="Explore notícias, resultados e curiosidades por modalidade"
        />

        <div className="categories__grid">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="categories__card card"
              style={{ '--accent': cat.color }}
            >
              <span className="categories__icon" aria-hidden="true">
                {cat.icon}
              </span>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <a href="#noticias" className="categories__link">
                Ver notícias
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryCards
