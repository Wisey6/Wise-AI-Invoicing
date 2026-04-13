export function WiseLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="8" fill="#3b82f6" fillOpacity="0.1" />
      <path
        d="M10 26L15 14L20 22L25 14L30 26"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="12" r="2" fill="#3b82f6" />
    </svg>
  );
}

export function WiseLogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <WiseLogo />
      <span className="text-xl font-semibold text-white tracking-tight">
        Wise AI
      </span>
    </div>
  );
}
