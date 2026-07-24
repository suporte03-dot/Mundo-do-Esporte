import athletesMark from '../../assets/branding/evoluafit-athletes-mark.png'

/**
 * EvoluaFit sidebar brand block.
 * Layout: [ mark ] [ EvoluaFit + tagline ] [ collapse ]
 * Name and slogan remain real HTML text — not baked into the mark image.
 */
export default function EvoluaFitBrand({
  collapsed = false,
  className = '',
  collapseControl = null,
  onNavigateHome,
}) {
  return (
    <div
      className={[
        'evoluafit-brand',
        collapsed ? 'evoluafit-brand--collapsed' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <a
        href="#inicio"
        className="evoluafit-brand__identity"
        onClick={onNavigateHome}
        aria-label="EvoluaFit — Treine com foco. Evolua com constância."
        title={collapsed ? 'EvoluaFit' : undefined}
      >
        <img
          src={athletesMark}
          alt=""
          aria-hidden="true"
          className="evoluafit-brand__mark"
          draggable={false}
          decoding="async"
        />

        {!collapsed && (
          <div className="evoluafit-brand__content" aria-hidden="true">
            <div className="evoluafit-brand__name">
              <span className="evoluafit-brand__name-main">Evolua</span>
              <span className="evoluafit-brand__name-accent">Fit</span>
            </div>

            <p className="evoluafit-brand__tagline">
              Treine com foco. <span className="evoluafit-brand__tagline-accent">Evolua</span> com
              constância.
            </p>
          </div>
        )}
      </a>

      {collapseControl}
    </div>
  )
}