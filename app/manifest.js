import { business } from "@/lib/business";

export default function manifest() {
  return {
    name: business.name,
    short_name: "EF Girona",
    description: business.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fbf9f4",
    theme_color: "#0b2027",
    lang: "es",
    dir: "ltr",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
