import athletesMark from '../../assets/branding/evoluafit-athletes-mark.png'

const SIZE_MAP = {
  small: 'small',
  medium: 'medium',
  large: 'large',
}

/**
 * EvoluaFit brand mark — hexagonal athletes symbol + wordmark.
 * Used in the mobile header. Sidebar uses EvoluaFitBrand.
 */
export default function EvoluaFitLogo({
  size = 'medium',
  compact = false,
  showWordmark = true,
  className = '',
}) {
  const sizeKey = SIZE_MAP[size] || 'medium'
  const showText = Boolean(showWordmark) && !compact

  return (
    <span
      className={[
        'evoluafit-logo',
        `evoluafit-logo--${sizeKey}`,
        compact ? 'evoluafit-logo--compact' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label="EvoluaFit"
      title={compact || !showText ? 'EvoluaFit' : undefined}
    >
      <img
        src={athletesMark}
        alt=""
        aria-hidden="true"
        className="evoluafit-logo__mark"
        draggable={false}
        decoding="async"
      />
      {showText ? (
        <span className="evoluafit-logo__wordmark" aria-hidden="true">
          <span className="evoluafit-logo__wordmark-main">Evolua</span>
          <span className="evoluafit-logo__wordmark-accent">Fit</span>
        </span>
      ) : null}
    </span>
  )
}