import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { areas } from "@/config/areas";
import { blogPosts } from "@/config/blog";

function buildUrl(path: string): string {
  const base = siteConfig.url.replace(/\/+$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: buildUrl("/"), lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: buildUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: buildUrl("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: buildUrl("/areas"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: buildUrl("/gallery"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: buildUrl("/videos"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: buildUrl("/testimonials"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: buildUrl("/faq"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: buildUrl("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: buildUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: buildUrl("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: buildUrl("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: buildUrl(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const areaRoutes: MetadataRoute.Sitemap = areas.map((a) => ({
    url: buildUrl(`/areas/${a.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: buildUrl(`/blog/${p.slug}`),
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes];
}