export default function KPIFilter({ active, onChange, options }) {
  return (
    <div className="filters">
      {options.map((opt) => (
        <button
          key={opt}
          className={`chip ${active === opt ? "chip-active" : ""}`}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
