export default function ProjectCardV2({
  area,
  title,
  summary,
  kpis = [],
  tags = [],

  // portfolio format
  links = [],

  // app-intelligence format (optional)
  linkUrl,
  linkText,

  image,
}) {
  const prettyLabel = (label, href) => {
    const raw = (label || "").trim();
    const s = raw.toLowerCase();

    // normalize common imported labels
    if (s === "visit") return "Live Demo";
    if (s === "play game") return "Play";
    if (s === "play") return "Play";

    // infer by URL when label is missing/boring
    if (!raw || s === "link") {
      const h = href || "";
      if (h.includes("play.google.com")) return "Google Play";
      if (h.includes("github.com")) return "GitHub";
      return "Live Demo";
    }

    return raw;
  };

  const resolvedLinks =
    links?.length > 0
      ? links
      : linkUrl
      ? [{ href: linkUrl, label: linkText || "Live Demo" }]
      : [];

  return (
    <article className="card card-v2">
      {image && (
        <div className="card-media">
          <img src={image} alt={title} loading="lazy" decoding="async" />
        </div>
      )}

      <div className="card-body">
        <div className="card-head">
          <span className="tag">{area}</span>

          {resolvedLinks.length > 0 && (
            <div className="card-links">
              {resolvedLinks.map((l) => (
                <a
                  key={l.href || l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-cta"
                >
                  {prettyLabel(l.label, l.href)}
                </a>
              ))}
            </div>
          )}
        </div>

        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{summary}</p>

        {kpis?.length > 0 && (
          <ul className="kpi-list">
            {kpis.map((k, idx) => {
              if (typeof k === "string")
                return (
                  <li key={idx} className="kpi">
                    {k}
                  </li>
                );

              const sign =
                k.sign === "plus"
                  ? "plus "
                  : k.sign === "minus"
                  ? "minus "
                  : k.sign === "sub"
                  ? "sub "
                  : "";

              const unit = k.unit ? ` ${k.unit}` : "";
              const val = (k.value ?? "") + unit;

              return (
                <li key={idx} className="kpi">
                  <span className="kpi-value">
                    {sign}
                    {val}
                  </span>
                  <span className="kpi-label">{k.label}</span>
                </li>
              );
            })}
          </ul>
        )}

        {tags?.length > 0 && (
          <div className="card-tags">
            {tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
