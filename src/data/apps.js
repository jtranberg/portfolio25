// data/apps.js
const apps = [
  // Healthcare & Diagnostics
  {
    id: "dr-epidermis",
    title: "Dr. Epidermis",
    category: "Healthcare & Diagnostics",
    tags: ["AI", "TensorFlow", "Microservices"],
    description:
      "AI skin diagnosis (triage + 8-class), treatment guidance, and geolocated clinic/doctor suggestions.",
    emphasis: "Microservices prediction backend with dynamic model loading.",
    kpis: [
      { value: "3+8 cls", label: "Triage + Specialist" },
      { value: "80.2%", label: "Val. Accuracy (8-cls)" },
      { value: "Top-3", label: "Prediction Breakdown" },
    ],
    linkUrl: "https://drepidermis.com/",
    linkText: "",
    image: "/dr-epidermis.png",
    featured: false,
  },

  // Creative & Media
  // {
  //   id: "covercraft",
  //   title: "Covercraft",
  //   category: "Creative & Media",
  //   tags: ["Music", "AI", "Next.js"],
  //   description:
  //     "AI music studio: lyrics, rhyme prediction, album-art upscaling, and sheet-music transcription.",
  //   kpis: [
  //     { value: "Lyrics+Predict", label: "Dual Modes" },
  //     { value: "FAL+DeepAI", label: "Image/Upscale" },
  //     { value: "T2V", label: "Task Pipeline" },
  //   ],
  //   // linkUrl: "https://covercraftspa.netlify.app/",
  //   image: "/covercraft.png",
  // },

  {
    id: "soundscapes-chill",
    title: "Soundscapes & Chill",
    category: "Creative & Media",
    tags: ["Mobile", "React Native"],
    description: "Relaxation & focus app.",
    kpis: [
      { value: "Live", label: "Google Play" },
      { value: "RN/Expo", label: "Stack" },
    ],
    linkUrl:
      "https://play.google.com/store/apps/details?id=com.jaytranberg.soundscapeschill",
    linkText: "Get it on Google Play",
    image: "/soundscapes.png",
  },

  {
    id: "historically-accurate",
    title: "Historically Accurate",
    category: "Creative & Media",
    tags: ["Images", "GenAI"],
    description:
      "Photoreal historical imagery with advanced prompting and post-processing (FAL AI).",
    kpis: [
      { value: "FAL", label: "Gen Engine" },
      { value: "Auto", label: "Upscale Pass" },
    ],
    linkUrl: "https://historically-accurate.netlify.app/",
    image: "/historically-accurate.png",
  },

  {
    id: "tour-de-force",
    title: "Tour de Force (JamBand)",
    category: "Creative & Media",
    tags: ["Realtime", "Media"],
    description:
      "Realtime collab & streaming for live performance; Web3 ticketing/collectibles planned. Ongoing project to be reased in 2026",
    kpis: [
      { value: "RTC", label: "Collab" },
      { value: "Web3", label: "Tickets (Planned)" },
    ],
    linkUrl: "https://jam-band.netlify.app/",
    image: "/tour-de-force.png",
  },

  {
    id: "the-interviewer",
    title: "The Interviewer",
    category: "Creative & Media",
    tags: ["AI", "Hiring"],
    description:
      "Scripted AI interviewer that runs consistent, bias-aware hiring flows.",
    kpis: [
      { value: "Scripted", label: "Sequence" },
      { value: "Bias-Guard", label: "Controls" },
    ],
    image: "/the-interviewer.png",
  },

  {
  id: "the-real-mystery",
  title: "The Real Mystery",
  category: "Media & Community",
  tags: ["Poll Share", "Interactive", "Web"],
  description:
    "Interactive Canadian poll-share mixer built for clean on-screen visuals and real discussion.",
  kpis: [
    { value: "Live", label: "Deployed" },
    { value: "100%", label: "Hard-Constrained" },
  ],
   linkUrl:
      "https://www.therealmystery.net/",
  image: "/the-real-mystery.png",
},
// {
//   id: "app-intelligence-site",
//   title: "App Intelligence Website",
//   category: "Brand & Web",
//   tags: ["Landing", "Portfolio", "Conversion"],
//   description:
//     "Agency-style site for showcasing products, capabilities, and inbound leads for custom builds.",
//   kpis: [
//     { value: "React", label: "Frontend" },
//     { value: "Netlify", label: "Hosting" },
//   ],
//   image: "/app-intelligence.png",
// },
{
  id: "contact-hub",
  title: "Contact Hub",
  category: "Brand & Web",
  tags: ["Contact", "Leads", "Forms"],
  description:
    "Clean contact experience with inquiry routing, validation, and a simple lead capture flow.",
  kpis: [
    { value: "Forms", label: "Lead Capture" },
    { value: "Clean", label: "UX" },
  ],
  linkUrl: "https://mailroom-portal.netlify.app/",
  image: "/contact-hub.png",
},



  // SaaS & Productivity
  {
    id: "color-mixer-pro",
    title: "Color Mixer Pro",
    category: "SaaS & Productivity",
    tags: ["SaaS", "Stripe", "Design"],
    description:
      "AI palette SaaS with Stripe subscriptions, exportable branding kits, and team sharing. Launching as a SaaS in 2026",
    kpis: [
      { value: "Live", label: "Status" },
      { value: "Stripe", label: "Billing" },
    ],
    image: "/color-mixer-pro.png",
  },
  {
  id: "blockchain-voting-dapp",
  title: "Blockchain Voting DApp",
  category: "Web3 & Blockchain",
  tags: ["Voting", "Smart Contracts", "DApp"],
  description:
    "A decentralized voting application demonstrating how blockchain can be used to record votes transparently and immutably.",
  emphasis:
    "Built as an educational and technical exploration of trust, verification, and on-chain state — not a production election system.",
  kpis: [
    { value: "On-Chain", label: "Votes" },
    { value: "Immutable", label: "Records" },
    { value: "Live", label: "Demo" },
  ],
  linkUrl: "https://voting-dapp.netlify.app/",
  linkText: "",
  image: "/voting-dapp.png",
},

  {
  id: "frontend-contract",
  title: "Frontend Contract",
  category: "Web3 & Blockchain",
  tags: ["Smart Contracts", "Web3", "Frontend"],
  description:
    "A frontend interface for interacting with smart contracts, focusing on clarity, safety, and predictable user flows.",
  emphasis:
    "Designed to make contract interactions understandable and reduce user error at the UI layer.",
  kpis: [
    { value: "Web3", label: "Integration" },
    { value: "UI", label: "Safety Focus" },
    { value: "Live", label: "Deployed" },
  ],
  linkUrl: "https://frontend-contract.netlify.app/",
  linkText: "",
  image: "/front-end-contract.png",
},

  {
    id: "technician",
    title: "Technician",
    category: "SaaS & Productivity",
    tags: ["SaaS", "Dashboards", "Workflows"],
    description:
      "Gamified client-retention platform for automotive service businesses: role-based dashboards for techs, advisors, admins, and customers.",
    emphasis:
      "Designed to reduce friction, improve follow-through, and make service workflows measurable.",
    kpis: [
      { value: "4 Roles", label: "Dashboards" },
      { value: "QR", label: "Fast Check-In" },
      { value: "Metrics", label: "Retention Signals" },
    ],
    // linkUrl: "https://the-technician.netlify.app/",
    linkText: "",
    image: "/technician.png",
    featured: false,
  },
  {
  id: "the-11-minute-ticket",
  title: "The 11-Minute Ticket",
  category: "Youtube App Connector",
  tags: ["Cooking", "Content", "Timers"],
  description:
    "A fast, no-nonsense cooking site built around the idea that great food doesn’t need to take all night — clear steps, smart timers, and real meals.",
  emphasis:
    "Designed for busy people who want reliable results without overthinking recipes.",
  kpis: [
    { value: "Fast", label: "Workflow" },
    { value: "Timers", label: "Built-In" },
    { value: "Mobile", label: "First" },
  ],
  linkUrl: "https://the11minuteticket.com/",
  linkText: "",
  image: "/the-11-minute-ticket.png",
  featured: false,
},
{
  id: "bank-pdf-magic",
  title: "Bank PDF Magic",
  category: "Finance & Automation",
  tags: ["PDF Parsing", "Excel", "Budgeting"],
  description:
    "Upload bank statement PDFs/CSVs and instantly get a zipped budget bundle: cleaned transactions, monthly summaries, and a chart-ready Excel report.",
  emphasis:
    "Turns messy statements into usable data in one click — built for fast budgeting, audits, and sanity.",
  kpis: [
    { value: "ZIP", label: "Bundle Export" },
    { value: "Excel", label: "Charts + Sheets" },
    { value: "PDF+CSV", label: "Inputs" },
  ],
  linkUrl: "https://bank-pdf-magic.netlify.app/",
  linkText: "",
  image: "/pdf.svg",
  featured: false,
},


  {
    id: "vidocq",
    title: "Vidocq",
    category: "SaaS & Productivity",
    tags: ["Failure Analysis", "AI", "Testing", "Systems"],
    description:
      "Failure-first analysis platform for testing software, APIs, and AI systems by intentionally provoking edge cases, timing faults, and misuse.",
    emphasis:
      "Designed to surface failure modes before users do — stress, break, investigate, learn.",
    kpis: [
      { value: "Fail-First", label: "Methodology" },
      { value: "Edge-Cases", label: "Focus" },
      { value: "Signals", label: "Diagnostics" },
    ],
    linkUrl: "",
    linkText: "",
    image: "/vidocq.png",
    featured: false,
  },

 

  {
    id: "travel-checklist-plus",
    title: "Travel Checklist Plus",
    category: "SaaS & Productivity",
    tags: ["PWA", "Mobile"],
    description:
      "Smart packing lists, reminders, and offline-first storage — Google Play closed testing.",
    kpis: [
      { value: "Closed", label: "Play Testing" },
      { value: "Offline", label: "Storage" },
    ],
    linkUrl:"https://mobile-travel-list.netlify.app/",
    image: "/travel-checklist.png",
  },
  {
  id: "safe-spaces",
  title: "Safe Spaces",
  category: "Public Safety & Travel",
  tags: ["Safety", "Travel", "Community"],
  description:
    "A community-focused web app to help travelers identify safer areas while traveling — designed with women in mind, but useful for anyone navigating unfamiliar places.",
  kpis: [
    { value: "Community", label: "Driven" },
    { value: "Live", label: "Deployed" },
  ],
  linkUrl: "https://my-safe-places.netlify.app/",
  image: "/safe-places.png",
  featured: false,
},


  //   {
  //     id: "wall-st-portal",
  //     title: "Wall ST. Portal",
  //     category: "SaaS & Productivity",
  //     tags: ["SaaS", "Docs", "Microservices"],
  //     description: "Property management suite: tenant portals, secure document center, mailroom, admin dashboards.",
  //     kpis: [
  //       { value: "Multi-App", label: "Suite" },
  //       { value: "Docs", label: "Center" },
  //     ],
  //     image: "/wall-st.png",
  //   },

  {
    id: "tenant-portal",
    title: "Tenant Portal",
    category: "SaaS & Productivity",
    tags: ["Docs", "Web"],
    description:
      "Share paperwork and communications with tenants (integrates with Wall ST. Portal).",
    kpis: [
      { value: "Linked", label: "Wall ST." },
      { value: "Secure", label: "Exchange" },
    ],
    linkUrl: "https://document-portal.netlify.app/",
    image: "/tenant-portal.png",
  },

  {
    id: "agent-screenshot",
    title: "Agent Screen Shot",
    category: "SaaS & Productivity",
    tags: ["Automation", "Web"],
    description:
      "Screenshot → template builder for content and ads; repeatable capture and layouts.",
    kpis: [
      { value: "Templated", label: "Outputs" },
      { value: "Repeatable", label: "Flows" },
    ],
    linkUrl: "https://agent-screenshot.netlify.app/",
    image: "/screen-grabber.png",
    featured: false,
  },

  // Civic & Public Interest Tools
  {
    id: "poll-share",
    title: "Poll-Share",
    category: "Civic & Public Interest Tools",
    tags: ["Data Viz", "Web", "Interactive"],
    description:
      "Broadcast-friendly poll share mixer: interactive sliders constrained to 100%, designed for clean on-screen use and fast discussion.",
    emphasis: "Built and shipped same-day.",
    kpis: [
      { value: "100%", label: "Hard Constraint" },
      { value: "Mobile", label: "First UI" },
      { value: "Live", label: "Netlify Deploy" },
    ],
    linkUrl: "https://the-national-telegraph-poll-share.netlify.app/",
    linkText: "View Poll-Share Live",
    image: "/poll-share.png",
    featured: false,
  },

  // Web3 & Blockchain
  {
    id: "erc4337-smart-wallet",
    title: "ERC-4337 Smart Wallet",
    category: "Web3 & Blockchain",
    tags: ["ERC-4337", "Solidity", "Ethers.js"],
    description:
      "Custom EntryPoint, modular validation, account abstraction (Sepolia).",
    kpis: [
      { value: "Sepolia", label: "Network" },
      { value: "Custom", label: "EntryPoint" },
    ],
    image: "/erc4337.png",
    featured: false,
  },

  {
    id: "universal-wallet",
    title: "Universal Wallet",
    category: "Web3 & Blockchain",
    tags: ["Wallet", "React", "Solidity"],
    description:
      "ERC-20/721 compatible wallet; account abstraction; React dApp UI.",
    kpis: [
      { value: "AA", label: "Flow" },
      { value: "ERC-20/721", label: "Tokens" },
    ],
    linkUrl: "https://universal-wallet.netlify.app/",
    image: "/universal-wallet.png",
    featured: false,
  },
  {
  id: "proprobets",
  title: "ProProBets",
  category: "Data & Analytics",
  tags: ["Sports", "Stats", "Predictions"],
  description:
    "A live sports analytics dashboard that aggregates stats and betting data to explore trends, probabilities, and matchup insights.",
  emphasis:
    "Focused on transparency and signal-over-noise — showing how data informs outcomes rather than selling guarantees.",
  kpis: [
    { value: "Live", label: "Dashboard" },
    { value: "Stats", label: "Driven" },
    { value: "Models", label: "In Progress" },
  ],
  linkUrl: "https://proprobets.netlify.app/",
  linkText: "",
  image: "/proprobets.png",
  featured: false,
},


  // Experimental & Explorations
  {
    id: "project-snowman",
    title: "Project Snowman",
    category: "Experimental & Explorations",
    tags: ["IoT", "Python", "Env"],
    description:
      "IoT + predictive Python models + live telemetry and environmental impact logging.",
    kpis: [
      { value: "TRL-5→6", label: "Stage" },
      { value: "ESP32-S3", label: "Board" },
      { value: "x5", label: "DS18B20 Sensors" },
    ],
    linkUrl: "https://snowman-app.netlify.app/",
    
    image: "/project-snowman.png",
    featured: false,
  },
  {
  id: "resume-hub",
  title: "Resume Hub (ComeWorkForMe)",
  category: "Brand & Web",
  tags: ["Recruiting", "Portfolio", "UX"],
  description:
    "A clean hiring-ready hub that centralizes resumes, role-specific versions, and key links — built to make reviewing and sharing fast.",
  emphasis:
    "Designed to reduce friction for recruiters and keep everything accessible from one professional landing page.",
  kpis: [
    { value: "Centralized", label: "Resumes" },
    { value: "Fast", label: "Sharing" },
    { value: "Live", label: "Deployed" },
  ],
  linkUrl: "https://www.comeworkforme.com/",
  linkText: "",
  image: "/cm4m.png",
  featured: false,
},
{
  id: "capitals-fundraising",
  title: "Capitals Fundraising",
  category: "Brand & Web",
  tags: ["Fundraising", "Ads", "Community"],
  description:
    "A club-focused advertising and donation portal to help supporters contribute and engage with campaigns.",
  emphasis:
    "Designed to streamline contributions and communicate campaign value clearly to supporters.",
  kpis: [
    { value: "Campaigns", label: "Engaged" },
    { value: "Donations", label: "Collected" },
    { value: "Live", label: "Deployed" },
  ],
  linkUrl: "https://capitals-fund-raising.netlify.app/",
  linkText: "",
  image: "/fundraising.png",
  featured: false,
},
{
  id: "jay-tranberg-portfolio",
  title: "Jay Tranberg Portfolio",
  category: "Brand & Web",
  tags: ["Portfolio", "Showcase", "Personal"],
  description:
    "A centralized portfolio and personal hub showcasing projects, philosophy, and professional story.",
  emphasis:
    "Built to highlight work across domains — from SaaS and Web3 to experimental tools and creative apps.",
  kpis: [
    { value: "React", label: "Frontend" },
    { value: "Netlify", label: "Hosting" },
    { value: "All Projects", label: "Showcase" },
  ],
  linkUrl: "https://jay-tranberg-portfolio-25.netlify.app/",
  linkText: "",
  image: "/portfolio.png",
  featured: false,
},

{
  id: "jaytranberg-com",
  title: "JayTranberg.com",
  category: "Brand & Web",
  tags: ["Personal Brand", "Hub", "Showcase"],
  description:
    "Primary personal domain and professional hub — a single place to discover projects, writing, and contact pathways.",
  emphasis:
    "Built as the home base for everything I ship: products, experiments, and client-ready demos.",
  kpis: [
    { value: "Primary", label: "Domain" },
    { value: "Hub", label: "Navigation" },
    { value: "Live", label: "Deployed" },
  ],
  linkUrl: "https://www.jaytranberg.com/",
  linkText: "",
  image: "/founder.png",
  featured: false,
},
{
  id: "tranberg-innovations",
  title: "Tranberg Innovations",
  category: "Brand & Web",
  tags: ["CleanTech", "IoT", "Innovation"],
  description:
    "The parent innovation studio behind Project Snowman and applied clean-tech, IoT, and systems-focused software initiatives.",
  emphasis:
    "Focused on building practical, retrofit-friendly technologies and real-world systems that survive outside the lab.",
  kpis: [
    { value: "CleanTech", label: "Focus" },
    { value: "IoT", label: "Systems" },
    { value: "Live", label: "Company Site" },
  ],
  linkUrl: "https://www.tranberginnovations.com/",
  linkText: "",
  image: "/tranberg-innovations.png",
  featured: false,
},
{
  id: "ticket-creator-angular",
  title: "Ticket CreatorAngular",
  category: "Comparative",
  tags: ["Angular", "RxJS", "Signals", "Standalone"],
  description:
    "Angular-based internal ticket tracker built to mirror the React version, focusing on framework fundamentals, state management, and routing.",
  emphasis:
    "Rebuilt intentionally in Angular to contrast architectural patterns with React — standalone components, signals, and RxJS store.",
  kpis: [
    { value: "Angular", label: "Framework" },
    { value: "Signals", label: "State" },
    { value: "RxJS", label: "Data Flow" },
  ],
  linkUrl: "https://angular-ticket-creator.netlify.app/",
  image: "/ticket-creator-angular-screenshot.png",
  featured: false,
},

{
  id: "ticket-creator-react",
  title: "Ticket Creator React",
  category: "Comparative",
  tags: ["Internal Tools", "Workflows", "Tracking", "React"],
  description:
    "Internal project ticketing system designed to track work progress, approvals, data handling, and sign-offs across complex builds.",
  emphasis:
    "Built to create accountability, auditability, and clear handoffs throughout a project lifecycle.",
  kpis: [
    { value: "Sign-Offs", label: "Tracked" },
    { value: "Data", label: "Handling Logs" },
    { value: "React", label: "Web App" },
  ],
  linkUrl: "https://the-ticket-creator.netlify.app/",
  image: "/ticket-creator.png",
  featured: false,
},
{
  id: "ticket-creator-vue",
  title: "Ticket Creator vue",
  category: "Comparative",
  tags: ["Internal Tools", "Workflows", "Tracking", "React"],
  description:
    "Internal project ticketing system designed to track work progress, approvals, data handling, and sign-offs across complex builds.",
  emphasis:
    "Built to create accountability, auditability, and clear handoffs throughout a project lifecycle.",
  kpis: [
    { value: "Sign-Offs", label: "Tracked" },
    { value: "Data", label: "Handling Logs" },
    { value: "React", label: "Web App" },
  ],
  linkUrl: "https://ticket-creator-vue.netlify.app/",
  image: "/ticket-creator-vue.png",
  featured: false,
}, 
{
    id: "in-and-out-app",
    title: "The In and Out App",
    category: "SaaS & Productivity",
    tags: ["SaaS", "Node", "MongoDB"],
    description: "Asset & logistics tracker for teams.",
    kpis: [
      { value: "JWT", label: "Auth" },
      { value: "QR", label: "Check-In/Out" },
    ],
    linkUrl: "https://theinandoutapp.com/",
    linkText: "Available as a SaaS",
    image: "/in-and-out.png",
    featured: false,
  },
{
  id: "contractor's-little-black-book",
  title: "Contractor's littl Black Book",
  category: "SaaS & Productivity",
  tags: ["Contractors", "Mobile", "Field Tools", "Expo"],
  description:
    "Mobile reference app helping contractors navigate difficult client situations, boundaries, and real-world job risks across any trade.",
  emphasis:
    "Built from lived field experience to support clearer decisions, safer work, and better outcomes on difficult jobs.",
  kpis: [
    { value: "Expo", label: "React Native" },
    { value: "Field", label: "Focused" },
    { value: "Cross-Trade", label: "Use" },
  ],
  linkUrl: "https://contractorslittleblackbook.com",
  image: "/contractors-little-black-book.png",
  featured: false,
},
{
  id: "rift-arena",
  title: "Rift Arena",
  category: "Gaming",
  tags: ["Phaser", "Arcade", "Web"],
  description:
    "Fast top-down arena shooter with dashing, portals, escalating rounds, and a boss fight loop.",
  kpis: [
    { value: "Phaser 3", label: "Engine" },
    { value: "Rounds", label: "+Drag/+Speed" },
    { value: "Boss", label: "Attack Patterns" },
  ],
  linkUrl: "https://rift-arena.netlify.app/",
  linkText: "Play",
  image: "/rift-arena.png",
},
{
  id: "dodge-bomb",
  title: "Dodge Bomb",
  category: "Gaming",
  tags: ["Phaser", "Arcade", "Physics"],
  description:
    "Fast-paced platform dodger built in Phaser 3. Jump between platforms, avoid rolling bombs, and survive escalating difficulty every 10 clears.",
  kpis: [
    { value: "Phaser 3", label: "Game Engine" },
    { value: "Physics", label: "Rolling Bombs" },
    { value: "Endless", label: "Scaling Difficulty" },
  ],
  linkUrl: "https://dodge-bomb.netlify.app/",
  linkText: "Play Game",
  image: "/dodge-bomb.png",
},

{
  id: "blaasteroids",
  title: "Blaasteroids",
  category: "Gaming",
  tags: ["Phaser 3", "Arcade", "Asteroids", "PC & Mobile"],
  description:
    "Fast, physics-based space shooter playable on desktop and mobile. Features drifting controls, asteroid splitting, debris effects, and escalating difficulty — inspired by classic Asteroids with modern polish and particle effects.",
  kpis: [
    { value: "PC & Mobile", label: "Cross-Platform Play" },
    { value: "Asteroid Split", label: "Dynamic Fragments" },
    { value: "Particles", label: "Debris FX" },
    { value: "Smooth Drift", label: "Ship Inertia" },
  ],
  linkUrl: "https://blasteroids.netlify.app/",
  linkText: "Play Game",
  image: "/blaasteroids.png",
}






];




const sorted = apps
  .slice()
  .sort((a, b) => {
    // 1️⃣ Featured first
    if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;

    // 2️⃣ Category A–Z
    const catCompare = (a.category || "").localeCompare(b.category || "");
    if (catCompare !== 0) return catCompare;

    // 3️⃣ Title A–Z
    return (a.title || "").localeCompare(b.title || "");
  });

export default sorted;
