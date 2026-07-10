import { useEffect, useState } from 'react'
import { menuItems } from '../data/siteData'
import { useTheme } from '../context/ThemeContext'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__bar" />
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-mark" aria-hidden="true">
            <span className="header__logo-ball">⚽</span>
            <span className="header__logo-ring" />
          </span>
          <span className="header__logo-text">
            <span className="header__logo-line">Mundo do</span>
            <strong>Esporte</strong>
          </span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__menu">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__theme"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <a href="#destaques" className="header__cta btn btn--primary btn--sm">
            Ver destaques
          </a>

          <button
            type="button"
            className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
