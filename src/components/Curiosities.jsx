import { curiosities } from '../data/siteData'
import SectionTitle from './SectionTitle'

function Curiosities() {
  return (
    <section id="curiosidades" className="section curiosities">
      <div className="container">
        <SectionTitle
          label="Você Sabia?"
          title="Curiosidades esportivas"
          subtitle="Perguntas e respostas rápidas sobre o universo do esporte"
        />

        <div className="curiosities__grid">
          {curiosities.map((item) => (
            <article key={item.id} className="curiosities__card card">
              <span className="curiosities__icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="curiosities__sport">{item.sport}</span>
              <h3 className="curiosities__question">{item.question}</h3>
              <p className="curiosities__answer">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Curiosities
