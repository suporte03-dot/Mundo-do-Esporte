import SportImage from './SportImage'
import { stories } from '../data/siteData'
import SectionTitle from './SectionTitle'
import SectionReveal from './SectionReveal'

function Stories() {
  return (
    <section id="historias" className="section stories">
      <div className="container">
        <SectionReveal>
          <SectionTitle
            label="Editorial"
            title="Histórias que Marcaram"
            subtitle="Momentos que fizeram o esporte virar memória, emoção e legado."
            light
          />
        </SectionReveal>

        <div className="stories__grid">
          {stories.map((story, index) => (
            <SectionReveal key={story.id}>
              <article
                className="stories__card card"
                style={{ '--delay': `${index * 0.07}s` }}
              >
                <div className="stories__image-wrap">
                  <SportImage src={story.image} className="stories__img" />
                  <div className="stories__overlay" />
                </div>
                <div className="stories__body">
                  <div className="stories__top">
                    <span className="stories__tag">{story.tag}</span>
                    <span className="stories__sport">{story.sport}</span>
                  </div>
                  <h3>{story.title}</h3>
                  <p>{story.excerpt}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stories
