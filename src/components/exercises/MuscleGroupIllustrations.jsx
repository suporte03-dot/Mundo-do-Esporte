/**
 * Neon anatomical wireframe illustrations for Biblioteca muscle-group cards.
 * Medical-precision line structure — fiber bundles, tendons, silhouette.
 * No opaque fills; glow via currentColor + CSS drop-shadow.
 */

const SW = 1.35
const SW_FINE = 0.95
const SW_BOLD = 1.7

function SvgFrame({ children, className = '' }) {
  return (
    <svg
      className={`mg-illust mg-illust--wire ${className}`.trim()}
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

function Line({ d, w = SW, opacity = 1, join = 'round' }) {
  return (
    <path
      d={d}
      stroke="currentColor"
      strokeWidth={w}
      strokeLinecap="round"
      strokeLinejoin={join}
      opacity={opacity}
    />
  )
}

function Fibers({ paths, w = SW_FINE, opacity = 0.55 }) {
  return paths.map((d, i) => <Line key={i} d={d} w={w} opacity={opacity} />)
}

/** Peitoral — clavicle, sternum, pec major fibers + lower border */
export function IllustChest() {
  return (
    <SvgFrame className="mg-illust--chest">
      {/* Outer torso silhouette */}
      <Line
        d="M36 28 C42 14 52 10 60 10 C68 10 78 14 84 28 L92 52 C94 68 90 92 80 112 L70 128 C66 134 60 136 60 136 C60 136 54 134 50 128 L40 112 C30 92 26 68 28 52 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      {/* Clavicles */}
      <Line d="M34 32 C44 26 52 24 60 24 C68 24 76 26 86 32" w={SW} opacity={0.85} />
      {/* Sternum */}
      <Line d="M60 24 V118" w={SW} opacity={0.75} />
      {/* Left pec major outline */}
      <Line d="M42 34 C50 30 56 30 60 32 C56 48 48 62 38 72 C34 62 34 46 42 34 Z" w={SW} opacity={0.9} />
      {/* Right pec major outline */}
      <Line d="M78 34 C70 30 64 30 60 32 C64 48 72 62 82 72 C86 62 86 46 78 34 Z" w={SW} opacity={0.9} />
      {/* Fiber fans — left */}
      <Fibers
        paths={[
          'M58 34 C52 42 46 52 40 62',
          'M56 36 C50 46 44 56 38 66',
          'M54 38 C48 48 42 58 36 68',
          'M52 40 C46 50 40 60 36 70',
          'M50 42 C46 52 42 60 38 68',
        ]}
        opacity={0.58}
      />
      {/* Fiber fans — right */}
      <Fibers
        paths={[
          'M62 34 C68 42 74 52 80 62',
          'M64 36 C70 46 76 56 82 66',
          'M66 38 C72 48 78 58 84 68',
          'M68 40 C74 50 80 60 84 70',
          'M70 42 C74 52 78 60 82 68',
        ]}
        opacity={0.58}
      />
      {/* Lower pec border */}
      <Line d="M38 72 C48 78 56 80 60 80 C64 80 72 78 82 72" w={SW} opacity={0.7} />
      {/* Serratus hint */}
      <Line d="M34 78 C38 86 40 96 42 106" w={SW_FINE} opacity={0.45} />
      <Line d="M86 78 C82 86 80 96 78 106" w={SW_FINE} opacity={0.45} />
    </SvgFrame>
  )
}

/** Costas — traps, rhomboids, lats, erector spine */
export function IllustBack() {
  return (
    <SvgFrame className="mg-illust--back">
      {/* Outer rear torso */}
      <Line
        d="M26 34 C34 20 46 16 60 16 C74 16 86 20 94 34 L100 56 C102 74 96 98 82 118 L70 132 C66 136 60 138 60 138 C60 138 54 136 50 132 L38 118 C24 98 18 74 20 56 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      {/* Spine */}
      <Line d="M60 22 V130" w={SW} opacity={0.8} />
      {/* Trapezius diamond */}
      <Line d="M60 22 L86 48 L60 58 L34 48 Z" w={SW} opacity={0.9} />
      <Fibers
        paths={[
          'M60 26 L78 46',
          'M60 30 L72 48',
          'M60 34 L66 50',
          'M60 26 L42 46',
          'M60 30 L48 48',
          'M60 34 L54 50',
        ]}
        opacity={0.55}
      />
      {/* Rhomboids */}
      <Line d="M48 50 L60 58 L72 50" w={SW} opacity={0.75} />
      <Line d="M50 56 L60 64 L70 56" w={SW_FINE} opacity={0.55} />
      {/* Latissimus — left wing */}
      <Line d="M36 52 C28 68 26 88 34 108 C42 96 50 82 56 70" w={SW} opacity={0.88} />
      <Fibers
        paths={[
          'M38 58 C32 72 30 88 36 102',
          'M42 62 C36 76 34 90 40 104',
          'M46 66 C40 80 38 92 44 106',
          'M50 70 C46 84 44 96 48 108',
        ]}
        opacity={0.52}
      />
      {/* Latissimus — right wing */}
      <Line d="M84 52 C92 68 94 88 86 108 C78 96 70 82 64 70" w={SW} opacity={0.88} />
      <Fibers
        paths={[
          'M82 58 C88 72 90 88 84 102',
          'M78 62 C84 76 86 90 80 104',
          'M74 66 C80 80 82 92 76 106',
          'M70 70 C74 84 76 96 72 108',
        ]}
        opacity={0.52}
      />
      {/* Erector spinae rails */}
      <Line d="M54 70 V124" w={SW_FINE} opacity={0.5} />
      <Line d="M66 70 V124" w={SW_FINE} opacity={0.5} />
      {/* Posterior deltoid hint */}
      <Line d="M28 44 C34 40 40 42 44 48" w={SW_FINE} opacity={0.5} />
      <Line d="M92 44 C86 40 80 42 76 48" w={SW_FINE} opacity={0.5} />
    </SvgFrame>
  )
}

/** Pernas — quads: RF, VL, VM, VI fiber structure */
export function IllustLegs() {
  return (
    <SvgFrame className="mg-illust--legs">
      {/* Hip / pelvis bar */}
      <Line d="M28 18 H92" w={SW_BOLD} opacity={0.9} />
      <Line d="M32 18 V34 M88 18 V34" w={SW} opacity={0.7} />
      {/* Left thigh outline */}
      <Line
        d="M34 34 C38 34 44 36 48 42 L52 70 C54 92 50 112 46 132 H34 C30 112 28 90 30 70 L34 42 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      {/* Right thigh outline */}
      <Line
        d="M86 34 C82 34 76 36 72 42 L68 70 C66 92 70 112 74 132 H86 C90 112 92 90 90 70 L86 42 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      {/* Mid seam */}
      <Line d="M60 34 V132" w={SW_FINE} opacity={0.35} />
      {/* Rectus femoris — left */}
      <Line d="M41 40 C43 58 43 88 41 120" w={SW} opacity={0.85} />
      <Fibers
        paths={['M38 48 C40 70 40 96 38 118', 'M44 48 C46 70 46 96 44 118']}
        opacity={0.5}
      />
      {/* Vastus lateralis — left */}
      <Line d="M48 44 C50 68 48 96 46 124" w={SW} opacity={0.8} />
      <Fibers paths={['M50 52 C52 76 50 100 48 122']} opacity={0.45} />
      {/* Vastus medialis teardrop — left */}
      <Line d="M34 70 C36 90 38 110 40 128" w={SW} opacity={0.8} />
      <Line d="M34 88 C38 100 42 112 44 124" w={SW_FINE} opacity={0.55} />
      {/* Rectus femoris — right */}
      <Line d="M79 40 C77 58 77 88 79 120" w={SW} opacity={0.85} />
      <Fibers
        paths={['M82 48 C80 70 80 96 82 118', 'M76 48 C74 70 74 96 76 118']}
        opacity={0.5}
      />
      {/* Vastus lateralis — right */}
      <Line d="M72 44 C70 68 72 96 74 124" w={SW} opacity={0.8} />
      <Fibers paths={['M70 52 C68 76 70 100 72 122']} opacity={0.45} />
      {/* Vastus medialis — right */}
      <Line d="M86 70 C84 90 82 110 80 128" w={SW} opacity={0.8} />
      <Line d="M86 88 C82 100 78 112 76 124" w={SW_FINE} opacity={0.55} />
      {/* Patella hints */}
      <Line d="M36 126 H46 M74 126 H84" w={SW} opacity={0.65} />
    </SvgFrame>
  )
}

/** Glúteos — glute max + med, posterior/slight 3/4 */
export function IllustGlutes() {
  return (
    <SvgFrame className="mg-illust--glutes">
      {/* Pelvic crest */}
      <Line d="M34 22 C46 16 54 14 60 14 C66 14 74 16 86 22" w={SW} opacity={0.85} />
      {/* Outer silhouette */}
      <Line
        d="M32 28 C28 48 30 78 40 108 C48 124 56 132 60 134 C64 132 72 124 80 108 C90 78 92 48 88 28 C78 20 66 18 60 18 C54 18 42 20 32 28 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      {/* Gluteal cleft */}
      <Line d="M60 40 V118" w={SW} opacity={0.8} />
      {/* Gluteus medius — upper left */}
      <Line d="M38 30 C46 28 54 30 58 38 C52 44 44 46 36 44 C34 38 34 32 38 30 Z" w={SW} opacity={0.88} />
      <Fibers
        paths={['M40 34 C46 34 52 36 56 40', 'M38 38 C44 38 50 40 54 44']}
        opacity={0.5}
      />
      {/* Gluteus medius — upper right */}
      <Line d="M82 30 C74 28 66 30 62 38 C68 44 76 46 84 44 C86 38 86 32 82 30 Z" w={SW} opacity={0.88} />
      <Fibers
        paths={['M80 34 C74 34 68 36 64 40', 'M82 38 C76 38 70 40 66 44']}
        opacity={0.5}
      />
      {/* Gluteus maximus — left cheek */}
      <Line d="M36 48 C34 68 38 92 48 114 C52 104 56 88 58 68 C56 56 48 48 36 48 Z" w={SW} opacity={0.9} />
      <Fibers
        paths={[
          'M40 56 C38 74 42 96 50 112',
          'M44 54 C42 72 46 94 52 110',
          'M48 52 C46 70 50 90 54 106',
          'M52 54 C50 72 52 88 56 102',
        ]}
        opacity={0.52}
      />
      {/* Gluteus maximus — right cheek */}
      <Line d="M84 48 C86 68 82 92 72 114 C68 104 64 88 62 68 C64 56 72 48 84 48 Z" w={SW} opacity={0.9} />
      <Fibers
        paths={[
          'M80 56 C82 74 78 96 70 112',
          'M76 54 C78 72 74 94 68 110',
          'M72 52 C74 70 70 90 66 106',
          'M68 54 C70 72 68 88 64 102',
        ]}
        opacity={0.52}
      />
      {/* Inferior fold */}
      <Line d="M42 108 C50 116 56 118 60 118 C64 118 70 116 78 108" w={SW} opacity={0.65} />
    </SvgFrame>
  )
}

/** Ombros — anterior, lateral, posterior deltoid heads */
export function IllustShoulders() {
  return (
    <SvgFrame className="mg-illust--shoulders">
      {/* Head / neck */}
      <Line d="M60 18 V36" w={SW} opacity={0.7} />
      <Line d="M52 18 C52 10 68 10 68 18 C68 24 64 28 60 28 C56 28 52 24 52 18 Z" w={SW} opacity={0.75} />
      {/* Clavicle / acromion line */}
      <Line d="M28 48 H92" w={SW} opacity={0.7} />
      {/* Torso stub */}
      <Line d="M46 56 V100 H74 V56" w={SW_FINE} opacity={0.4} />
      {/* Left lateral deltoid (side head) */}
      <Line d="M18 52 C12 62 12 78 20 90 C28 82 34 70 34 58 C30 52 24 50 18 52 Z" w={SW_BOLD} opacity={0.95} />
      <Fibers
        paths={['M20 58 C16 68 16 80 22 88', 'M24 56 C20 68 20 80 26 88', 'M28 58 C26 70 26 80 30 86']}
        opacity={0.55}
      />
      {/* Left anterior deltoid */}
      <Line d="M34 50 C40 48 46 52 48 60 C42 66 36 68 30 64 C28 58 30 52 34 50 Z" w={SW} opacity={0.88} />
      <Fibers paths={['M36 54 C40 56 44 60 46 64', 'M34 58 C38 60 42 64 44 66']} opacity={0.5} />
      {/* Left posterior deltoid */}
      <Line d="M30 56 C26 64 26 76 32 86 C38 80 40 70 38 62 C36 56 32 54 30 56 Z" w={SW} opacity={0.75} />
      {/* Right lateral deltoid */}
      <Line d="M102 52 C108 62 108 78 100 90 C92 82 86 70 86 58 C90 52 96 50 102 52 Z" w={SW_BOLD} opacity={0.95} />
      <Fibers
        paths={['M100 58 C104 68 104 80 98 88', 'M96 56 C100 68 100 80 94 88', 'M92 58 C94 70 94 80 90 86']}
        opacity={0.55}
      />
      {/* Right anterior deltoid */}
      <Line d="M86 50 C80 48 74 52 72 60 C78 66 84 68 90 64 C92 58 90 52 86 50 Z" w={SW} opacity={0.88} />
      <Fibers paths={['M84 54 C80 56 76 60 74 64', 'M86 58 C82 60 78 64 76 66']} opacity={0.5} />
      {/* Right posterior deltoid */}
      <Line d="M90 56 C94 64 94 76 88 86 C82 80 80 70 82 62 C84 56 88 54 90 56 Z" w={SW} opacity={0.75} />
      {/* Cap attachments */}
      <Line d="M34 58 H46 M74 58 H86" w={SW_FINE} opacity={0.55} />
    </SvgFrame>
  )
}

/** Bíceps — long + short head, peak, brachialis hint */
export function IllustBiceps() {
  return (
    <SvgFrame className="mg-illust--biceps">
      {/* Upper arm silhouette (flexed) */}
      <Line
        d="M28 108 C24 88 28 64 42 44 C54 26 72 20 90 26 C100 30 106 42 104 54 C102 66 92 74 80 78 L68 84 C64 88 62 96 62 104 V122 C62 130 54 136 44 132 C34 128 30 120 28 108 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      {/* Shoulder / insertion */}
      <Line d="M78 28 C88 30 98 38 100 50" w={SW} opacity={0.7} />
      {/* Long head */}
      <Line d="M70 34 C62 48 54 64 48 84" w={SW} opacity={0.88} />
      <Fibers
        paths={['M74 36 C66 50 58 66 52 84', 'M78 40 C70 54 62 70 56 86']}
        opacity={0.52}
      />
      {/* Short head */}
      <Line d="M86 40 C76 52 66 68 58 88" w={SW} opacity={0.85} />
      <Fibers paths={['M90 44 C80 56 70 72 62 90']} opacity={0.5} />
      {/* Peak / belly */}
      <Line d="M52 48 C60 42 72 42 82 50 C78 62 68 70 56 68 C50 62 48 54 52 48 Z" w={SW} opacity={0.9} />
      <Fibers
        paths={['M56 52 C62 48 70 48 76 54', 'M54 58 C62 54 70 54 78 58', 'M56 62 C64 60 70 60 76 62']}
        opacity={0.55}
      />
      {/* Brachialis under */}
      <Line d="M46 78 C52 86 58 96 60 110" w={SW_FINE} opacity={0.55} />
      {/* Tendon to forearm */}
      <Line d="M58 92 C54 104 48 116 40 126" w={SW} opacity={0.75} />
      <Line d="M64 94 C60 108 54 120 46 128" w={SW_FINE} opacity={0.5} />
    </SvgFrame>
  )
}

/** Tríceps — long, lateral, medial heads (horseshoe) */
export function IllustTriceps() {
  return (
    <SvgFrame className="mg-illust--triceps">
      <Line
        d="M42 18 C58 12 82 20 90 42 L98 78 C100 98 92 120 74 130 C62 136 48 130 42 118 L30 88 C24 70 26 48 34 32 C36 24 38 20 42 18 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      {/* Long head (medial track) */}
      <Line d="M56 28 C50 48 48 72 52 100 C54 112 58 122 64 128" w={SW} opacity={0.88} />
      <Fibers
        paths={['M52 32 C46 52 44 76 48 102', 'M60 30 C54 50 52 74 56 104']}
        opacity={0.5}
      />
      {/* Lateral head */}
      <Line d="M72 34 C78 52 82 76 78 104 C74 116 68 124 62 128" w={SW} opacity={0.88} />
      <Fibers
        paths={['M76 38 C82 56 86 80 80 106', 'M68 36 C74 54 78 78 74 106']}
        opacity={0.5}
      />
      {/* Medial head (deep, lower) */}
      <Line d="M58 78 C56 94 58 110 64 124" w={SW} opacity={0.75} />
      <Line d="M66 78 C68 94 66 110 64 124" w={SW} opacity={0.75} />
      {/* Horseshoe separation */}
      <Line d="M54 70 C58 78 66 78 70 70" w={SW} opacity={0.8} />
      <Line d="M52 88 C58 96 66 96 72 88" w={SW_FINE} opacity={0.55} />
      {/* Tendon */}
      <Line d="M64 118 C66 126 70 132 76 134" w={SW} opacity={0.7} />
    </SvgFrame>
  )
}

/** Abdômen — rectus sheath + 6-pack segments + obliques */
export function IllustAbs() {
  return (
    <SvgFrame className="mg-illust--abs">
      <Line d="M40 16 H80 C88 16 92 24 92 34 V112 C92 124 84 132 72 132 H48 C36 132 28 124 28 112 V34 C28 24 32 16 40 16 Z" w={SW_BOLD} opacity={0.95} />
      {/* Linea alba */}
      <Line d="M60 22 V124" w={SW} opacity={0.8} />
      {/* Tendinous inscriptions — 3 rows */}
      <Line d="M36 42 H84" w={SW} opacity={0.75} />
      <Line d="M34 62 H86" w={SW} opacity={0.75} />
      <Line d="M36 82 H84" w={SW} opacity={0.75} />
      {/* Pack cells outlines */}
      <Line d="M42 28 H56 V42 H42 Z" w={SW_FINE} opacity={0.7} />
      <Line d="M64 28 H78 V42 H64 Z" w={SW_FINE} opacity={0.7} />
      <Line d="M40 46 H56 V62 H40 Z" w={SW_FINE} opacity={0.7} />
      <Line d="M64 46 H80 V62 H64 Z" w={SW_FINE} opacity={0.7} />
      <Line d="M40 66 H56 V82 H40 Z" w={SW_FINE} opacity={0.7} />
      <Line d="M64 66 H80 V82 H64 Z" w={SW_FINE} opacity={0.7} />
      {/* Fiber texture in packs */}
      <Fibers
        paths={[
          'M44 32 H54', 'M44 36 H54',
          'M66 32 H76', 'M66 36 H76',
          'M42 50 H54', 'M42 54 H54',
          'M66 50 H78', 'M66 54 H78',
          'M42 70 H54', 'M42 74 H54',
          'M66 70 H78', 'M66 74 H78',
        ]}
        w={0.8}
        opacity={0.45}
      />
      {/* External obliques */}
      <Line d="M30 48 C34 58 36 72 34 90" w={SW} opacity={0.65} />
      <Line d="M90 48 C86 58 84 72 86 90" w={SW} opacity={0.65} />
      <Fibers
        paths={['M32 56 C36 66 38 78 36 88', 'M88 56 C84 66 82 78 84 88']}
        opacity={0.45}
      />
      {/* Lower abs / pyramidalis hint */}
      <Line d="M48 96 C54 108 60 116 60 116 C60 116 66 108 72 96" w={SW} opacity={0.7} />
    </SvgFrame>
  )
}

/** Lombar — erectors + QL region */
export function IllustLowerBack() {
  return (
    <SvgFrame className="mg-illust--lower-back">
      <Line
        d="M60 14 C78 26 92 48 92 74 C92 102 78 122 60 136 C42 122 28 102 28 74 C28 48 42 26 60 14 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      <Line d="M60 28 V128" w={SW} opacity={0.8} />
      {/* Erector columns */}
      <Line d="M48 40 V120" w={SW} opacity={0.85} />
      <Line d="M72 40 V120" w={SW} opacity={0.85} />
      <Fibers
        paths={[
          'M44 48 V112', 'M52 48 V112',
          'M68 48 V112', 'M76 48 V112',
        ]}
        opacity={0.5}
      />
      {/* Transverse ribs / QL */}
      <Line d="M48 52 L32 44" w={SW} opacity={0.7} />
      <Line d="M72 52 L88 44" w={SW} opacity={0.7} />
      <Line d="M48 72 L30 62" w={SW} opacity={0.7} />
      <Line d="M72 72 L90 62" w={SW} opacity={0.7} />
      <Line d="M48 92 L32 84" w={SW} opacity={0.65} />
      <Line d="M72 92 L88 84" w={SW} opacity={0.65} />
      <Line d="M48 110 L36 104" w={SW_FINE} opacity={0.5} />
      <Line d="M72 110 L84 104" w={SW_FINE} opacity={0.5} />
    </SvgFrame>
  )
}

/** Cardio — anatomical heart chambers + vessels */
export function IllustCardio() {
  return (
    <SvgFrame className="mg-illust--cardio">
      <Line
        d="M60 126 C38 106 22 88 22 62 C22 44 36 30 52 30 C56 30 60 34 60 34 C60 34 64 30 68 30 C84 30 98 44 98 62 C98 88 82 106 60 126 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      {/* Septum */}
      <Line d="M60 48 V108" w={SW} opacity={0.7} />
      {/* Chamber divisions */}
      <Line d="M36 62 C44 58 52 58 60 62" w={SW} opacity={0.75} />
      <Line d="M60 62 C68 58 76 58 84 62" w={SW} opacity={0.75} />
      <Line d="M34 82 C44 78 52 78 60 84" w={SW} opacity={0.7} />
      <Line d="M60 84 C68 78 76 78 86 82" w={SW} opacity={0.7} />
      {/* Valves / fiber rings */}
      <Line d="M48 70 C52 66 56 66 60 70" w={SW_FINE} opacity={0.55} />
      <Line d="M60 70 C64 66 68 66 72 70" w={SW_FINE} opacity={0.55} />
      {/* Aorta / vessels */}
      <Line d="M60 34 C60 24 56 18 50 14" w={SW} opacity={0.75} />
      <Line d="M60 34 C64 24 72 18 80 16" w={SW} opacity={0.75} />
      <Line d="M52 40 C44 36 38 30 36 22" w={SW_FINE} opacity={0.55} />
      {/* ECG overlay subtle */}
      <Line d="M30 96 H42 L48 78 L56 112 L64 88 L70 96 H90" w={SW} opacity={0.7} />
    </SvgFrame>
  )
}

/** Mobilidade — articulated figure with joint wireframe */
export function IllustMobility() {
  return (
    <SvgFrame className="mg-illust--mobility">
      <Line d="M60 12 C66 12 70 16 70 22 C70 28 66 32 60 32 C54 32 50 28 50 22 C50 16 54 12 60 12 Z" w={SW} opacity={0.85} />
      <Line d="M60 32 V58" w={SW_BOLD} opacity={0.9} />
      {/* Arms open stretch */}
      <Line d="M60 42 L28 58 M60 42 L92 58" w={SW} opacity={0.85} />
      <Line d="M28 58 L18 78 M92 58 L102 78" w={SW} opacity={0.8} />
      {/* Joints */}
      <Line d="M26 56 C28 54 30 54 32 56 C30 58 28 58 26 56 Z" w={SW_FINE} opacity={0.7} />
      <Line d="M88 56 C90 54 92 54 94 56 C92 58 90 58 88 56 Z" w={SW_FINE} opacity={0.7} />
      {/* Pelvis + legs butterfly */}
      <Line d="M48 58 C40 70 34 90 38 114 C46 120 54 118 60 112 C66 118 74 120 82 114 C86 90 80 70 72 58 Z" w={SW_BOLD} opacity={0.9} />
      <Fibers
        paths={['M50 72 C46 88 46 100 50 112', 'M70 72 C74 88 74 100 70 112', 'M60 70 V110']}
        opacity={0.5}
      />
      <Line d="M42 96 C52 104 68 104 78 96" w={SW} opacity={0.65} />
    </SvgFrame>
  )
}

/** Antebraço — flexors / extensors wireframe */
export function IllustForearm() {
  return (
    <SvgFrame className="mg-illust--forearm">
      <Line
        d="M46 14 C58 10 72 14 80 28 L96 72 C100 86 96 102 84 116 L72 132 C68 136 58 136 54 130 L38 100 C32 88 30 72 38 58 L46 28 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      {/* Radius / ulna guides */}
      <Line d="M54 28 C62 52 70 80 78 110" w={SW} opacity={0.8} />
      <Line d="M62 24 C70 50 78 78 86 106" w={SW} opacity={0.75} />
      {/* Flexor fibers */}
      <Fibers
        paths={[
          'M50 36 C58 56 66 80 72 104',
          'M48 44 C56 64 64 88 70 110',
          'M52 52 C60 72 68 94 74 114',
        ]}
        opacity={0.52}
      />
      {/* Extensor fibers */}
      <Fibers
        paths={[
          'M70 32 C78 52 86 76 92 98',
          'M66 40 C74 60 82 84 88 104',
        ]}
        opacity={0.48}
      />
      {/* Wrist */}
      <Line d="M58 118 C64 122 72 122 80 116" w={SW} opacity={0.7} />
    </SvgFrame>
  )
}

/** Trapézio — upper/mid/lower traps */
export function IllustTraps() {
  return (
    <SvgFrame className="mg-illust--traps">
      {/* Neck */}
      <Line d="M52 12 H68 V30 C68 36 64 40 60 40 C56 40 52 36 52 30 Z" w={SW} opacity={0.8} />
      {/* Upper traps cape */}
      <Line
        d="M24 48 C36 34 48 28 60 28 C72 28 84 34 96 48 L102 64 C104 74 98 84 86 90 L72 96 H48 L34 90 C22 84 16 74 18 64 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      <Line d="M60 40 V96" w={SW} opacity={0.8} />
      {/* Upper fibers to acromion */}
      <Fibers
        paths={[
          'M60 32 L90 54', 'M60 36 L84 56', 'M60 40 L78 58',
          'M60 32 L30 54', 'M60 36 L36 56', 'M60 40 L42 58',
        ]}
        opacity={0.55}
      />
      {/* Mid traps horizontal */}
      <Line d="M40 62 H80" w={SW} opacity={0.85} />
      <Line d="M42 70 H78" w={SW} opacity={0.75} />
      <Fibers paths={['M44 66 H76', 'M46 74 H74']} opacity={0.5} />
      {/* Lower traps V */}
      <Line d="M48 78 L60 108 L72 78" w={SW} opacity={0.85} />
      <Fibers
        paths={['M50 82 L60 104', 'M70 82 L60 104', 'M52 88 L60 100', 'M68 88 L60 100']}
        opacity={0.5}
      />
    </SvgFrame>
  )
}

/** Panturrilha — gastrocnemius medial/lateral + soleus */
export function IllustCalves() {
  return (
    <SvgFrame className="mg-illust--calves">
      {/* Left calf */}
      <Line
        d="M38 14 H52 V46 C52 62 46 82 42 100 C40 112 42 122 48 132 H34 C30 118 30 106 34 94 C38 74 38 56 38 46 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      {/* Right calf */}
      <Line
        d="M68 14 H82 V46 C82 62 88 82 92 100 C94 112 92 122 86 132 H72 C78 118 80 106 76 94 C72 74 68 56 68 46 Z"
        w={SW_BOLD}
        opacity={0.95}
      />
      {/* Gastroc heads — left */}
      <Line d="M40 28 C42 40 40 54 38 68" w={SW} opacity={0.85} />
      <Line d="M50 28 C48 40 46 54 44 68" w={SW} opacity={0.85} />
      <Fibers
        paths={['M42 34 C44 46 42 58 40 70', 'M48 34 C46 46 44 58 42 70']}
        opacity={0.5}
      />
      {/* Gastroc heads — right */}
      <Line d="M70 28 C72 40 74 54 76 68" w={SW} opacity={0.85} />
      <Line d="M80 28 C78 40 76 54 74 68" w={SW} opacity={0.85} />
      <Fibers
        paths={['M72 34 C74 46 76 58 78 70', 'M78 34 C76 46 74 58 72 70']}
        opacity={0.5}
      />
      {/* Soleus under */}
      <Line d="M40 72 C42 90 44 108 46 126" w={SW} opacity={0.7} />
      <Line d="M80 72 C78 90 76 108 74 126" w={SW} opacity={0.7} />
      {/* Achilles */}
      <Line d="M42 118 H46 M74 118 H78" w={SW} opacity={0.75} />
    </SvgFrame>
  )
}

/** Funcional — kinetic chain stick + muscle nodes */
export function IllustFunctional() {
  return (
    <SvgFrame className="mg-illust--functional">
      <Line d="M54 14 C54 8 66 8 66 14 C66 20 60 24 60 24 C60 24 54 20 54 14 Z" w={SW} opacity={0.85} />
      <Line d="M60 24 V58" w={SW_BOLD} opacity={0.9} />
      <Line d="M60 40 H28 M60 40 H92" w={SW} opacity={0.85} />
      <Line d="M28 40 L20 70 M92 40 L100 70" w={SW} opacity={0.8} />
      <Line d="M60 58 L40 96 M60 58 L80 96" w={SW} opacity={0.85} />
      <Line d="M40 96 L34 128 M80 96 L86 128" w={SW} opacity={0.8} />
      {/* Muscle node rings at joints */}
      <Line d="M56 38 C58 36 62 36 64 38 C62 40 58 40 56 38 Z" w={SW_FINE} opacity={0.7} />
      <Line d="M56 56 C58 54 62 54 64 56 C62 58 58 58 56 56 Z" w={SW_FINE} opacity={0.7} />
      <Line d="M36 94 C38 92 42 92 44 94 C42 96 38 96 36 94 Z" w={SW_FINE} opacity={0.65} />
      <Line d="M76 94 C78 92 82 92 84 94 C82 96 78 96 76 94 Z" w={SW_FINE} opacity={0.65} />
      <Fibers
        paths={['M48 48 C44 52 40 56 36 58', 'M72 48 C76 52 80 56 84 58', 'M54 70 C48 80 44 88 42 94', 'M66 70 C72 80 76 88 78 94']}
        opacity={0.5}
      />
    </SvgFrame>
  )
}

/** Alongamento — extended pose wireframe */
export function IllustStretch() {
  return (
    <SvgFrame className="mg-illust--stretch">
      <Line d="M68 10 C74 10 78 14 78 20 C78 26 74 30 68 30 C62 30 58 26 58 20 C58 14 62 10 68 10 Z" w={SW} opacity={0.85} />
      <Line d="M68 30 C62 48 50 64 36 76" w={SW_BOLD} opacity={0.9} />
      <Line d="M58 48 C72 40 90 34 104 32" w={SW} opacity={0.85} />
      <Line d="M104 32 L112 48" w={SW} opacity={0.75} />
      <Line d="M44 70 C36 88 32 106 36 124" w={SW} opacity={0.85} />
      <Line d="M48 74 C58 90 66 108 68 126" w={SW} opacity={0.85} />
      <Fibers
        paths={[
          'M64 36 C58 50 48 64 38 74',
          'M66 42 C70 48 82 42 96 36',
          'M42 80 C38 96 36 110 40 122',
          'M52 82 C58 98 64 114 66 124',
        ]}
        opacity={0.5}
      />
      {/* Joint markers */}
      <Line d="M60 46 C62 44 66 44 68 46" w={SW_FINE} opacity={0.6} />
      <Line d="M44 72 C46 70 50 70 52 72" w={SW_FINE} opacity={0.6} />
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
