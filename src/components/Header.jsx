import { useEffect, useState } from 'react'
import { navItems, BRAND } from '../data/siteData'
import { scrollToSection, handleSectionClick } from '../utils/scrollToSection'

const logoUrl = (file) => `${import.meta.env.BASE_URL}assets/${file}`

export default function Header({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = (id) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a
          href="#inicio"
          className="brand header__brand"
          onClick={(e) => handleSectionClick(e, 'inicio', () => setMenuOpen(false))}
        >
          <img
            src={logoUrl('evoluafit-logo.png')}
            alt="EvoluaFit - Treinos inteligentes, evolução real"
            className="brand-logo brand-logo--full"
          />
          <img
            src={logoUrl('evoluafit-icon.png')}
            alt="EvoluaFit"
            className="brand-logo brand-logo--compact"
          />
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`header__link ${activeSection === item.id ? 'header__link--active' : ''}`}
              onClick={(e) => handleSectionClick(e, item.id, () => setMenuOpen(false))}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="btn btn--primary btn--sm" onClick={() => navigate('planilha')}>
            Criar meu treino
          </button>
          <button
            type="button"
            className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <p className="header__disclaimer container">{BRAND.disclaimer}</p>
    </header>
  )
}
