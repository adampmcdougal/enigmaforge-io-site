interface CapabilityTagProps {
  label: string;
}

export default function CapabilityTag({ label }: CapabilityTagProps) {
  return (
    <span
      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
      style={{
        backgroundColor: "rgba(6,182,212,0.06)",
        color: "#64748b",
        border: "1px solid rgba(6,182,212,0.15)",
      }}
    >
      {label}
    </span>
  );
}
