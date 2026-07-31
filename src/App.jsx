// App.jsx
import { useEffect, useMemo, useState } from "react";
import ChatbotOverlay from "./components/chatbotOverlay.jsx";
// import MetricStat from "./components/MetricStat.jsx";
import KPIFilter from "./components/KPIFilter.jsx";
import ProjectCardV2 from "./components/ProjectCardV2.jsx";
import SkillsMatrix from "./components/SkillsMatrix.jsx";
import BlogIndex from "./components/BlogIndex.jsx";
import BlogPostModal from "./components/BlogPostModal.jsx";
import useRevealOnScroll from "./hooks/useRevealOnScroll.js";
import "./index.css";

import SyndicatorCaseStudy from "./components/SyndicatorCaseStudy.jsx";
import Fan7CaseStudy from "./components/Fan7CaseStudy.jsx";
import ProspectorCaseStudy from "./components/ProspectorCaseStudy.jsx";
import TrustChainCaseStudy from "./components/TrustChainCaseStudy.jsx";

import ProofCard from "./components/ProofCard.jsx";
import {
  Activity,
  BrainCircuit,
  Database,
  Globe2,
  Rocket,
  ServerCog,
  Menu,
  X,
} from "lucide-react";

import LINKS from "./config/links";
// import headline from "./data/headlineMetrics";
import allProjects from "./data/allProjects";
import skillsGroups from "./data/skills";

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

function CommunicationCard({ icon, title, children }) {
  return (
    <article className="case-study-card reveal fade-up">
      <p className="case-study-label">{icon}</p>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function CaseStudyModal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal case-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <h3 className="modal-title">Engineering Case Study</h3>
          <button className="btn" type="button" onClick={onClose}>
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [openPost, setOpenPost] = useState(null);
  const [dark, setDark] = useDarkMode(true);
  const [filter, setFilter] = useState("All");
  const [openCaseStudy, setOpenCaseStudy] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useRevealOnScroll(".reveal");

  const getFilterKey = (project) =>
    String(project.category || project.area || "Other").trim();

  const getAreaLabel = (project) =>
    String(project.area || project.category || "Other").trim();

  const filters = useMemo(() => {
    const uniqueFilters = new Set(allProjects.map(getFilterKey));
    return ["All", ...Array.from(uniqueFilters).filter(Boolean).sort()];
  }, []);

  const visibleProjects = useMemo(() => {
    if (filter === "All") return allProjects;
    return allProjects.filter((project) => getFilterKey(project) === filter);
  }, [filter]);

  const groupedProjects = useMemo(() => {
    const groups = {};

    visibleProjects.forEach((project) => {
      const key = getFilterKey(project);
      if (!groups[key]) groups[key] = [];
      groups[key].push(project);
    });

    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [visibleProjects]);

  

  return (
    <div className="page page-electric force-motion">
      <header className="topbar">
        <Container>
          <div className="topbar-row">
            <button
              className="hamburger"
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <a href="#home" className="brand brand-with-icon">
              <img src="/icon.png" alt="JT Logo" className="brand-icon" />
              <span>Jay Tranberg</span>
            </a>

            <nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`}>
              <a href="#case-studies" onClick={() => setMobileMenuOpen(false)}>
                Case Studies
              </a>

              <a href="#design" onClick={() => setMobileMenuOpen(false)}>
                Design
              </a>

              <a href="#work" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </a>

              <a href="#stack" onClick={() => setMobileMenuOpen(false)}>
                Stack
              </a>

              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </nav>

            <div className="topbar-cta">
              <button
                className="btn"
                type="button"
                onClick={() => setDark((value) => !value)}
                aria-pressed={dark}
                title={dark ? "Switch to light mode" : "Switch to dark mode"}
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

      <section id="home" className="hero hero-results">
        <div className="hero-bg" />

        <Container>
          <div className="hero-inner">
            <p className="kicker">
              Software Engineer • Data Platforms • SaaS • AI-Assisted
              Development
            </p>

            <h1 className="hero-title">
              I build production software that helps people make better
              decisions.
            </h1>

            <p className="hero-subtitle">
              I design, build, deploy, and support production software that
              transforms complex business data into clear, reliable, and
              human-centered applications. My work combines React, Node.js,
              MongoDB, AI-assisted development, and visual telemetry to help
              users understand what their systems are doing in real time.
            </p>

            <div className="proof-grid">
              <ProofCard
                icon={Database}
                value="137,000+"
                label="Prospect Records"
                caption="Global Hockey Intelligence Platform"
              />

              <ProofCard
                icon={Globe2}
                value="98"
                label="Countries"
                caption="Worldwide player coverage"
              />

              <ProofCard
                icon={Rocket}
                value="120+"
                label="Days Live"
                caption="Production uptime"
              />

              <ProofCard
                icon={ServerCog}
                value="6+"
                label="Production Systems"
                caption="Designed & Deployed"
              />

              <ProofCard
                icon={BrainCircuit}
                value="AI"
                label="AI Assisted Engineering"
                caption="Accelerated software delivery"
              />

              <ProofCard
                icon={Activity}
                value="UX"
                label="Visual Telemetry"
                caption="Software that communicates"
              />
            </div>

            <p className="hero-proof reveal fade-up">
              Every project below includes the business problem, architecture,
              engineering decisions, deployment strategy, and measurable
              outcomes.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#case-studies">
                View Case Studies
              </a>

              <a className="btn" href={LINKS.resumePdf} download>
                Download Resume
              </a>

              {LINKS.github ? (
                <a
                  className="btn"
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              ) : null}

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

      <Section
        id="case-studies"
        title="Featured Engineering Projects"
        subtitle="Production software built for real users, real businesses, and real operational challenges."
      >
        <div className="grid3 case-study-grid">
          <article className="case-study-card reveal fade-up">
            <p className="case-study-label">Production Syndication Platform</p>
            <h3>Wall Financial Feed Console</h3>
            <p>
              Built and maintained a production apartment syndication platform
              that normalizes property, floorplan, unit, pricing, availability,
              and promotion data for Apartments.com delivery.
            </p>
            <ul>
              <li>120+ days production uptime</li>
              <li>Thousands of rental units processed</li>
              <li>Automated feed validation and client-facing console</li>
            </ul>

            <button
              className="btn btn-small"
              type="button"
              onClick={() => setOpenCaseStudy("syndicator")}
            >
              Read Case Study
            </button>
          </article>

          <article className="case-study-card reveal fade-up">
            <p className="case-study-label">Data Intelligence Platform</p>
            <h3>The Prospector-A ScoutBoard</h3>
            <p>
              Created a hockey prospect intelligence platform using React, Node,
              Express, MongoDB, API ingestion, scoring logic, search, filtering,
              and analytics dashboards.
            </p>
            <ul>
              <li>137,000+ player records</li>
              <li>98 countries represented</li>
              <li>Live data ingestion and normalized MongoDB storage</li>
            </ul>

            <button
              className="btn btn-small"
              type="button"
              onClick={() => setOpenCaseStudy("prospector")}
            >
              Read Case Study
            </button>
          </article>

          <article className="case-study-card reveal fade-up">
            <p className="case-study-label">SaaS Operations Platform</p>
            <h3>Fan7 Magic Portal</h3>
            <p>
              Engineered a repair-shop customer and operations portal integrating
              authentication, customer claims, dashboards, technician metrics,
              and Shopmonkey-connected workflows.
            </p>
            <ul>
              <li>Role-based customer portal</li>
              <li>Technician and customer dashboards</li>
              <li>Chrome extension workflow integration</li>
            </ul>

            <button
              className="btn btn-small"
              type="button"
              onClick={() => setOpenCaseStudy("fan7")}
            >
              Read Case Study
            </button>
          </article>
          <article className="case-study-card reveal fade-up">
            <p className="case-study-label">Web3 Engineering Platform</p>

            <h3>TrustChain</h3>

            <p>
              A blockchain product family exploring digital trust, wallet-based
              identity, smart contract agreements, and immutable verification
              through Ethereum.
            </p>

            <ul>
              <li>Universal Wallet</li>
              <li>The Witness</li>
              <li>The Contractual Agreement</li>
            </ul>

            <button
              className="btn btn-small"
              type="button"
              onClick={() => setOpenCaseStudy("trustchain")}
            >
              Read Case Study
            </button>
          </article>
        </div>
      </Section>

      <Section
        id="design"
        title="Designing Software That Communicates"
        subtitle="I believe software should continuously explain itself to the people using it."
      >
        <div className="grid4 case-study-grid">
          <CommunicationCard icon="📊" title="Visual Telemetry">
            Dashboards, KPIs, health indicators, live status, and progress
            signals that make system behavior visible instead of hidden.
          </CommunicationCard>

          <CommunicationCard icon="🟢" title="System Confidence">
            Clear cues for sync status, API health, data validation, deployment
            state, and successful user actions.
          </CommunicationCard>

          <CommunicationCard icon="⚠️" title="Human-Friendly Errors">
            Plain-language errors, graceful failures, recovery suggestions, and
            useful fallback states instead of silent crashes.
          </CommunicationCard>

          <CommunicationCard icon="❤️" title="Emotional UX">
            Interfaces that reduce uncertainty, reward progress, guide users,
            and make complex technical systems feel understandable.
          </CommunicationCard>
        </div>
      </Section>

      <Section
        id="work"
        title="Additional Project Work"
        subtitle="Supporting projects across web apps, mobile apps, automation, AI tooling, and client systems."
      >
        <KPIFilter active={filter} onChange={setFilter} options={filters} />

        <div className="project-drawers">
          {groupedProjects.map(([groupName, projects], groupIndex) => (
            <details
              key={groupName}
              className="project-drawer reveal fade-up"
              open={filter !== "All" || groupIndex === 0}
              style={{ transitionDelay: `${groupIndex * 70}ms` }}
            >
              <summary className="project-drawer-summary">
                <span className="project-drawer-title">{groupName}</span>
                <span className="project-drawer-count">
                  ({projects.length})
                </span>
              </summary>

              <div className="grid2 drawer-grid">
                {projects.map((project, index) => (
                  <div
                    key={project.id || project.title}
                    className="reveal fade-up"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <ProjectCardV2 {...project} area={getAreaLabel(project)} />
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section
        id="stack"
        title="Technical Stack"
        subtitle="Technologies I use to build reliable production software."
      >
        <div className="reveal fade-up">
          <SkillsMatrix groups={skillsGroups} />
        </div>
      </Section>

      <Section
        id="blog"
        title="Engineering Notes"
        subtitle="Build logs, architecture notes, debugging notes, and project postmortems."
      >
        <BlogIndex onOpen={setOpenPost} />
        <BlogPostModal post={openPost} onClose={() => setOpenPost(null)} />
      </Section>

      <Section
        id="contact"
        title="Contact"
        subtitle="Open to software engineering roles, SaaS platform work, data tooling, and long-term contract engagements."
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
            <a
              className="link"
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              /in/jaytranberg
            </a>
          </p>
        </div>
      </Section>
      <CaseStudyModal
        open={openCaseStudy}
        onClose={() => setOpenCaseStudy(null)}
      >
        {openCaseStudy === "syndicator" && <SyndicatorCaseStudy />}
        {openCaseStudy === "prospector" && <ProspectorCaseStudy />}
        {openCaseStudy === "fan7" && <Fan7CaseStudy />}
        {openCaseStudy === "trustchain" && <TrustChainCaseStudy />}
      </CaseStudyModal>
      <ChatbotOverlay />
    </div>
  );
}
