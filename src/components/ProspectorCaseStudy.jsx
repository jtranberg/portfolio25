import KPIChip from "./KPIChip";

export default function ProspectorCaseStudy() {
  return (
    <article className="case-study">
      <header className="case-hero">
        <p className="case-type">Data Intelligence Case Study</p>

        <h1>The Prospector — Scouting Intelligence Platform</h1>

        <p className="case-summary">
          A hockey prospect intelligence platform built to ingest, normalize,
          search, score, and visualize global player data for scouting and
          player evaluation workflows.
        </p>

        <div className="kpi-row">
          <KPIChip text="137,000+ Records" />
          <KPIChip text="98 Countries" />
          <KPIChip text="React" />
          <KPIChip text="Node.js" />
          <KPIChip text="Express" />
          <KPIChip text="MongoDB" />
          <KPIChip text="Recharts" />
        </div>
      </header>

      <figure className="case-screenshot">
        <img
          src="/prospector.png"
          alt="The Prospector scouting dashboard showing prospect records, filters, charts, and player cards"
        />
        <figcaption>
          The Prospector dashboard turns a large hockey dataset into searchable,
          visual scouting intelligence with filters, score bands, and prospect
          cards.
        </figcaption>
      </figure>

      <section>
        <h2>Business Problem</h2>

        <p>
          Hockey scouting data is spread across leagues, countries, teams, and
          player profiles. Scouts need a faster way to search, compare, filter,
          and evaluate players without manually jumping between disconnected
          sources.
        </p>

        <p>
          The goal was to build a scouting intelligence platform that could
          transform raw player data into a searchable, visual, decision-support
          system.
        </p>
      </section>

      <section>
        <h2>Project Objectives</h2>

        <ul>
          <li>Ingest player data from external hockey data sources</li>
          <li>Normalize inconsistent player, team, league, and country fields</li>
          <li>Store prospect records in MongoDB for fast querying</li>
          <li>Build searchable and filterable scouting views</li>
          <li>Create visual dashboards for player distribution and score bands</li>
          <li>Support future scoring, ranking, and scouting workflows</li>
        </ul>
      </section>

      <section>
        <h2>System Architecture</h2>

        <pre className="architecture">
{`Elite Prospects API
        │
        ▼
Rate-Limited Sync Route
        │
        ▼
Mapping + Normalization Layer
        │
        ▼
MongoDB Prospect Store
        │
        ▼
Express Search API
        │
        ▼
React Dashboard
        │
        ▼
Filters + Charts + Prospect Cards
        │
        ▼
Scouting Intelligence Workflow`}
        </pre>
      </section>

      <section>
        <h2>Engineering Challenges</h2>

        <h3>API Constraints</h3>
        <p>
          The external data source required careful API usage because of rate
          limits and endpoint restrictions. The system was designed around
          controlled sync routes, caching, and bulk ingestion strategies.
        </p>

        <h3>Data Normalization</h3>
        <p>
          Player records contained inconsistent fields across leagues, teams,
          nationalities, positions, seasons, and stat formats. A normalization
          layer was required before saving records into MongoDB.
        </p>

        <h3>Search and Filtering</h3>
        <p>
          The platform needed to support fast filtering by player name, league,
          team, position, and other scouting attributes while keeping the
          frontend responsive.
        </p>

        <h3>Scoring and Visualization</h3>
        <p>
          Raw stats are not enough for scouting workflows. The application added
          score bands, charts, stat cards, and dashboard views to make the data
          easier to interpret.
        </p>
      </section>

      <section>
        <h2>Visual Telemetry & UX</h2>

        <p>
          The Prospector was designed to help users understand the dataset at a
          glance. Instead of presenting raw database rows, the interface uses
          dashboards, charts, score bands, filters, flags, player cards, and
          detail panels to communicate scouting context quickly.
        </p>

        <ul>
          <li>Prospect score bands</li>
          <li>Country and league distribution</li>
          <li>Player cards with scouting summaries</li>
          <li>Live data and cached data indicators</li>
          <li>Responsive filters and search states</li>
          <li>Dashboard charts for decision support</li>
        </ul>
      </section>

      <section>
        <h2>Results</h2>

        <div className="results-grid">
          <div>
            <strong>137,000+</strong>
            <span>Prospect Records</span>
          </div>

          <div>
            <strong>98</strong>
            <span>Countries Represented</span>
          </div>

          <div>
            <strong>MongoDB</strong>
            <span>Normalized Prospect Store</span>
          </div>

          <div>
            <strong>Live</strong>
            <span>Search + Dashboard UI</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Lessons Learned</h2>

        <p>
          This project reinforced that useful data platforms are not just about
          collecting records. The real value comes from normalization, query
          design, visualization, and reducing the time it takes for users to
          understand what the data means.
        </p>

        <p>
          Building The Prospector also highlighted the importance of designing
          around API limits, caching, progressive ingestion, and clear user
          feedback during long-running data operations.
        </p>
      </section>

      <section>
        <h2>Future Roadmap</h2>

        <ul>
          <li>Advanced player ranking models</li>
          <li>Scout notes and team watchlists</li>
          <li>Historical season comparison</li>
          <li>AI-assisted prospect summaries</li>
          <li>League strength normalization</li>
          <li>Exportable scouting reports</li>
        </ul>
      </section>
    </article>
  );
}