interface PillarCardProps {
  title: string;
  body: string;
}

export default function PillarCard({ title, body }: PillarCardProps) {
  return (
    <div
      className="rounded-lg p-6 flex flex-col gap-3"
      style={{
        backgroundColor: "#0a1628",
        borderTop: "2px solid #06b6d4",
        border: "1px solid rgba(6,182,212,0.15)",
        borderTopColor: "#06b6d4",
        borderTopWidth: "2px",
      }}
    >
      <h3 className="text-base font-semibold text-white" style={{ letterSpacing: "-0.01em" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
        {body}
      </p>
    </div>
  );
}
