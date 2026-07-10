import { curiosities } from '../data/siteData'
import SectionTitle from './SectionTitle'

function Curiosities() {
  return (
    <section id="curiosidades" className="section curiosities">
      <div className="container">
        <SectionTitle
          label="Você sabia?"
          title="Curiosidades esportivas"
          subtitle="Fatos incríveis que fazem parte da história do esporte"
        />

        <div className="curiosities__grid">
          {curiosities.map((item, index) => (
            <article key={item.id} className="curiosities__card card">
              <span className="curiosities__number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="curiosities__sport">{item.sport}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Curiosities
