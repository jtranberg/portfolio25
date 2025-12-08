import { useEffect } from "react";
import { marked } from "marked";

export default function BlogPostModal({ post, onClose }) {
  // `post` is the full object from index.json (not a slug)
  useEffect(() => {
    if (!post) return;
    // trap ESC to close
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3 className="modal-title">{post.title}</h3>
          <button className="btn" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="modal-meta">
          <time dateTime={post.date}>{new Date(post.date).toLocaleString()}</time>
          {post.tags?.length ? <span className="dot">•</span> : null}
          {post.tags?.length ? <span>{post.tags.join(" / ")}</span> : null}
          {post.readingTime ? <><span className="dot">•</span><span>{post.readingTime}</span></> : null}
        </div>

        {post.hero ? <img src={post.hero} alt="" className="modal-hero" /> : null}

        <article
          className="modal-body markdown"
          // Safe because content is yours; if needed, add a sanitizer.
          dangerouslySetInnerHTML={{ __html: marked.parse(post.content || "") }}
        />
      </div>
    </div>
  );
}
