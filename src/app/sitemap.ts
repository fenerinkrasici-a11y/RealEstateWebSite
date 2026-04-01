import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://karadenizinsaatvegayrimenkul.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/hakkimizda`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/hizmetlerimiz`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/iletisim`, lastModified: new Date(), priority: 0.8 },
  ];

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projeler/${project.slug}`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
