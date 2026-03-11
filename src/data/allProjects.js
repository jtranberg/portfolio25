import projects from "./projects";

const slug = (v) =>
  String(v || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const normalize = (p, source) => {
  const baseId = p.id ? slug(p.id) : slug(p.title);

  return {
    id: `${source}:${baseId}`,
    category: String(p.category || p.area || "Other").trim(),
    area: String(p.area || p.category || "Other").trim(),
    title: p.title,
    summary: p.summary || p.description || "",
    image: p.image,
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

const allProjects = projects.map((p) => normalize(p, "projects"));

export default allProjects;