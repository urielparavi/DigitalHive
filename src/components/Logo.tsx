interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className = "", size = 32 }: LogoProps) => {
  // unique IDs to avoid conflicts when multiple logos on page
  const gradientId = `logo-gradient-${size}`;
  const strokeGradientId = `logo-stroke-gradient-${size}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hexagon background - dark theme colors */}
      <path
        d="M16 2L28.1244 9V23L16 30L3.87564 23V9L16 2Z"
        fill={`url(#${gradientId})`}
        stroke={`url(#${strokeGradientId})`}
        strokeWidth="1.5"
      />
      {/* Inner honeycomb pattern - representing the "Hive" */}
      <path
        d="M16 8L21.1962 11V17L16 20L10.8038 17V11L16 8Z"
        fill="none"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="1.2"
      />
      {/* Digital dot pattern */}
      <circle cx="16" cy="14" r="2" fill="white" />
      <circle cx="12" cy="16.5" r="1.2" fill="rgba(255,255,255,0.6)" />
      <circle cx="20" cy="16.5" r="1.2" fill="rgba(255,255,255,0.6)" />

      <defs>
        <linearGradient id={gradientId} x1="3" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e3a5f" />
          <stop offset="0.5" stopColor="#0f2744" />
          <stop offset="1" stopColor="#0a1929" />
        </linearGradient>
        <linearGradient id={strokeGradientId} x1="3" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
    </svg>
  );
};
