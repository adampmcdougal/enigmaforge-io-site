export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="88" stroke="#06b6d4" strokeWidth="2.5" />
      <line x1="54" y1="62" x2="54" y2="138" stroke="#06b6d4" strokeWidth="9" strokeLinecap="round" />
      <line x1="54" y1="62" x2="91" y2="62" stroke="#06b6d4" strokeWidth="9" strokeLinecap="round" />
      <line x1="54" y1="100" x2="80" y2="100" stroke="#06b6d4" strokeWidth="9" strokeLinecap="round" />
      <line x1="54" y1="138" x2="91" y2="138" stroke="#06b6d4" strokeWidth="9" strokeLinecap="round" />
      <line x1="113" y1="62" x2="113" y2="138" stroke="#f59e0b" strokeWidth="9" strokeLinecap="round" />
      <line x1="113" y1="62" x2="150" y2="62" stroke="#f59e0b" strokeWidth="9" strokeLinecap="round" />
      <line x1="113" y1="100" x2="138" y2="100" stroke="#f59e0b" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}
