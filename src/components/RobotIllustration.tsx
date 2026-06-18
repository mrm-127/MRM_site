export function RobotIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 340" fill="none" aria-hidden="true" className={className}>
      <defs>
        {/* ── Gradients ── */}
        <radialGradient id="sc-head" cx="33%" cy="26%" r="72%">
          <stop offset="0%" stopColor="#f4f8fc" />
          <stop offset="52%" stopColor="#ccdae8" />
          <stop offset="100%" stopColor="#8aaabf" />
        </radialGradient>
        <radialGradient id="sc-visor" cx="38%" cy="36%" r="64%">
          <stop offset="0%" stopColor="#182c40" />
          <stop offset="100%" stopColor="#050d18" />
        </radialGradient>
        <radialGradient id="sc-body" cx="28%" cy="24%" r="78%">
          <stop offset="0%" stopColor="#e2edf5" />
          <stop offset="58%" stopColor="#b4c8d8" />
          <stop offset="100%" stopColor="#7090aa" />
        </radialGradient>
        <radialGradient id="sc-arm" cx="20%" cy="28%" r="76%">
          <stop offset="0%" stopColor="#d0e0ee" />
          <stop offset="100%" stopColor="#7898b0" />
        </radialGradient>
        <radialGradient id="sc-joint" cx="28%" cy="26%" r="72%">
          <stop offset="0%" stopColor="#c0d4e4" />
          <stop offset="100%" stopColor="#607898" />
        </radialGradient>
        <radialGradient id="sc-orb" cx="38%" cy="36%" r="62%">
          <stop offset="0%" stopColor="#a8f4e8" />
          <stop offset="38%" stopColor="#34d3be" />
          <stop offset="80%" stopColor="#16b8a6" />
          <stop offset="100%" stopColor="#0a7268" />
        </radialGradient>
        <radialGradient id="sc-board-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0a1e30" />
          <stop offset="100%" stopColor="#040e18" />
        </radialGradient>
        <radialGradient id="sc-a-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(52,211,190,0.35)" />
          <stop offset="100%" stopColor="rgba(22,184,166,0)" />
        </radialGradient>

        {/* ── Glow filter ── */}
        <filter id="sc-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sc-glow-soft" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sc-board-light" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="18" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Clip board content */}
        <clipPath id="sc-board-clip">
          <path d="M28,52 L158,42 L158,292 L28,302 Z" />
        </clipPath>
      </defs>

      {/* ════════════════════════════════
          BOARD — left side
      ════════════════════════════════ */}

      {/* Board ambient glow */}
      <ellipse cx="93" cy="172" rx="90" ry="110"
        fill="rgba(22,184,166,0.07)" filter="url(#sc-board-light)" />

      {/* Board panel (skewed for perspective) */}
      <path d="M28,52 L158,42 L158,292 L28,302 Z"
        fill="url(#sc-board-bg)"
        stroke="rgba(52,211,190,0.55)"
        strokeWidth="1.5" />

      {/* Board top edge highlight */}
      <path d="M28,52 L158,42"
        stroke="rgba(52,211,190,0.8)"
        strokeWidth="2"
        strokeLinecap="round"
        filter="url(#sc-glow)" />

      {/* Board corner brackets */}
      <path d="M28,52 L28,68 M28,52 L42,52"
        stroke="rgba(52,211,190,0.7)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M158,42 L158,58 M158,42 L144,42"
        stroke="rgba(52,211,190,0.7)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28,302 L28,286 M28,302 L42,302"
        stroke="rgba(52,211,190,0.4)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M158,292 L158,276 M158,292 L144,292"
        stroke="rgba(52,211,190,0.4)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Board inner grid lines (subtle) */}
      <g clipPath="url(#sc-board-clip)" opacity="0.12">
        {["90","130","170","210","250"].map((y) => (
          <line key={y} x1="28" y1={y} x2="158" y2={y}
            stroke="#34d3be" strokeWidth="0.8" />
        ))}
        {["58","88","118","148"].map((x) => (
          <line key={x} x1={x} y1="42" x2={x} y2="302"
            stroke="#34d3be" strokeWidth="0.8" />
        ))}
      </g>

      {/* ── Letter A glow area ── */}
      <ellipse cx="93" cy="168" rx="46" ry="70"
        fill="url(#sc-a-glow)"
        filter="url(#sc-glow-soft)"
        clipPath="url(#sc-board-clip)" />

      {/* ── Letter A — drawn in teal ── */}
      {/* A body */}
      <g clipPath="url(#sc-board-clip)" filter="url(#sc-glow)">
        <path d="M93,72 L58,268 M93,72 L128,268"
          stroke="#34d3be"
          strokeWidth="4"
          strokeLinecap="round" />
        <path d="M68,188 L118,188"
          stroke="#34d3be"
          strokeWidth="4"
          strokeLinecap="round" />
        {/* A — bright inner highlight */}
        <path d="M93,72 L58,268 M93,72 L128,268"
          stroke="rgba(168,244,232,0.7)"
          strokeWidth="1.5"
          strokeLinecap="round" />
        <path d="M68,188 L118,188"
          stroke="rgba(168,244,232,0.7)"
          strokeWidth="1.5"
          strokeLinecap="round" />
      </g>

      {/* Contact point / stylus touch on board at top of A */}
      <circle cx="158" cy="100" r="14"
        fill="rgba(52,211,190,0.12)"
        className="pulse-soft" />
      <circle cx="158" cy="100" r="7"
        fill="rgba(52,211,190,0.45)"
        filter="url(#sc-glow)" />
      <circle cx="158" cy="100" r="3.5"
        fill="#a8f4e8" />

      {/* Light beam from board toward the scene */}
      <path d="M158,42 L230,42 L230,80 L158,80"
        fill="rgba(52,211,190,0.03)" />


      {/* ════════════════════════════════
          ROBOT — right side
      ════════════════════════════════ */}

      {/* ── BODY ── */}
      <rect x="245" y="205" width="98" height="115" rx="24"
        fill="url(#sc-body)" />
      <ellipse cx="272" cy="217" rx="26" ry="9"
        fill="rgba(255,255,255,0.38)"
        transform="rotate(-10 272 217)" />

      {/* Chest orb */}
      <circle cx="294" cy="262" r="32"
        fill="rgba(22,184,166,0.1)"
        className="pulse-soft" />
      <circle cx="294" cy="262" r="26"
        fill="url(#sc-orb)"
        filter="url(#sc-glow-soft)" />
      <circle cx="294" cy="262" r="18"
        fill="none"
        stroke="rgba(255,255,255,0.32)"
        strokeWidth="1.5" />
      <circle cx="294" cy="262" r="11"
        fill="rgba(255,255,255,0.2)" />
      <ellipse cx="286" cy="254" rx="7" ry="4.5"
        fill="rgba(255,255,255,0.4)"
        transform="rotate(-20 286 254)" />
      <circle cx="294" cy="262" r="3"
        fill="rgba(255,255,255,0.9)" />

      {/* ── SHOULDER JOINTS ── */}
      <circle cx="245" cy="222" r="16" fill="url(#sc-joint)" />
      <circle cx="245" cy="222" r="9" fill="#8090a8" />
      <circle cx="245" cy="222" r="4.5" fill="#607090" />
      <circle cx="343" cy="222" r="16" fill="url(#sc-joint)" />
      <circle cx="343" cy="222" r="9" fill="#8090a8" />
      <circle cx="343" cy="222" r="4.5" fill="#607090" />

      {/* ── LEFT ARM — raised toward the board ── */}
      {/* Upper arm from shoulder to elbow */}
      <g transform="translate(245,222) rotate(-40)">
        <rect x="-11" y="-76" width="22" height="78" rx="11"
          fill="url(#sc-arm)" />
        <rect x="-6" y="-72" width="6" height="64" rx="3"
          fill="rgba(255,255,255,0.22)" />
      </g>
      {/* Elbow joint */}
      <circle cx="212" cy="170" r="13" fill="url(#sc-joint)" />
      <circle cx="212" cy="170" r="7.5" fill="#8090a8" />
      {/* Forearm */}
      <g transform="translate(212,170) rotate(-28)">
        <rect x="-9" y="-60" width="18" height="62" rx="9"
          fill="url(#sc-arm)" />
        <rect x="-5" y="-56" width="5" height="50" rx="2.5"
          fill="rgba(255,255,255,0.2)" />
      </g>
      {/* Wrist joint near board */}
      <circle cx="174" cy="112" r="9" fill="url(#sc-joint)" />
      <circle cx="174" cy="112" r="5" fill="#8090a8" />
      {/* Stylus / fingertip — touching board */}
      <line x1="174" y1="112" x2="160" y2="100"
        stroke="rgba(200,220,235,0.7)"
        strokeWidth="4"
        strokeLinecap="round" />
      <circle cx="160" cy="100" r="4"
        fill="white"
        filter="url(#sc-glow)" />

      {/* ── RIGHT ARM — hanging ── */}
      <rect x="345" y="220" width="22" height="70" rx="11"
        fill="url(#sc-arm)" />
      <rect x="349" y="224" width="6" height="58" rx="3"
        fill="rgba(255,255,255,0.2)" />
      <circle cx="356" cy="294" r="12" fill="url(#sc-joint)" />
      <circle cx="356" cy="294" r="7" fill="#8090a8" />
      <g transform="translate(356,294) rotate(7)">
        <rect x="-9" y="0" width="18" height="38" rx="9"
          fill="url(#sc-arm)" />
      </g>

      {/* ── NECK ── */}
      <rect x="272" y="188" width="44" height="22" rx="7"
        fill="rgba(160,184,200,0.9)" />
      <rect x="278" y="191" width="32" height="4" rx="2"
        fill="rgba(255,255,255,0.4)" />
      <rect x="278" y="198" width="32" height="3.5" rx="1.75"
        fill="rgba(255,255,255,0.24)" />
      <rect x="278" y="206" width="32" height="3" rx="1.5"
        fill="rgba(255,255,255,0.14)" />

      {/* ── HEAD ── */}
      {/* Shadow depth */}
      <circle cx="297" cy="122" r="76" fill="rgba(0,0,0,0.1)" />
      {/* Head sphere */}
      <circle cx="294" cy="118" r="76" fill="url(#sc-head)" />
      {/* Top highlight */}
      <ellipse cx="260" cy="76" rx="28" ry="17"
        fill="rgba(255,255,255,0.58)"
        transform="rotate(-24 260 76)" />
      {/* Rim highlight */}
      <ellipse cx="318" cy="68" rx="13" ry="7"
        fill="rgba(255,255,255,0.22)"
        transform="rotate(-10 318 68)" />

      {/* ── EAR PIECES ── */}
      {/* Left ear */}
      <ellipse cx="218" cy="118" rx="13" ry="20" fill="rgba(180,200,216,0.9)" />
      <ellipse cx="218" cy="118" rx="8" ry="13" fill="rgba(120,148,168,0.9)" />
      <ellipse cx="218" cy="112" rx="3.5" ry="4.5" fill="rgba(255,255,255,0.22)" />
      {/* Right ear */}
      <ellipse cx="370" cy="118" rx="13" ry="20" fill="rgba(180,200,216,0.9)" />
      <ellipse cx="370" cy="118" rx="8" ry="13" fill="rgba(120,148,168,0.9)" />
      <ellipse cx="370" cy="112" rx="3.5" ry="4.5" fill="rgba(255,255,255,0.22)" />

      {/* ── VISOR / DARK FACE ── */}
      <ellipse cx="294" cy="122" rx="50" ry="42" fill="url(#sc-visor)" />
      <ellipse cx="272" cy="104" rx="14" ry="8"
        fill="rgba(255,255,255,0.07)"
        transform="rotate(-18 272 104)" />
      <ellipse cx="312" cy="138" rx="8" ry="5"
        fill="rgba(255,255,255,0.04)" />

      {/* ── EYE — teal sensor ── */}
      <circle cx="294" cy="120" r="20"
        fill="rgba(22,184,166,0.08)"
        className="pulse-soft" />
      <circle cx="294" cy="120" r="14"
        fill="none"
        stroke="rgba(52,211,190,0.38)"
        strokeWidth="1.5" />
      <circle cx="294" cy="120" r="10"
        fill="rgba(22,184,166,0.45)"
        className="robot-eye" />
      <circle cx="294" cy="120" r="6.5"
        fill="#34d3be"
        filter="url(#sc-glow)" />
      <circle cx="294" cy="120" r="3"
        fill="#07182b" />
      <circle cx="300" cy="114" r="2.5"
        fill="rgba(255,255,255,0.88)" />

      {/* ── Ground shadow ── */}
      <ellipse cx="294" cy="330" rx="65" ry="7"
        fill="rgba(22,184,166,0.1)" />
    </svg>
  );
}
