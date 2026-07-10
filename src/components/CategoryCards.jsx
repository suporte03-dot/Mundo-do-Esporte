import { categories } from '../data/siteData'
import SectionTitle from './SectionTitle'

function CategoryCards() {
  return (
    <section id="modalidades" className="section categories">
      <div className="container">
        <SectionTitle
          label="Explore"
          title="Modalidades"
          subtitle="Navegue por esporte e descubra conteúdo exclusivo de cada modalidade"
        />

        <div className="categories__grid">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="categories__card card"
              style={{ '--accent': cat.color }}
            >
              <div className="categories__visual">
                <img src={cat.image} alt="" className="categories__img" />
                <div className="categories__overlay" />
                <span className="categories__icon" aria-hidden="true">
                  {cat.icon}
                </span>
              </div>
              <div className="categories__content">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <a href="#destaques" className="categories__link">
                  Explorar →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryCards
