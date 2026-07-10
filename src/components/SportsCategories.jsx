import SportImage from './SportImage'
import { categories } from '../data/siteData'
import SectionTitle from './SectionTitle'
import SectionReveal from './SectionReveal'

function SportsCategories() {
  return (
    <section id="modalidades" className="section categories">
      <div className="container">
        <SectionReveal>
          <SectionTitle
            label="Explore"
            title="Modalidades em destaque"
            subtitle="Explore os esportes que movimentam torcedores, atletas e grandes competições pelo mundo."
          />
        </SectionReveal>

        <div className="categories__grid">
          {categories.map((cat, index) => (
            <SectionReveal key={cat.id}>
              <article
                className="categories__card card"
                style={{ '--accent': cat.color, '--delay': `${index * 0.05}s` }}
              >
                <div className="categories__visual">
                  <SportImage src={cat.image} filter={cat.id} className="categories__img" />
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
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SportsCategories
