import KPIChip from "./KPIChip";

export default function TrustChainCaseStudy() {
  return (
    <article className="case-study">
      <header className="case-hero">
        <p className="case-type">Web3 Engineering Case Study</p>

        <h1>TrustChain — Digital Trust & Smart Contract Platform</h1>

        <p className="case-summary">
          TrustChain is a Web3 product family exploring digital trust,
          wallet-based identity, smart contract agreements, and blockchain-backed
          verification. The platform includes Universal Wallet, The Witness, and
          The Contractual Agreement — three connected applications focused on
          making decentralized agreement workflows understandable, verifiable,
          and usable.
        </p>

        <div className="kpi-row">
          <KPIChip text="Universal Wallet" />
          <KPIChip text="The Witness" />
          <KPIChip text="Contractual Agreement" />
          <KPIChip text="Solidity" />
          <KPIChip text="Ethereum" />
          <KPIChip text="Ethers.js" />
          <KPIChip text="Web3 UX" />
        </div>
      </header>

      <div className="case-gallery">
        <figure>
          <img src="/universalWallet.png" alt="Universal Wallet interface" />
          <figcaption>
            Universal Wallet — wallet identity, transaction access, and user
            control.
          </figcaption>
        </figure>

        <figure>
          <img src="/witness.png" alt="The Witness verification interface" />
          <figcaption>
            The Witness — digital witnessing and verification workflow.
          </figcaption>
        </figure>

        <figure>
          <img
            src="/contractulAgreement.png"
            alt="The Contractual Agreement interface"
          />
          <figcaption>
            The Contractual Agreement — smart contract-backed agreement flow.
          </figcaption>
        </figure>
      </div>

      <section>
        <h2>Business Problem</h2>

        <p>
          Digital agreements often rely on centralized systems to prove identity,
          consent, timing, and record integrity. TrustChain explored how smart
          contracts and wallet-based identity could create agreement workflows
          that are easier to verify and harder to dispute.
        </p>

        <p>
          The goal was not simply to build smart contracts, but to design a
          human-readable trust workflow where users could understand what was
          happening at each step: connecting a wallet, signing, witnessing,
          confirming, and recording an agreement.
        </p>
      </section>

      <section>
        <h2>Product Family</h2>

        <h3>Universal Wallet</h3>
        <p>
          A wallet-centered interface for identity, access, signatures,
          transaction state, and user control within the broader TrustChain
          workflow.
        </p>

        <h3>The Witness</h3>
        <p>
          A digital witnessing application designed to verify events,
          agreements, and participant actions through blockchain-backed proof.
        </p>

        <h3>The Contractual Agreement</h3>
        <p>
          A smart contract-backed agreement workflow that explored how parties
          could create, approve, and preserve digital agreements with immutable
          verification.
        </p>
      </section>

      <section>
        <h2>System Architecture</h2>

        <pre className="architecture">
{`Universal Wallet
        │
        ▼
Wallet Identity + Signature Flow
        │
        ▼
Ethers.js Integration
        │
        ▼
Solidity Smart Contracts
        │
        ▼
The Witness + Agreement Records
        │
        ▼
Ethereum Verification
        │
        ▼
Human-Readable Trust State`}
        </pre>
      </section>

      <section>
        <h2>Engineering Challenges</h2>

        <h3>Wallet UX</h3>
        <p>
          Web3 applications can become confusing quickly if users do not
          understand wallet connection, signatures, transaction prompts, and
          confirmation states. TrustChain required clear feedback around each
          blockchain interaction.
        </p>

        <h3>Transaction Lifecycle</h3>
        <p>
          The platform needed to communicate pending, confirmed, rejected, and
          failed transaction states in plain language so users were not left
          guessing what happened after signing.
        </p>

        <h3>Smart Contract Design</h3>
        <p>
          The agreement workflows required careful thinking around ownership,
          verification, agreement state, participant actions, and immutable
          record keeping.
        </p>

        <h3>Trust Without Complexity</h3>
        <p>
          The hardest design problem was making blockchain-backed trust feel
          understandable to non-technical users. The interface needed to explain
          proof, not just expose blockchain terminology.
        </p>
      </section>

      <section>
        <h2>Visual Telemetry & UX</h2>

        <p>
          TrustChain followed the same design principle I use across my
          applications: software should explain itself. In a Web3 system, that
          means showing users where they are in the trust workflow and what the
          blockchain is doing behind the scenes.
        </p>

        <ul>
          <li>Wallet connected and disconnected states</li>
          <li>Signature request feedback</li>
          <li>Pending transaction indicators</li>
          <li>Confirmed agreement states</li>
          <li>Witness verification cues</li>
          <li>Human-readable blockchain proof</li>
        </ul>
      </section>

      <section>
        <h2>Results</h2>

        <div className="results-grid">
          <div>
            <strong>Universal</strong>
            <span>Wallet Identity Workflow</span>
          </div>

          <div>
            <strong>Witness</strong>
            <span>Digital Verification System</span>
          </div>

          <div>
            <strong>Smart</strong>
            <span>Contract Agreement Flow</span>
          </div>

          <div>
            <strong>Ethereum</strong>
            <span>Blockchain Integration</span>
          </div>

          <div>
            <strong>Human</strong>
            <span>Readable Trust States</span>
          </div>

          <div>
            <strong>Web3</strong>
            <span>UX + Transaction Feedback</span>
          </div>
        </div>
      </section>

      <section>
        <h2>Lessons Learned</h2>

        <p>
          TrustChain reinforced that successful Web3 software requires more than
          working smart contracts. Users need clarity during wallet connection,
          signature approval, transaction confirmation, and agreement
          verification.
        </p>

        <p>
          The project also shaped my current engineering philosophy: whether the
          system is a data platform, SaaS dashboard, or blockchain application,
          users need software that reduces uncertainty and communicates system
          state clearly.
        </p>
      </section>

      <section>
        <h2>Future Roadmap</h2>

        <ul>
          <li>Account abstraction and improved onboarding</li>
          <li>Multi-party agreement workflows</li>
          <li>Document hash verification</li>
          <li>Multi-chain support</li>
          <li>AI-assisted agreement review</li>
          <li>Enterprise trust and audit trail features</li>
        </ul>
      </section>
    </article>
  );
}