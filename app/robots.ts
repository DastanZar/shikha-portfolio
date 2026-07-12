import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://shikhasoni.in/sitemap.xml",
    host: "https://shikhasoni.in",
  };
}