import SportImage from './SportImage'
import { mainHeadline } from '../data/siteData'
import SectionTitle from './SectionTitle'
import SectionReveal from './SectionReveal'

function FeaturedNews({ onReadMore }) {
  return (
    <section id="manchete" className="section featured-news">
      <div className="container">
        <SectionReveal>
          <SectionTitle
            label="Cobertura especial"
            title="Destaque do Dia"
            subtitle="A principal história esportiva do momento em uma cobertura especial."
          />
        </SectionReveal>

        <SectionReveal>
          <article className="featured-news__main card">
            <div className="featured-news__image-wrap">
              <SportImage
                src={mainHeadline.image}
                filter={mainHeadline.filter}
                alt={mainHeadline.category}
                className="featured-news__img"
              />
              <div className="featured-news__overlay" />
              <span className="featured-news__tag">{mainHeadline.tag}</span>
            </div>
            <div className="featured-news__body">
              <div className="featured-news__meta">
                <span className="featured-news__category">{mainHeadline.category}</span>
                <time>{mainHeadline.date}</time>
                <span>{mainHeadline.readTime} de leitura</span>
              </div>
              <h2 className="featured-news__title">{mainHeadline.title}</h2>
              <p className="featured-news__excerpt">{mainHeadline.excerpt}</p>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => onReadMore(mainHeadline)}
              >
                Ler destaque
              </button>
            </div>
          </article>
        </SectionReveal>
      </div>
    </section>
  )
}

export default FeaturedNews
