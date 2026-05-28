export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Hexagon outline */}
      <polygon
        points="24,2 44,13.5 44,34.5 24,46 4,34.5 4,13.5"
        stroke="#06b6d4"
        strokeWidth="1.5"
        fill="rgba(6,182,212,0.06)"
      />
      {/* Center node */}
      <circle cx="24" cy="24" r="3" fill="#06b6d4" />
      {/* Outer nodes */}
      <circle cx="14" cy="17" r="2" fill="#818cf8" />
      <circle cx="34" cy="17" r="2" fill="#818cf8" />
      <circle cx="14" cy="31" r="2" fill="#818cf8" />
      <circle cx="34" cy="31" r="2" fill="#818cf8" />
      {/* Connections from center */}
      <line x1="24" y1="24" x2="14" y2="17" stroke="#06b6d4" strokeWidth="0.75" strokeOpacity="0.7" />
      <line x1="24" y1="24" x2="34" y2="17" stroke="#06b6d4" strokeWidth="0.75" strokeOpacity="0.7" />
      <line x1="24" y1="24" x2="14" y2="31" stroke="#06b6d4" strokeWidth="0.75" strokeOpacity="0.7" />
      <line x1="24" y1="24" x2="34" y2="31" stroke="#06b6d4" strokeWidth="0.75" strokeOpacity="0.7" />
      {/* Horizontal connections */}
      <line x1="14" y1="17" x2="34" y2="17" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.4" />
      <line x1="14" y1="31" x2="34" y2="31" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.4" />
    </svg>
  );
}
