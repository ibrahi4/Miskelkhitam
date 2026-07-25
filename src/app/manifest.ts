import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#F8FCFF",
    theme_color: "#0EA5E9",
    lang: "ar",
    dir: "rtl",
    orientation: "portrait",
    categories: ["business", "moving", "services"],
    icons: [
      {
        src: "/icon0.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon1.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}