// App.jsx
import { useEffect, useMemo, useState } from "react";
import ChatbotOverlay from "./components/chatbotOverlay.jsx";
import MetricStat from "./components/MetricStat.jsx";
import KPIFilter from "./components/KPIFilter.jsx";
import ProjectCardV2 from "./components/ProjectCardV2.jsx";
import SkillsMatrix from "./components/SkillsMatrix.jsx";
import useRevealOnScroll from "./hooks/useRevealOnScroll.js";
import "./index.css";



import LINKS from "./config/links";
import headline from "./data/headlineMetrics";
import allProjects from "./data/allProjects";

import skillsGroups from "./data/skills";

import BlogIndex from "./components/BlogIndex.jsx";
import BlogPostModal from "./components/BlogPostModal.jsx";

/* ---------- Theme (persisted) + smooth anchor scroll ---------- */
function useDarkMode(defaultOn = true) {
  const systemDark =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches;

  const stored =
    typeof window !== "undefined" ? localStorage.getItem("darkMode") : null;

  const initial =
    stored === "true" || (stored === null && (defaultOn || systemDark));

  const [dark, setDark] = useState(initial);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("darkMode", String(dark));
  }, [dark]);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;

      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return [dark, setDark];
}

/* ---------- Tiny UI primitives ---------- */
function Container({ children }) {
  return <div className="container">{children}</div>;
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <Container>
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </Container>
    </section>
  );
}

export default function App() {
  const [openPost, setOpenPost] = useState(null);
  const [dark, setDark] = useDarkMode(true);
  useRevealOnScroll(".reveal");

  // ✅ RESTORE filter state
  const [filter, setFilter] = useState("All");

  // ✅ Choose what field powers pills (category first, then area)
  const getFilterKey = (p) => String(p.category || p.area || "Other").trim();

  // ✅ What label to show on the card pill (area first, fallback to category)
  const getAreaLabel = (p) => String(p.area || p.category || "Other").trim();

  // ✅ Build pills from real data
  const filters = useMemo(() => {
    const set = new Set(allProjects.map(getFilterKey));
    const list = Array.from(set).filter(Boolean).sort();
    const out = ["All", ...list];

    // Debug: tells you if you truly have many categories
    console.log("FILTERS:", out.length, out);

    return out;
  }, []);

  // ✅ Filter visible projects
  const visible =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => getFilterKey(p) === filter);

  return (
    <div className="page page-electric force-motion">
      {/* ---------- Topbar ---------- */}
      <header className="topbar">
        <Container>
          <div className="topbar-row">
            <a href="#home" className="brand brand-with-icon">
              <img src="/icon.png" alt="JT Logo" className="brand-icon" />
              <span>Jay Tranberg</span>
            </a>

            <nav className="nav">
              <a href="#featured">Work</a>
              <a href="#stack">Stack</a>
              <a href="#contact">Contact</a>
            </nav>

            <div className="topbar-cta">
              <button
                className="btn"
                onClick={() => setDark((v) => !v)}
                aria-pressed={dark}
                title={dark ? "Switch to light" : "Switch to dark"}
              >
                {dark ? "☀️" : "🌙"}
              </button>

              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* ---------- Hero ---------- */}
      <section id="home" className="hero hero-results">
        <div className="hero-bg" />
        <Container>
          <div className="hero-inner">
            <p className="kicker">
              Team Lead · Full-Stack Engineer · IoT · AI · Web3
            </p>

            <h1 className="hero-title">I lead, build and ship end-to-end software.</h1>

            <p className="hero-subtitle">
              Team lead delivery across firmware, backends, ML, SaaS, mobile, and
              Web3 — focused on reliability, UX, and outcomes.
            </p>

            <div className="metrics-grid">
              {headline.map((m, i) => (
                <div
                  key={m.label}
                  className="reveal fade-up"
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <MetricStat {...m} />
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <a className="btn" href={LINKS.resumePdf} download>
                Download Resume
              </a>
              <a className="btn" href={LINKS.appendixPdf} download>
                Project Appendix
              </a>
              <a
                className="btn"
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Work ---------- */}
      <Section
        id="featured"
        title="Work"
        subtitle="Filter by focus area and open any project for details."
      >
        <KPIFilter active={filter} onChange={setFilter} options={filters} />

        <div className="grid2">
          {visible.map((p, i) => (
            <div
              key={p.id || p.title}
              className="reveal fade-up"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <ProjectCardV2 {...p} area={getAreaLabel(p)} />
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- Skills ---------- */}
      <Section
        id="stack"
        title="Skills Matrix"
        subtitle="A quick, honest snapshot of what I use to ship."
      >
        <div className="reveal fade-up">
          <SkillsMatrix groups={skillsGroups} />
        </div>
      </Section>

      {/* ---------- Blog ---------- */}
      <Section id="blog" title="Blog" subtitle="Build logs, experiments, postmortems.">
        <BlogIndex onOpen={setOpenPost} />
        <BlogPostModal post={openPost} onClose={() => setOpenPost(null)} />
      </Section>

      {/* ---------- Contact ---------- */}
      <Section
        id="contact"
        title="Contact"
        subtitle="Open to full-time roles and long-term contract engagements."
      >
        <div className="panel">
          <p>
            Email:{" "}
            <a className="link" href={LINKS.email}>
              jtranberg@hotmail.ca
            </a>
            <br />
            Phone:{" "}
            <a className="link" href={LINKS.tel}>
              +1 (250) 516-1137
            </a>
            <br />
            LinkedIn:{" "}
            <a className="link" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              /in/jaytranberg
            </a>
          </p>
        </div>
      </Section>

      {/* ---------- Chatbot ---------- */}
      <ChatbotOverlay />
    </div>
  );
}
