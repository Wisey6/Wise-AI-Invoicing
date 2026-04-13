export function WiseLogo({
  className = "",
  color = "white",
  size = 40,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head - outer circle */}
      <circle cx="100" cy="72" r="58" stroke={color} strokeWidth="8" fill="none" />
      {/* Ear tufts */}
      <path
        d="M52 38C52 38 38 8 58 2C68 -1 72 18 72 18"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M148 38C148 38 162 8 142 2C132 -1 128 18 128 18"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left eye */}
      <circle cx="76" cy="72" r="16" stroke={color} strokeWidth="6" fill="none" />
      <circle cx="80" cy="68" r="5" fill={color} />
      {/* Right eye */}
      <circle cx="124" cy="72" r="16" stroke={color} strokeWidth="6" fill="none" />
      <circle cx="128" cy="68" r="5" fill={color} />
      {/* Beak */}
      <path
        d="M92 88L100 100L108 88"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Body */}
      <path
        d="M58 120C58 120 52 180 68 210C78 228 92 234 100 236C108 234 122 228 132 210C148 180 142 120 142 120"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Wing detail left */}
      <path
        d="M62 140C62 140 44 160 48 190C50 202 58 210 68 214"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Wing detail right */}
      <path
        d="M138 140C138 140 156 160 152 190C150 202 142 210 132 214"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Chest feather lines */}
      <path
        d="M84 150C84 150 92 170 100 172C108 170 116 150 116 150"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M88 170C88 170 94 186 100 188C106 186 112 170 112 170"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Feet */}
      <path
        d="M82 236L78 240L86 240L90 236"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M110 236L114 240L122 240L118 236"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function WiseLogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <WiseLogo size={36} />
      <span className="text-xl font-semibold text-white tracking-tight">
        Wise AI
      </span>
    </div>
  );
}
