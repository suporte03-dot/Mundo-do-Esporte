import { weekAgenda } from '../data/siteData'
import SectionTitle from './SectionTitle'

const statusClass = {
  Hoje: 'scoreboard__status--today',
  Amanhã: 'scoreboard__status--tomorrow',
  'Em breve': 'scoreboard__status--soon',
}

function WeekAgenda() {
  return (
    <section id="agenda" className="section agenda">
      <div className="container">
        <SectionTitle
          label="Programação"
          title="Agenda da Semana"
          subtitle="Os principais eventos esportivos que você não pode perder"
          light
        />

        <div className="scoreboard">
          <div className="scoreboard__header">
            <span>Data</span>
            <span>Horário</span>
            <span>Modalidade</span>
            <span>Evento</span>
            <span>Status</span>
          </div>

          {weekAgenda.map((event) => (
            <article key={event.id} className="scoreboard__row card">
              <div className="scoreboard__date">
                <strong>{event.date}</strong>
                <span>{event.day}</span>
              </div>
              <div className="scoreboard__time">
                <span className="scoreboard__clock">{event.time}</span>
              </div>
              <div className="scoreboard__sport">{event.sport}</div>
              <div className="scoreboard__event">
                <strong>{event.event}</strong>
                <span>{event.description}</span>
                <em>{event.location}</em>
              </div>
              <div className={`scoreboard__status ${statusClass[event.status]}`}>
                {event.status}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeekAgenda
