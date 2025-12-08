export default function ProjectCardV2({
  area,
  title,
  summary,
  kpis = [],
  tags = [],
  links = [],
  
  image,              // ← new
}) {
  return (
    <article className="card card-v2">
      {/* optional screenshot */}
      {image && (
        <div className="card-media">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <div className="card-body">
        <div className="card-head">
          <span className="tag">{area}</span>
          {links?.length > 0 && (
            <div className="card-links">
              {links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link-cta">
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{summary}</p>

        {/* KPIs */}
        {kpis?.length > 0 && (
          <ul className="kpi-list">
            {kpis.map((k, idx) => {
              // support old string KPIs gracefully
              if (typeof k === "string") return <li key={idx} className="kpi">{k}</li>;
              const sign = k.sign === "plus" ? "plus " : k.sign === "minus" ? "minus " : k.sign === "sub" ? "sub " : "";
              const unit = k.unit ? ` ${k.unit}` : "";
              const val = (k.value ?? "") + unit;
              return (
                <li key={idx} className="kpi">
                  <span className="kpi-value">{sign}{val}</span>
                  <span className="kpi-label">{k.label}</span>
                </li>
              );
            })}
          </ul>
        )}

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="card-tags">
            {tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
