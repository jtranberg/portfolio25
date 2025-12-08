export default function MetricStat({ label, value, unit = "percent", sign = null, caption }) {
  function format() {
    if (value == null) return ""; // handle text-only KPI rows
    const s = sign === "plus" ? "plus "
            : sign === "minus" ? "minus "
            : sign === "sub" ? "sub "
            : "";
    const u = unit ? ` ${unit}` : "";
    return `${s}${value}${u}`;
  }

  return (
    <div className="metric panel">
      <div className="metric-value">{format()}</div>
      <div className="metric-label">{label}</div>
      {caption ? <div className="metric-caption muted">{caption}</div> : null}
    </div>
  );
}
