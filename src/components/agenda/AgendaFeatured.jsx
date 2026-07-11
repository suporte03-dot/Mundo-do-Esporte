import SportImage from '../SportImage'

function AgendaFeatured({ event, onDetails }) {
  if (!event) return null

  return (
    <article
      className="agenda-featured card card--clickable"
      role="button"
      tabIndex={0}
      onClick={() => onDetails(event)}
      onKeyDown={(eventKey) => eventKey.key === 'Enter' && onDetails(event)}
    >
      <div className="agenda-featured__visual">
        <SportImage
          src={event.image}
          filter={event.filter}
          alt={event.sport}
          className="agenda-featured__img"
        />
        <div className="agenda-featured__overlay" />
        <span className="agenda-featured__badge">Evento em Destaque</span>
      </div>
      <div className="agenda-featured__body">
        <div className="agenda-featured__meta">
          <span className="agenda-featured__sport">{event.sport}</span>
          <span className="agenda-featured__tag">{event.tag}</span>
        </div>
        <h3 className="agenda-featured__title">{event.title}</h3>
        <p className="agenda-featured__summary">{event.description}</p>
        <div className="agenda-featured__info">
          <span>{event.date} · {event.day}</span>
          <span>{event.time}</span>
          <span>{event.location}</span>
        </div>
        <button
          type="button"
          className="btn btn--primary"
          onClick={(e) => {
            e.stopPropagation()
            onDetails(event)
          }}
        >
          Ver detalhes
        </button>
      </div>
    </article>
  )
}

export default AgendaFeatured
