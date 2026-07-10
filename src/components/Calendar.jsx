import { events } from '../data/siteData'
import SectionTitle from './SectionTitle'

function Calendar() {
  return (
    <section id="calendario" className="section calendar">
      <div className="container">
        <SectionTitle
          label="Agenda"
          title="Calendário de eventos"
          subtitle="Não perca os principais jogos e competições do mês"
        />

        <div className="calendar__list">
          {events.map((event) => (
            <article key={event.id} className="calendar__item card">
              <div className="calendar__date">
                <span className="calendar__day">{event.date}</span>
                <span className="calendar__weekday">{event.day}</span>
              </div>
              <div className="calendar__info">
                <span className="calendar__sport">{event.sport}</span>
                <h3>{event.title}</h3>
                <p>{event.location}</p>
              </div>
              <a href="#calendario" className="calendar__btn">
                Detalhes
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Calendar
