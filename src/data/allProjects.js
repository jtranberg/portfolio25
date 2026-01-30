import projects from "./projects";
import apps from "./apps";

// small helper to make safe ids
const slug = (v) =>
  String(v || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const normalize = (p, source) => {
  const baseId = p.id ? slug(p.id) : slug(p.title);

  return {
    // ✅ GUARANTEED UNIQUE
    id: `${source}:${baseId}`,

    // 🟦 FILTERING KEY (what pills use)
    category: String(p.category || p.area || "Other").trim(),

    // 🟩 CARD BADGE LABEL
    area: String(p.area || p.category || "Other").trim(),

    // display
    title: p.title,
    summary: p.summary || p.description || "",

    // media
    image: p.image,

    // links
    links:
      p.links?.length
        ? p.links
        : p.linkUrl
        ? [{ href: p.linkUrl, label: p.linkText || "Visit" }]
        : [],

    tags: p.tags || [],
    kpis: p.kpis || [],
    details: p.details || null,
  };
};

const allProjects = [
  ...projects.map((p) => normalize(p, "projects")),
  ...apps.map((p) => normalize(p, "apps")),
];

export default allProjects;
