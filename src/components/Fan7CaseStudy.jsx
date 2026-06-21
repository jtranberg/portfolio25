import KPIChip from "./KPIChip";

export default function Fan7CaseStudy() {
  return (
    <article className="case-study">
      <header className="case-hero">
        <p className="case-type">Product Engineering Case Study</p>

        <h1>Fan7 Team & Customer Experience Platform</h1>

        <p className="case-summary">
          Fan7 is a multi-tenant, role-based SaaS platform designed to help
          automotive service businesses build stronger teams through
          appreciation, gamified performance metrics, operational visibility,
          and meaningful customer relationships. The platform connects staff,
          managers, customers, service data, and Shopmonkey-powered workflows
          through a human-centered experience built around the 4 New Principles
          of Success.
        </p>

        <div className="kpi-row">
          <KPIChip text="Multi-Tenant SaaS" />
          <KPIChip text="25,000+ Clients" />
          <KPIChip text="Role-Based Access" />
          <KPIChip text="Gamified Metrics" />
          <KPIChip text="Customer Connection" />
          <KPIChip text="Shopmonkey API" />
          <KPIChip text="Chrome Extension" />
        </div>
      </header>
      <figure className="case-screenshot">
        <img
          src="/Fan7.png"
          alt="Fan7 dashboard showing multi-tenant operations, customer engagement, team metrics, and service management."
        />
        <figcaption>
          Fan7 brings together customer relationships, team engagement,
          operational dashboards, Shopmonkey integration, and gamified
          performance into a single multi-tenant platform focused on helping
          repair shops build stronger teams and better customer experiences.
        </figcaption>
      </figure>
      <section>
        <h2>Business Problem</h2>

        <p>
          Automotive repair shops rely on people as much as process. Service
          advisors, technicians, managers, owners, and customers all affect the
          final experience, but most shop systems focus mainly on work orders
          instead of team culture, appreciation, communication, and trust.
        </p>

        <p>
          Fan7 was designed to bridge that gap by creating a connected
          multi-tenant platform where operational data supports stronger teams,
          clearer recognition, better accountability, and more human customer
          relationships.
        </p>
      </section>
      <section>
        <h2>Integrated Coaching Layer: The Professor</h2>

        <p>
          Fan7 also incorporates a connected application called The Professor,
          designed for live testing, coaching, and guided performance
          improvement. This layer extends Fan7 beyond reporting by helping staff
          learn, practice, and improve through real-time feedback.
        </p>

        <p>
          Instead of only showing metrics after work is completed, The Professor
          supports active coaching workflows where users can be tested, guided,
          encouraged, and evaluated against the 4 Principles of Success.
        </p>

        <ul>
          <li>Live testing and coaching workflows</li>
          <li>Performance feedback connected to team development</li>
          <li>Training support for staff and managers</li>
          <li>
            Reinforcement of communication, recognition, accountability, and
            continuous improvement
          </li>
          <li>
            Human-centered feedback designed to help people grow, not just
            measure them
          </li>
        </ul>
      </section>

      <section>
        <h2>Project Objectives</h2>

        <ul>
          <li>Create a multi-tenant SaaS foundation for automotive shops</li>
          <li>
            Support role-based access for owners, managers, advisors,
            technicians, customers, and admins
          </li>
          <li>Manage and search 25,000+ client/customer records</li>
          <li>
            Use appreciation and gamified metrics to strengthen team culture
          </li>
          <li>
            Connect customer profiles, vehicles, orders, and service history
          </li>
          <li>
            Integrate Shopmonkey-powered workflows and operational dashboards
          </li>
          <li>Improve workflow speed with browser extension integration</li>
          <li>
            Design clear feedback for login, claims, loading states, and
            customer actions
          </li>
        </ul>
      </section>

      <section>
        <h2>System Architecture</h2>

        <pre className="architecture">
          {`Shopmonkey API
        │
        ▼
Multi-Tenant Data Ingestion
        │
        ▼
Fan7 API Routes
        │
        ▼
Authentication + Role-Based Access
        │
        ▼
Customer Claim + Profile Matching
        │
        ▼
25,000+ Client Database
        │
        ▼
Dashboards + Gamified Metrics
        │
        ▼
Chrome Extension Workflow
        │
        ▼
Team + Customer Experience`}
        </pre>
      </section>

      <section>
        <h2>Engineering Challenges</h2>

        <h3>Multi-Tenant Data Design</h3>
        <p>
          Fan7 needed to support separate shop environments while keeping
          customer, staff, role, and operational data properly scoped to the
          correct business.
        </p>

        <h3>Role-Based Access</h3>
        <p>
          The platform required different experiences for owners, managers,
          advisors, technicians, customers, and administrators. The system
          needed clear routing, role validation, protected views, and safe
          defaults.
        </p>

        <h3>Large Customer Dataset</h3>
        <p>
          With more than 25,000 client/customer records in the database, the
          application needed efficient search, pagination, profile matching, and
          customer claim workflows.
        </p>

        <h3>Human-Centered Metrics</h3>
        <p>
          Fan7 was not designed only to measure performance. The challenge was
          to present metrics in a way that encourages appreciation,
          accountability, and team growth rather than creating a cold
          scoreboard.
        </p>

        <h3>External API Workflows</h3>
        <p>
          Shop data came from an external system, so the platform needed to
          handle loading states, incomplete records, API constraints, cached
          data, and graceful fallback behavior.
        </p>
      </section>

      <section>
        <h2>Visual Telemetry & UX</h2>

        <p>
          Fan7 was designed around the idea that software should make people
          feel more connected, not more monitored. The interface uses visible
          feedback, gamified progress, claim states, role-aware navigation, and
          clear dashboard signals to help staff and customers understand what is
          happening.
        </p>

        <ul>
          <li>Role-aware navigation and protected redirects</li>
          <li>Customer claim status and profile matching feedback</li>
          <li>Dashboard loading, empty, and fallback states</li>
          <li>Gamified technician and team performance indicators</li>
          <li>Customer, vehicle, and service history summaries</li>
          <li>Chrome extension action feedback</li>
        </ul>
      </section>

      <section>
        <h2>Results</h2>

        <div className="results-grid">
          <div>
            <strong>Multi-Tenant</strong>
            <span>SaaS Platform Foundation</span>
          </div>

          <div>
            <strong>25,000+</strong>
            <span>Client Records in Database</span>
          </div>

          <div>
            <strong>Role-Based</strong>
            <span>Owner, Staff, Customer & Admin Access</span>
          </div>

          <div>
            <strong>Gamified</strong>
            <span>Team Performance Metrics</span>
          </div>

          <div>
            <strong>Connected</strong>
            <span>Shopmonkey Customer Workflows</span>
          </div>

          <div>
            <strong>Human</strong>
            <span>Customer Experience Design</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Lessons Learned</h2>

        <p>
          Fan7 reinforced that operational software should support people, not
          just processes. In a busy repair shop, dashboards, metrics, and
          customer data only create value when they improve trust,
          communication, recognition, and decision-making.
        </p>

        <p>
          The project also showed the importance of designing multi-tenant
          systems with strong role boundaries, predictable redirects, scalable
          data access, and user feedback that makes complex workflows feel
          understandable.
        </p>
      </section>

      <section>
        <h2>Future Roadmap</h2>

        <ul>
          <li>AI-assisted customer service summaries</li>
          <li>Technician quality and comeback-risk scoring</li>
          <li>Automated customer retention insights</li>
          <li>Recognition and appreciation workflows</li>
          <li>Manager-facing team health alerts</li>
          <li>Deeper Shopmonkey workflow synchronization</li>
        </ul>
      </section>
    </article>
  );
}
