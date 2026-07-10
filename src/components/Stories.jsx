import { stories } from '../data/siteData'
import SectionTitle from './SectionTitle'

function Stories() {
  return (
    <section id="historias" className="section stories">
      <div className="container">
        <SectionTitle
          label="Editorial"
          title="Histórias que Marcaram"
          subtitle="Momentos históricos, viradas épicas e recordes que entraram para a eternidade"
          light
        />

        <div className="stories__grid">
          {stories.map((story) => (
            <article key={story.id} className="stories__card card">
              <div className="stories__icon-wrap">
                <span className="stories__icon" aria-hidden="true">
                  {story.icon}
                </span>
              </div>
              <div className="stories__top">
                <span className="stories__year">{story.year}</span>
                <span className="stories__tag">{story.tag}</span>
              </div>
              <span className="stories__sport">{story.sport}</span>
              <h3>{story.title}</h3>
              <p>{story.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stories
