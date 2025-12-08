import { useEffect, useState } from "react";

const formatDate = (val) => {
  if (!val) return "";
  const d = new Date(val);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
};

export default function BlogIndex({ onOpen }) {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/posts/index.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (!alive) return;
        // in BlogIndex normalization
const normalized = (data.posts || data || []).map((p) => ({
  id: p.id,
  slug: p.slug,
  title: p.title || p.slug?.replace(/-/g, " ") || "Untitled",
  date: p.date || p.publishedAt || "",
  tags: p.tags || [],
  summary: p.summary || p.excerpt || "",
  coverImage: p.coverImage || "",
  readingMinutes: p.readingMinutes || undefined,
  featured: !!p.featured,
  content: p.content || "", // <-- keep inline content if present
}));


        setPosts(normalized);
        setStatus("ok");
      } catch (e) {
        console.error("Blog index load failed:", e);
        if (alive) setStatus("error");
      }
    })();
    return () => { alive = false; };
  }, []);

  if (status === "loading") return <p className="muted">Loading posts…</p>;
  if (status === "error")
    return (
      <p className="error">
        Couldn’t load <code>/posts/index.json</code>. Make sure it exists and is valid JSON.
      </p>
    );
  if (!posts.length) return <p className="muted">No posts yet—coming soon.</p>;

  return (
    <div className="grid2 blog-grid">
      {posts.map((p) => (
        <article key={p.slug} className="card-v3">
          <div className="card-glow" />
          <div className="card-head">
            <h4 className="card-title">{p.title}</h4>
            {!!p.tags?.length && (
              <div className="card-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            )}
          </div>

          <div className="card-body">
            {formatDate(p.date) && <div className="post-meta">{formatDate(p.date)}</div>}
            {p.summary && <p>{p.summary}</p>}
          </div>

          <div className="card-sep" />
          <div className="card-foot">
            <button className="btn" onClick={() => onOpen(p)}>
              Read
            </button>
            {/* Removed the Raw .md button from the card */}
          </div>
        </article>
      ))}
    </div>
  );
}
