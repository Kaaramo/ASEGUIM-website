import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/aseguim";

const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/qui-sommes-nous", priority: 0.8 },
  { path: "/bureau-executif", priority: 0.7 },
  { path: "/conseil-consultatif", priority: 0.7 },
  { path: "/commission-scientifique", priority: 0.7 },
  { path: "/nos-domaines", priority: 0.7 },
  { path: "/ressources/guide-etudiant-boursier", priority: 0.9 },
  { path: "/aseguim-2040", priority: 0.9 },
  { path: "/talents", priority: 0.6 },
  { path: "/adhesion", priority: 0.8 },
  { path: "/don", priority: 0.6 },
  { path: "/devenir-partenaire", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/legal/privacy-policy", priority: 0.2 },
  { path: "/legal/terms-and-conditions", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
