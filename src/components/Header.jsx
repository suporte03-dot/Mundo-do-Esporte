import { useEffect, useState } from 'react'
import { scrollToSection, handleSectionClick } from '../utils/scrollToSection'
import { IconMenu } from './dashboard/icons'

const logoUrl = (file) => `${import.meta.env.BASE_URL}assets/${file}`

/**
 * Compact mobile top bar for SaaS shell.
 * Desktop navigation lives in DashboardSidebar — this header is mobile-only.
 */
export default function Header({ onOpenDashboardMenu }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header header--saas-mobile ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        {onOpenDashboardMenu && (
          <button
            type="button"
            className="header__dash-menu"
            onClick={onOpenDashboardMenu}
            aria-label="Abrir menu do painel"
          >
            <IconMenu size={20} />
          </button>
        )}

        <a
          href="#inicio"
          className="brand-logo header__brand"
          onClick={(e) => handleSectionClick(e, 'inicio')}
          aria-label="EvoluaFit — Início"
        >
          <img
            src={logoUrl('evoluafit-icon.png')}
            alt=""
            className="brand-icon"
            width={48}
            height={48}
          />
          <div className="brand-copy">
            <strong className="brand-name">
              <span>Evolua</span>
              <em className="brand-name__fit">Fit</em>
            </strong>
          </div>
        </a>

        <button
          type="button"
          className="btn btn--primary header__cta-desktop btn--start-workout"
          onClick={() => scrollToSection('planilha')}
        >
          Criar treino
        </button>
      </div>
    </header>
  )
}
