/**
 * Sticker-art anatomical illustrations for Biblioteca muscle-group cards.
 * Soft fills + thin clear outlines; neon color/glow via currentColor + CSS.
 */

const SW = 1.75

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

/** Soft body fill + neon highlight region helpers */
function Body({ d }) {
  return <path d={d} fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth={SW} strokeLinejoin="round" />
}

function Neon({ d, opacity = 0.38 }) {
  return <path d={d} fill="currentColor" fillOpacity={opacity} stroke="currentColor" strokeWidth={SW} strokeLinejoin="round" />
}

/** Peitoral — front torso with glowing pecs */
export function IllustChest() {
  return (
    <SvgFrame className="mg-illust--chest">
      <Body d="M38 34 C42 18 52 12 60 12 C68 12 78 18 82 34 L88 56 C90 70 86 90 78 108 L70 126 C66 132 60 134 60 134 C60 134 54 132 50 126 L42 108 C34 90 30 70 32 56 Z" />
      <path d="M60 40 V118" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity="0.55" />
      <Neon d="M42 48 C48 40 54 38 60 40 C56 52 50 62 42 70 C38 62 38 54 42 48 Z" opacity={0.48} />
      <Neon d="M78 48 C72 40 66 38 60 40 C64 52 70 62 78 70 C82 62 82 54 78 48 Z" opacity={0.48} />
      <ellipse cx="50" cy="50" rx="5" ry="3" fill="currentColor" fillOpacity="0.55" />
      <ellipse cx="70" cy="50" rx="5" ry="3" fill="currentColor" fillOpacity="0.55" />
    </SvgFrame>
  )
}

/** Costas — rear torso with glowing lats */
export function IllustBack() {
  return (
    <SvgFrame className="mg-illust--back">
      <path
        d="M24 36 C30 24 42 20 60 20 C78 20 90 24 96 36"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
        opacity="0.7"
      />
      <Body d="M28 40 C34 34 44 30 60 30 C76 30 86 34 92 40 L96 58 C98 74 92 96 80 114 L70 126 C66 130 60 132 60 132 C60 132 54 130 50 126 L40 114 C28 96 22 74 24 58 Z" />
      <path d="M60 30 V122" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" opacity="0.65" />
      <Neon d="M34 48 C42 44 50 42 60 44 C52 58 42 72 32 84 C28 72 28 58 34 48 Z" opacity={0.42} />
      <Neon d="M86 48 C78 44 70 42 60 44 C68 58 78 72 88 84 C92 72 92 58 86 48 Z" opacity={0.42} />
      <path d="M60 48 C46 52 36 62 30 76" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity="0.55" />
      <path d="M60 48 C74 52 84 62 90 76" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity="0.55" />
    </SvgFrame>
  )
}

/** Pernas — quads with neon belly */
export function IllustLegs() {
  return (
    <SvgFrame className="mg-illust--legs">
      <Body d="M30 24 H90 C94 24 96 28 96 32 V46 C96 52 92 56 86 58 L74 62 V128 H46 V62 L34 58 C28 56 24 52 24 46 V32 C24 28 26 24 30 24 Z" />
      <path d="M60 58 V128" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" opacity="0.55" />
      <Neon d="M46 68 C50 78 56 82 60 78 C56 90 50 104 48 118 H52 C54 104 58 90 60 78 C64 82 70 78 74 68 C72 88 70 108 72 128 H66 C64 108 62 88 60 78 C58 88 56 108 54 128 H48 C50 108 48 88 46 68 Z" opacity={0.4} />
      <path d="M40 84 C46 94 54 94 60 84" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity="0.7" />
      <path d="M60 84 C66 94 74 94 80 84" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity="0.7" />
    </SvgFrame>
  )
}

/** Glúteos */
export function IllustGlutes() {
  return (
    <SvgFrame className="mg-illust--glutes">
      <Body d="M60 18 C78 22 92 40 92 62 C92 90 78 114 60 130 C42 114 28 90 28 62 C28 40 42 22 60 18 Z" />
      <Neon d="M40 48 C48 36 56 34 60 36 C64 34 72 36 80 48 C82 58 78 70 60 78 C42 70 38 58 40 48 Z" opacity={0.44} />
      <path d="M60 36 V78" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" opacity="0.65" />
      <path d="M36 78 C44 88 52 92 60 92 C68 92 76 88 84 78" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" opacity="0.55" />
    </SvgFrame>
  )
}

/** Ombros */
export function IllustShoulders() {
  return (
    <SvgFrame className="mg-illust--shoulders">
      <circle cx="26" cy="72" r="20" fill="currentColor" fillOpacity="0.42" stroke="currentColor" strokeWidth={SW} />
      <circle cx="94" cy="72" r="20" fill="currentColor" fillOpacity="0.42" stroke="currentColor" strokeWidth={SW} />
      <rect x="48" y="60" width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth={SW} />
      <path d="M52 72 H68 M46 72 H32 M74 72 H88 M60 48 V60" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" opacity="0.7" />
      <circle cx="60" cy="40" r="7" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth={SW} />
      <ellipse cx="22" cy="66" rx="5" ry="3.5" fill="currentColor" fillOpacity="0.55" />
      <ellipse cx="98" cy="66" rx="5" ry="3.5" fill="currentColor" fillOpacity="0.55" />
    </SvgFrame>
  )
}

/** Bíceps */
export function IllustBiceps() {
  return (
    <SvgFrame className="mg-illust--biceps">
      <Body d="M30 112 C26 92 30 70 42 52 C52 36 68 28 84 32 C96 35 104 46 102 58 C100 70 90 76 80 80 L70 84 C66 86 64 92 64 98 V118 C64 126 56 132 48 130 C38 128 32 122 30 112 Z" />
      <circle cx="68" cy="52" r="13" fill="currentColor" fillOpacity="0.48" stroke="currentColor" strokeWidth={SW} />
      <ellipse cx="64" cy="46" rx="4.5" ry="3" fill="currentColor" fillOpacity="0.6" />
    </SvgFrame>
  )
}

/** Tríceps */
export function IllustTriceps() {
  return (
    <SvgFrame className="mg-illust--triceps">
      <Body d="M44 20 C58 14 80 22 86 42 L94 78 C96 98 88 118 72 128 C62 134 50 130 44 120 L32 92 C26 76 26 56 32 42 C36 30 40 22 44 20 Z" />
      <Neon
        d="M50 40 C42 56 42 78 50 98 C54 108 60 114 66 116 C60 100 56 78 58 52 C56 44 52 40 50 40 Z"
        opacity={0.42}
      />
      <path d="M60 34 V118" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity="0.55" />
      <path d="M70 38 C78 54 80 78 72 100" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity="0.55" />
    </SvgFrame>
  )
}

/** Abdômen */
export function IllustAbs() {
  return (
    <SvgFrame className="mg-illust--abs">
      <rect x="36" y="16" width="48" height="108" rx="24" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth={SW} />
      <rect x="44" y="36" width="13" height="13" rx="3" fill="currentColor" fillOpacity="0.42" stroke="currentColor" strokeWidth={1.5} />
      <rect x="63" y="36" width="13" height="13" rx="3" fill="currentColor" fillOpacity="0.42" stroke="currentColor" strokeWidth={1.5} />
      <rect x="44" y="55" width="13" height="13" rx="3" fill="currentColor" fillOpacity="0.42" stroke="currentColor" strokeWidth={1.5} />
      <rect x="63" y="55" width="13" height="13" rx="3" fill="currentColor" fillOpacity="0.42" stroke="currentColor" strokeWidth={1.5} />
      <path d="M60 78 V108 M48 96 H72" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity="0.55" />
    </SvgFrame>
  )
}

/** Lombar */
export function IllustLowerBack() {
  return (
    <SvgFrame className="mg-illust--lower-back">
      <Body d="M60 16 C76 28 88 48 88 70 C88 96 76 114 60 132 C44 114 32 96 32 70 C32 48 44 28 60 16 Z" />
      <Neon d="M48 58 C54 50 60 48 60 48 C60 48 66 50 72 58 C74 70 70 88 60 100 C50 88 46 70 48 58 Z" opacity={0.4} />
      <path d="M60 32 V120" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" opacity="0.65" />
      <path d="M60 54 L44 42 M60 54 L76 42 M60 74 L40 60 M60 74 L80 60" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity="0.55" />
    </SvgFrame>
  )
}

/** Cardio */
export function IllustCardio() {
  return (
    <SvgFrame className="mg-illust--cardio">
      <Neon
        d="M60 120 C40 100 24 84 24 60 C24 44 36 32 50 32 C56 32 60 36 60 36 C60 36 64 32 70 32 C84 32 96 44 96 60 C96 84 80 100 60 120 Z"
        opacity={0.36}
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

/** Mobilidade */
export function IllustMobility() {
  return (
    <SvgFrame className="mg-illust--mobility">
      <circle cx="60" cy="22" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth={SW} />
      <path d="M50 36 L60 48 L70 36" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      <Neon
        d="M50 40 C28 58 22 86 34 112 C42 126 78 126 86 112 C98 86 92 58 70 40 Z"
        opacity={0.28}
      />
      <path d="M36 70 C48 62 72 62 84 70 M44 108 C52 116 68 116 76 108" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" opacity="0.7" />
    </SvgFrame>
  )
}

export function IllustForearm() {
  return (
    <SvgFrame className="mg-illust--forearm">
      <Body d="M48 18 C58 14 70 18 76 30 L90 72 C94 86 90 100 80 112 L70 126 C66 132 58 132 54 126 L40 100 C34 90 32 76 38 64 L48 30 Z" />
      <Neon d="M54 36 C62 50 70 70 76 90 C70 78 62 58 56 44 Z" opacity={0.4} />
      <path d="M54 42 C62 56 70 74 76 92 M50 56 C58 70 66 86 70 100" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity="0.55" />
    </SvgFrame>
  )
}

export function IllustTraps() {
  return (
    <SvgFrame className="mg-illust--traps">
      <path d="M52 16 H68 V34 C68 40 64 44 60 44 C56 44 52 40 52 34 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth={SW} strokeLinejoin="round" />
      <Body d="M26 52 C36 40 48 34 60 34 C72 34 84 40 94 52 L100 68 C102 78 96 86 86 90 L72 96 H48 L34 90 C24 86 18 78 20 68 Z" />
      <Neon d="M36 52 C46 44 54 42 60 42 C66 42 74 44 84 52 C80 62 72 70 60 74 C48 70 40 62 36 52 Z" opacity={0.4} />
      <path d="M60 44 V94 M40 62 C50 54 70 54 80 62" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" opacity="0.6" />
    </SvgFrame>
  )
}

export function IllustCalves() {
  return (
    <SvgFrame className="mg-illust--calves">
      <Body d="M40 16 H54 V52 C54 66 48 82 44 98 C42 110 44 120 50 128 H36 C32 114 32 102 36 90 C40 72 40 58 40 52 Z" />
      <Body d="M66 16 H80 V52 C80 66 86 82 90 98 C92 110 90 120 84 128 H70 C76 114 78 102 74 90 C70 72 66 58 66 52 Z" />
      <ellipse cx="47" cy="64" rx="8" ry="14" fill="currentColor" fillOpacity="0.42" stroke="currentColor" strokeWidth={1.5} />
      <ellipse cx="73" cy="64" rx="8" ry="14" fill="currentColor" fillOpacity="0.42" stroke="currentColor" strokeWidth={1.5} />
    </SvgFrame>
  )
}

export function IllustFunctional() {
  return (
    <SvgFrame className="mg-illust--functional">
      <circle cx="60" cy="24" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth={SW} />
      <path
        d="M60 36 V64 M60 64 L40 90 M60 64 L80 90 M40 90 L34 118 M80 90 L86 118 M34 54 H86"
        stroke="currentColor"
        strokeWidth={SW}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="64" r="8" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth={1.5} />
    </SvgFrame>
  )
}

export function IllustStretch() {
  return (
    <SvgFrame className="mg-illust--stretch">
      <circle cx="74" cy="26" r="10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth={SW} />
      <path d="M74 38 C68 54 56 66 42 74 C32 80 26 94 30 110" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <path d="M58 56 C70 46 88 40 100 38" stroke="currentColor" strokeWidth={SW} strokeLinecap="round" />
      <Neon d="M48 78 C40 92 36 106 40 120 L52 118 C50 104 52 92 56 84 Z" opacity={0.32} />
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
