/**
 * Reference-faithful neon line-art icons for Biblioteca muscle-group cards.
 * Thin uniform stroke; color/glow via currentColor + CSS filters.
 */

const SW = 2

function SvgFrame({ children, className = '' }) {
  return (
    <svg
      className={`mg-illust ${className}`.trim()}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

/** 01 Peitoral — torso shield + twin pec lobes + sternum */
export function IllustChest() {
  return (
    <SvgFrame className="mg-illust--chest">
      <path
        d="M38 34 C42 18 52 12 60 12 C68 12 78 18 82 34 L88 56 C90 70 86 90 78 108 L70 126 C66 132 60 134 60 134 C60 134 54 132 50 126 L42 108 C34 90 30 70 32 56 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path d="M60 40 V118" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" opacity="0.85" />
      <path
        d="M42 48 C48 40 54 38 60 40 C56 52 50 62 42 70 C38 62 38 54 42 48 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M78 48 C72 40 66 38 60 40 C64 52 70 62 78 70 C82 62 82 54 78 48 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
    </SvgFrame>
  )
}

/** 02 Costas — rear torso: broad traps, spine, lat wings (not a leaf) */
export function IllustBack() {
  return (
    <SvgFrame className="mg-illust--back">
      <path
        d="M24 36 C30 24 42 20 60 20 C78 20 90 24 96 36"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
      <path
        d="M28 40 C34 34 44 30 60 30 C76 30 86 34 92 40 L96 58 C98 74 92 96 80 114 L70 126 C66 130 60 132 60 132 C60 132 54 130 50 126 L40 114 C28 96 22 74 24 58 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path d="M60 30 V122" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M60 48 C46 52 36 62 30 76" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M60 48 C74 52 84 62 90 76" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M60 72 C48 78 40 90 36 104" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M60 72 C72 78 80 90 84 104" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
    </SvgFrame>
  )
}

/** 03 Pernas — hip bar + twin thigh pillars with muscle belly */
export function IllustLegs() {
  return (
    <SvgFrame className="mg-illust--legs">
      <path
        d="M30 24 H90 C94 24 96 28 96 32 V46 C96 52 92 56 86 58 L74 62 V128 H46 V62 L34 58 C28 56 24 52 24 46 V32 C24 28 26 24 30 24 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path d="M60 58 V128" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M40 84 C46 94 54 94 60 84" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
      <path d="M60 84 C66 94 74 94 80 84" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
      <path d="M42 108 H54" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" opacity="0.75" />
      <path d="M66 108 H78" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" opacity="0.75" />
    </SvgFrame>
  )
}

/** 04 Glúteos — pear posterior + upper cheek circle with cleft */
export function IllustGlutes() {
  return (
    <SvgFrame className="mg-illust--glutes">
      <path
        d="M60 18 C78 22 92 40 92 62 C92 90 78 114 60 130 C42 114 28 90 28 62 C28 40 42 22 60 18 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <circle cx="60" cy="56" r="24" stroke="currentColor" strokeWidth={SW} />
      <path d="M60 32 V80" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M36 78 C44 88 52 92 60 92 C68 92 76 88 84 78" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
    </SvgFrame>
  )
}

/** 05 Ombros — twin deltoid discs + neck block + head */
export function IllustShoulders() {
  return (
    <SvgFrame className="mg-illust--shoulders">
      <circle cx="26" cy="72" r="20" stroke="currentColor" strokeWidth={SW} />
      <circle cx="94" cy="72" r="20" stroke="currentColor" strokeWidth={SW} />
      <rect x="48" y="60" width="24" height="24" rx="6" stroke="currentColor" strokeWidth={SW} />
      <path d="M52 72 H68" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M46 72 H32" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M74 72 H88" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M60 48 V60" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <circle cx="60" cy="40" r="7" stroke="currentColor" strokeWidth={SW} />
    </SvgFrame>
  )
}

/** 06 Bíceps — flexed arm bean + peak circle */
export function IllustBiceps() {
  return (
    <SvgFrame className="mg-illust--biceps">
      <path
        d="M30 112 C26 92 30 70 42 52 C52 36 68 28 84 32 C96 35 104 46 102 58 C100 70 90 76 80 80 L70 84 C66 86 64 92 64 98 V118 C64 126 56 132 48 130 C38 128 32 122 30 112 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <circle cx="68" cy="52" r="13" stroke="currentColor" strokeWidth={SW} />
    </SvgFrame>
  )
}

/** 07 Tríceps — rear upper-arm with horseshoe heads (not empty oval) */
export function IllustTriceps() {
  return (
    <SvgFrame className="mg-illust--triceps">
      <path
        d="M44 20 C58 14 80 22 86 42 L94 78 C96 98 88 118 72 128 C62 134 50 130 44 120 L32 92 C26 76 26 56 32 42 C36 30 40 22 44 20 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M50 40 C42 56 42 78 50 98 C54 108 60 114 66 116"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
      <path
        d="M70 38 C78 54 80 78 72 100 C68 110 62 116 56 118"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
      <path d="M60 34 V118" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
    </SvgFrame>
  )
}

/** 08 Abdômen — tall capsule torso + 2×2 pack */
export function IllustAbs() {
  return (
    <SvgFrame className="mg-illust--abs">
      <rect x="36" y="16" width="48" height="108" rx="24" stroke="currentColor" strokeWidth={SW} />
      <rect x="44" y="36" width="13" height="13" rx="3" stroke="currentColor" strokeWidth={1.85} />
      <rect x="63" y="36" width="13" height="13" rx="3" stroke="currentColor" strokeWidth={1.85} />
      <rect x="44" y="55" width="13" height="13" rx="3" stroke="currentColor" strokeWidth={1.85} />
      <rect x="63" y="55" width="13" height="13" rx="3" stroke="currentColor" strokeWidth={1.85} />
      <path d="M60 78 V108" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
      <path d="M48 96 H72" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
    </SvgFrame>
  )
}

/** 09 Lombar — lower-back spade, spine + upward support ribs */
export function IllustLowerBack() {
  return (
    <SvgFrame className="mg-illust--lower-back">
      <path
        d="M60 16 C76 28 88 48 88 70 C88 96 76 114 60 132 C44 114 32 96 32 70 C32 48 44 28 60 16 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path d="M60 32 V120" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M60 54 L44 42" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M60 54 L76 42" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M60 74 L40 60" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M60 74 L80 60" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M60 94 L42 80" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M60 94 L78 80" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
    </SvgFrame>
  )
}

/** 10 Cardio — heart + ECG pulse */
export function IllustCardio() {
  return (
    <SvgFrame className="mg-illust--cardio">
      <path
        d="M60 120 C40 100 24 84 24 60 C24 44 36 32 50 32 C56 32 60 36 60 36 C60 36 64 32 70 32 C84 32 96 44 96 60 C96 84 80 100 60 120 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M32 66 H46 L52 48 L60 88 L68 56 L74 66 H92"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgFrame>
  )
}

/** 11 Mobilidade — seated stretch figure (head + V + pear + smile) */
export function IllustMobility() {
  return (
    <SvgFrame className="mg-illust--mobility">
      <circle cx="60" cy="22" r="10" stroke="currentColor" strokeWidth={SW} />
      <path
        d="M50 36 L60 48 L70 36"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 40 C28 58 22 86 34 112 C42 126 78 126 86 112 C98 86 92 58 70 40"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M36 70 C48 62 72 62 84 70" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M44 108 C52 116 68 116 76 108" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
    </SvgFrame>
  )
}

export function IllustForearm() {
  return (
    <SvgFrame className="mg-illust--forearm">
      <path
        d="M48 18 C58 14 70 18 76 30 L90 72 C94 86 90 100 80 112 L70 126 C66 132 58 132 54 126 L40 100 C34 90 32 76 38 64 L48 30 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path d="M54 42 C62 56 70 74 76 92" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" />
      <path d="M50 56 C58 70 66 86 70 100" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </SvgFrame>
  )
}

export function IllustTraps() {
  return (
    <SvgFrame className="mg-illust--traps">
      <path d="M52 16 H68 V34 C68 40 64 44 60 44 C56 44 52 40 52 34 Z" stroke="currentColor" strokeWidth={SW} strokeLinejoin="round" />
      <path
        d="M26 52 C36 40 48 34 60 34 C72 34 84 40 94 52 L100 68 C102 78 96 86 86 90 L72 96 H48 L34 90 C24 86 18 78 20 68 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path d="M60 44 V94" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M40 62 C50 54 70 54 80 62" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" />
    </SvgFrame>
  )
}

export function IllustCalves() {
  return (
    <SvgFrame className="mg-illust--calves">
      <path
        d="M40 16 H54 V52 C54 66 48 82 44 98 C42 110 44 120 50 128 H36 C32 114 32 102 36 90 C40 72 40 58 40 52 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M66 16 H80 V52 C80 66 86 82 90 98 C92 110 90 120 84 128 H70 C76 114 78 102 74 90 C70 72 66 58 66 52 Z"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <ellipse cx="47" cy="64" rx="8" ry="14" stroke="currentColor" strokeWidth={1.9} />
      <ellipse cx="73" cy="64" rx="8" ry="14" stroke="currentColor" strokeWidth={1.9} />
    </SvgFrame>
  )
}

export function IllustFunctional() {
  return (
    <SvgFrame className="mg-illust--functional">
      <circle cx="60" cy="24" r="10" stroke="currentColor" strokeWidth={SW} />
      <path
        d="M60 36 V64 M60 64 L40 90 M60 64 L80 90 M40 90 L34 118 M80 90 L86 118 M34 54 H86"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgFrame>
  )
}

export function IllustStretch() {
  return (
    <SvgFrame className="mg-illust--stretch">
      <circle cx="74" cy="26" r="10" stroke="currentColor" strokeWidth={SW} />
      <path
        d="M74 38 C68 54 56 66 42 74 C32 80 26 94 30 110"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
      />
      <path d="M58 56 C70 46 88 40 100 38" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M48 78 C40 92 36 106 40 120" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M52 80 C64 94 72 108 74 122" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
    </SvgFrame>
  )
}

const ILLUSTRATION_MAP = {
  chest: IllustChest,
  back: IllustBack,
  legs: IllustLegs,
  glutes: IllustGlutes,
  shoulders: IllustShoulders,
  biceps: IllustBiceps,
  triceps: IllustTriceps,
  abs: IllustAbs,
  'lower-back': IllustLowerBack,
  cardio: IllustCardio,
  mobility: IllustMobility,
  forearm: IllustForearm,
  traps: IllustTraps,
  calves: IllustCalves,
  functional: IllustFunctional,
  stretch: IllustStretch,
}

export function MuscleGroupIllustration({ name, className = '' }) {
  const Comp = ILLUSTRATION_MAP[name] || IllustChest
  return (
    <span className={`mg-illust-wrap ${className}`.trim()}>
      <Comp />
    </span>
  )
}

export { ILLUSTRATION_MAP }
