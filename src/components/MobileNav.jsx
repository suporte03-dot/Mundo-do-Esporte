import { mobileNavItems } from '../data/siteData'
import { scrollToSection } from '../utils/scrollToSection'

export default function MobileNav({ activeSection }) {
  const navigate = (id) => scrollToSection(id)
  const coachActive = activeSection === 'coach-ia'

  return (
    <>
      <button
        type="button"
        className={`coach-fab${coachActive ? ' is-active' : ''}`}
        onClick={() => navigate('coach-ia')}
        aria-label="Abrir Coach IA"
      >
        <span className="coach-fab__icon" aria-hidden="true">
          ✦
        </span>
        <span className="coach-fab__label">Coach</span>
      </button>

      <nav className="mobile-nav mobile-nav--five" aria-label="Navegação rápida">
        {mobileNavItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`mobile-nav__item${activeSection === item.id ? ' mobile-nav__item--active' : ''}`}
            onClick={() => navigate(item.id)}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            <span className="mobile-nav__icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="mobile-nav__label">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
