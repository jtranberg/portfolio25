import "./ProofCard.css";

export default function ProofCard({
  icon: Icon,
  value,
  label,
  caption,
}) {
  return (
    <div className="proof-card panel">
      <div className="proof-top">
        {Icon && <Icon size={26} strokeWidth={2} />}
      </div>

      <div className="proof-value">{value}</div>

      <div className="proof-label">{label}</div>

      {caption && (
        <div className="proof-caption">
          {caption}
        </div>
      )}
    </div>
  );
}