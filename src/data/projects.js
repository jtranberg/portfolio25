import LINKS from "../config/links";
import apps from "./apps"; // ✅ adjust path if your apps.js is elsewhere
import appsToProjects from "./appsToProjects";

// Helper to resolve images from src/assets/screens
const img = (file) => new URL(`../assets/screens/${file}`, import.meta.url).href;

const portfolioProjects = [
  {
    area: "AI",
    title: "Covercraft - AI Artist Branding",
    image: img("covercraft.png"),
    summary:
      "Cover art and social visuals first, lyrics as bonus. Prompt presets, multi-path flows, auto upscaling.",
    kpis: [
      { value: 70, unit: "percent", sign: "plus", label: "faster content creation" },
      { value: 95, unit: "percent", sign: "minus", label: "lower outsource cost" },
    ],
    tags: ["Next.js", "Node", "AI pipeline"],
    links: [],
    details: {
      problem: "Indie artists need fast, consistent visuals without agency budgets.",
      action:
        "Built a multi-path AI pipeline with cover, portrait, banner, and story presets plus upscaling.",
      result:
        "Reduced turnaround from days to minutes while improving consistency across formats.",
    },
  },

  {
    area: "SaaS",
    title: "The In and Out App",
    image: img("theinandoutapp.png"),
    summary:
      "Multi-tenant asset and logistics tracker with auth, roles, histories, and dashboards.",
    kpis: [
      { value: 90, unit: "percent", sign: "minus", label: "item loss" },
      { value: 5, unit: "hours", sign: "minus", label: "admin work weekly", range: "5–10" },
    ],
    tags: ["Node", "MongoDB", "SaaS", "JWT"],
    links: [{ href: LINKS.inAndOut, label: "Visit" }],
    details: {
      problem: "Items were repeatedly lost across busy teams with no visibility.",
      action: "Built a multi-tenant SaaS with role-based tracking and histories.",
      result: "Lowered losses and cut recurring admin time each week.",
    },
  },

  {
    area: "AI",
    title: "ProProBets.com",
    image: img("proprobets.png"),
    summary:
      "Prediction model with live odds and stats; automated ingestion and dashboard.",
    kpis: [
      { value: 85, unit: "percent", sign: null, label: "model accuracy" },
      { value: 90, unit: "percent", sign: "minus", label: "manual comparison" },
    ],
    tags: ["React", "Vite", "Modeling"],
    links: [],
    details: {
      problem: "Manual stat comparison wasted time and introduced errors.",
      action: "Automated pipelines and built a fast dashboard.",
      result: "Faster decisions with consistent accuracy.",
    },
  },

  {
    area: "AI",
    title: "Historically Accurate",
    image: img("historicallyaccurate.png"),
    summary: "Era-true image generation with presets and auto upscaling.",
    kpis: [
      { value: 2, unit: "x", sign: "plus", label: "realism with upscaling" },
      { value: 80, unit: "percent", sign: "minus", label: "research time" },
    ],
    tags: ["FAL API", "Node", "AI"],
    links: [],
    details: {
      problem: "Creating era-correct visuals is slow and research heavy.",
      action: "Added era presets and strict constraints with an upscaling pipeline.",
      result: "High-quality results in minutes with reliable period accuracy.",
    },
  },

  {
    area: "AI",
    title: "Dr. Epidermis",
    image: img("dr.epidermis.png"),
    summary:
      "Two-stage TensorFlow pipeline and Python microservice; geolocation doctor and clinic suggestions.",
    kpis: [
      { value: 40, unit: "percent", sign: "minus", label: "misclassification risk" },
      { value: 1, unit: "second", sign: "sub", label: "inference" },
    ],
    tags: ["Express", "Python", "TensorFlow"],
    links: [],
    details: {
      problem: "Single-model outputs were noisy and risky for triage.",
      action:
        "Built a triage model (3-class) routing to an 8-class deep model with consistent preprocessing.",
      result:
        "Higher reliability and faster decisions with real-world UX enhancements.",
    },
  },

  {
    area: "SaaS",
    title: "The Technician",
    image: img("technician.png"),
    summary: "Gamified CRM for automotive shops with multi-role workflow.",
    kpis: [
      { value: 40, unit: "percent", sign: "plus", label: "engagement lift" },
      { value: 30, unit: "percent", sign: "minus", label: "advisor workload" },
    ],
    tags: ["React", "Node", "SaaS"],
    links: [],
    details: {
      problem: "Low engagement and heavy manual status work.",
      action: "Introduced XP, badges, automated messaging and parts flows.",
      result: "Happier teams and faster service communication.",
    },
  },

  {
    area: "Mobile",
    title: "Soundscapes and Chill",
    image: img("soundscapes.png"),
    summary:
      "Multi-track ambient engine with adjustable layers and seamless loops.",
    kpis: [
      { value: 300, unit: "percent", sign: "plus", label: "session length" },
      { value: 30, unit: "percent", sign: "minus", label: "battery usage" },
    ],
    tags: ["Expo", "React Native", "Audio"],
    links: [{ href: LINKS.soundscapes, label: "Google Play" }],
    details: {
      problem: "Static audio apps do not retain users or fit personal preferences.",
      action: "Built a layered engine with preloaded buffers and persistent settings.",
      result: "Longer sessions, smoother loops, and stable mobile performance.",
    },
  },

  {
    area: "IoT",
    title: "Project Snowman",
    image: img("snowman.png"),
    summary: "ESP32-S3 telemetry, NTP sync, secure reporting, custom HV modules.",
    kpis: [
      { value: 80, unit: "percent", sign: "minus", label: "diagnostic time" },
      { value: 50, unit: "percent", sign: "plus", label: "HV stability after PCB revisions" },
    ],
    tags: ["ESP32-S3", "IoT", "Sensors", "Python"],
    links: [],
    details: {
      problem: "Diagnostics and reliability issues in field conditions.",
      action:
        "Automated telemetry, NVS Wi-Fi, BLE provisioning, redesigned HV hardware.",
      result: "Faster troubleshooting and higher stability toward TRL-6.",
    },
  },

  {
    area: "Mobile",
    title: "Travel Checklist Plus",
    image: img("checklist.png"),
    summary: "Rapid-build app created in 60 minutes, then polished.",
    kpis: [
      { value: 50, unit: "percent", sign: "minus", label: "prep time" },
      { value: 40, unit: "percent", sign: "plus", label: "completion rate" },
    ],
    tags: ["React", "Vite"],
    links: [],
    details: {
      problem: "Travel prep chaos and forgotten items.",
      action: "Built persistent, simple lists with mobile-first UX.",
      result: "Fewer misses and faster pack times.",
    },
  },

  {
    area: "Web3",
    title: "ERC-4337 Smart Wallet",
    image: img("web3wallet.png"),
    summary:
      "Custom EntryPoint and modular validation; Ethers.js front end on Sepolia.",
    kpis: [
      { value: null, unit: null, sign: null, label: "Gas-aware contract patterns, clean UserOperation flows" },
    ],
    tags: ["Solidity", "Ethers.js", "Web3"],
    links: [],
    details: {
      problem: "Complicated onboarding and brittle wallet flows.",
      action: "Built modular validation and a clean testing pipeline on Sepolia.",
      result: "Faster dapp testing and better UX for user operations.",
    },
  },
];

// ✅ convert App Intelligence catalog → portfolio format
const appIntelligenceProjects = appsToProjects(apps);

// ✅ de-dupe by title (prevents doubles like ProProBets)
const merged = (() => {
  const seen = new Set(portfolioProjects.map((p) => p.title.trim().toLowerCase()));
  return [
    ...portfolioProjects,
    ...appIntelligenceProjects.filter((p) => {
      const key = p.title.trim().toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }),
  ];
})();

export default merged;
