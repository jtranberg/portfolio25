import KPIChip from "./KPIChip";

export default function SyndicatorCaseStudy() {
  return (
    <article className="case-study">
      {/* ====================================================== */}
      {/* Hero */}
      {/* ====================================================== */}

      <header className="case-hero">
        <p className="case-type">Production Engineering Case Study</p>

        <h1>Wall Financial Feed Console</h1>

        <p className="case-summary">
          A production apartment syndication platform that automates property
          normalization, business rule processing, XML feed generation,
          deployment, validation, and operational monitoring for thousands of
          rental units delivered to Apartments.com. The platform reduces manual
          maintenance while providing real-time operational visibility into feed
          health and publication readiness.
        </p>

        <div className="kpi-row">
          <KPIChip text="120+ Days Live" />
          <KPIChip text="Production SaaS" />
          <KPIChip text="React" />
          <KPIChip text="Node.js" />
          <KPIChip text="Express" />
          <KPIChip text="Render" />
          <KPIChip text="Netlify" />
        </div>
      </header>
      <figure className="case-screenshot">
        <img
          src="/syndicator.png"
          alt="Wall Financial Feed Console showing production apartment syndication dashboard, feed validation, property metrics, and operational telemetry."
        />
        <figcaption>
          The Wall Financial Feed Console provides operational visibility into
          apartment syndication by monitoring property data, feed health,
          validation status, promotions, and deployment readiness for
          Apartments.com.
        </figcaption>
      </figure>
      {/* ====================================================== */}
      {/* Business Problem */}
      {/* ====================================================== */}

      <section>
        <h2>Business Problem</h2>

        <p>
          Apartment marketing platforms require highly structured XML feeds
          containing property, floorplan, unit, pricing, promotions,
          availability, and media information.
        </p>

        <p>
          Source systems frequently contain inconsistent naming, incomplete
          records, changing business rules, and evolving marketing requirements.
        </p>

        <p>
          Manual maintenance created unnecessary operational overhead and made
          it difficult to quickly identify feed issues before publication.
        </p>
      </section>

      {/* ====================================================== */}
      {/* Objectives */}
      {/* ====================================================== */}

      <section>
        <h2>Project Objectives</h2>

        <ul>
          <li>Automate XML feed generation</li>

          <li>Normalize inconsistent source data</li>

          <li>Validate outbound feeds</li>

          <li>Reduce manual intervention</li>

          <li>Provide operational visibility</li>

          <li>Support continuous deployment</li>
        </ul>
      </section>

      {/* ====================================================== */}
      {/* Architecture */}
      {/* ====================================================== */}

      <section>
        <h2>System Architecture</h2>

        <pre className="architecture">
          Property Database │ ▼ Normalization Engine │ ▼ Business Rules │ ▼
          Promotion Engine │ ▼ XML Feed Generator │ ▼ Validation Layer │ ▼
          Apartments.com Feed │ ▼ Operations Dashboard
        </pre>
      </section>

      {/* ====================================================== */}
      {/* Engineering Challenges */}
      {/* ====================================================== */}

      <section>
        <h2>Engineering Challenges</h2>
        <h3>Production Reliability</h3>

        <p>
          The platform was designed to operate continuously in production while
          handling changing business rules, evolving property inventories,
          promotion updates, and client enhancement requests without disrupting
          downstream feed consumers.
        </p>

        <h3>Data Normalization</h3>

        <p>
          Different properties exposed inconsistent naming, floorplans,
          promotions, and availability information.
        </p>

        <h3>Feed Validation</h3>

        <p>
          Invalid records needed to be isolated without interrupting the
          remainder of the feed.
        </p>

        <h3>Operational Visibility</h3>

        <p>
          Support staff required immediate insight into synchronization health,
          blocked records, deployment status, and publication readiness.
        </p>
      </section>

      {/* ====================================================== */}
      {/* Visual Telemetry */}
      {/* ====================================================== */}

      <section>
        <h2>Visual Telemetry & Human-Centered UX</h2>

        <p>
          Rather than relying on server logs, the application continuously
          communicates system state through dashboards, health indicators,
          validation summaries, deployment status, and operational KPIs.
        </p>

        <ul>
          <li>Feed Health</li>

          <li>Blocked Records</li>

          <li>Promotion Status</li>

          <li>Property Statistics</li>

          <li>Deployment Readiness</li>

          <li>Validation Summary</li>
        </ul>
      </section>

      {/* ====================================================== */}
      {/* Results */}
      {/* ====================================================== */}

      <section>
        <h2>Results</h2>

        <div className="results-grid">
          <div>
            <strong>120+</strong>
            <span>Days Continuous Production Uptime</span>
          </div>

          <div>
            <strong>Thousands</strong>
            <span>Rental Units Processed</span>
          </div>

          <div>
            <strong>Automated</strong>
            <span>Promotion & Feed Management</span>
          </div>

          <div>
            <strong>Live</strong>
            <span>Client Operations Dashboard</span>
          </div>

          <div>
            <strong>Production</strong>
            <span>Apartments.com Integration</span>
          </div>

          <div>
            <strong>Continuous</strong>
            <span>Client Enhancements & Maintenance</span>
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* Lessons Learned */}
      {/* ====================================================== */}

      <section>
        <h2>Lessons Learned</h2>

        <p>
          Building production software extends far beyond writing transformation
          logic. Reliable operational systems require observability, validation,
          deployment confidence, and interfaces that clearly communicate system
          health to non-technical users.
        </p>

        <p>
          This project reinforced my belief that software should actively
          communicate with its users, reducing uncertainty while increasing
          trust in production systems.
        </p>
      </section>
    </article>
  );
}
