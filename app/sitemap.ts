import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/caseStudies";
import { getSiteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: "monthly", priority: 1 },
  ];

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${base}/case-studies/${study.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...caseStudyPages];
}
