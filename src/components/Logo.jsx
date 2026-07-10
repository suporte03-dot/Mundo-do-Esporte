function Logo({ showTagline = false, compact = false }) {
  return (
    <span className={`logo ${compact ? 'logo--compact' : ''}`}>
      <svg
        className="logo__icon"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="22" stroke="#00E887" strokeWidth="2" strokeDasharray="4 3" opacity="0.5" />
        <circle cx="24" cy="24" r="16" fill="#0D2A4D" stroke="#00E887" strokeWidth="1.5" />
        <path
          d="M24 12 L34 32 H28 L24 24 L20 32 H14 Z"
          fill="#00E887"
        />
        <circle cx="34" cy="14" r="4" fill="#FF9F1C" opacity="0.9" />
      </svg>
      <span className="logo__text">
        <span className="logo__wordmark">
          <span className="logo__arena">Arena</span>
          <span className="logo__360">360</span>
        </span>
        {showTagline && (
          <span className="logo__tagline">O esporte em todos os ângulos</span>
        )}
      </span>
    </span>
  )
}

export default Logo
