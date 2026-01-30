import LINKS from "../config/links";

// if you already have img() in your portfolio projects file, import it here or recreate it:
// Example:
const img = (name) => `/img/${name}`; // <-- change to your real image path logic

const CATEGORY_TO_AREA = (category = "") => {
  const c = category.toLowerCase();

  if (c.includes("health")) return "AI";
  if (c.includes("diagnostics")) return "AI";
  if (c.includes("creative")) return "AI";
  if (c.includes("media")) return "AI";
  if (c.includes("saas")) return "SaaS";
  if (c.includes("productivity")) return "SaaS";
  if (c.includes("web3")) return "Web3";
  if (c.includes("blockchain")) return "Web3";
  if (c.includes("experimental")) return "IoT";
  if (c.includes("explorations")) return "IoT";
  if (c.includes("gaming")) return "Web";
  if (c.includes("brand")) return "Web";
  if (c.includes("finance")) return "AI";
  if (c.includes("data")) return "AI";

  return "Web";
};

const normalizeKpis = (kpis = []) =>
  kpis.map((k) => ({
    value: k.value,
    label: k.label,
  }));

export default function appsToProjects(apps = []) {
  return apps.map((a) => ({
    area: CATEGORY_TO_AREA(a.category),
    title: a.title,
    image: a.image?.startsWith("/") ? a.image : img(a.image || "placeholder.png"),
    summary: a.description || "",
    kpis: normalizeKpis(a.kpis),

    // NOTE: your portfolio uses tags like ["Next.js","Node","AI pipeline"]
    tags: a.tags || [],

    // links in portfolio look like [{ href, label }]
    links: a.linkUrl ? [{ href: a.linkUrl, label: a.linkText || "Visit" }] : [],

    // portfolio has details: { problem, action, result }
    // apps.js doesn’t have those, so we map “emphasis” into “action”
    details: {
      problem: a.description || "—",
      action: a.emphasis || "Built and shipped as part of an ongoing product portfolio.",
      result: a.kpis?.length ? `Delivered measurable outcomes across ${a.kpis.length} tracked KPIs.` : "Shipped and deployed.",
    },

    // optional: keep id if your ProjectCard uses it
    id: a.id,
    source: "app-intelligence",
    featured: !!a.featured,
  }));
}
