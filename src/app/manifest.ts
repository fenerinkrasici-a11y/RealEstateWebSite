import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Karadeniz İnşaat",
    short_name: "Karadeniz İnşaat",
    description:
      "Sağlam Yapılar. Standartları Belirliyoruz. İstanbul da uzman inşaat hizmetleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#1e1e1e",
    theme_color: "#8e6d45",
    icons: [
      {
        src: "/images/logos/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logos/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
