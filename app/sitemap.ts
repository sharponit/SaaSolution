import type { MetadataRoute } from "next";
import { absoluteUrl, products, regions, seoLanguages, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/mission-vision",
    "/partners",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/dpa",
    "/security",
    "/blog",
    "/help-center",
    ...seoLanguages.map((locale) => `/${locale}`),
    ...products.map((product) => `/products/${product.slug}`),
    ...regions.map((region) => `/regions/${region.slug}`),
    ...services.map((service) => `/services/${service.slug}`)
  ];

  return staticRoutes.map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: new Date("2026-05-23"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/regions") || route.startsWith("/services") ? 0.85 : 0.7
  }));
}
