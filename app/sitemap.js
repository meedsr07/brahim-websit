import { absoluteUrl, siteUrl } from "@/lib/business";

const routes = [
  {
    path: "/",
    changeFrequency: "monthly",
    priority: 1,
    images: ["/images/hero-electricidad.webp", "/images/hero-fontaneria.webp"],
  },
  {
    path: "/electricidad",
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/images/electricidad-cableado.webp"],
  },
  {
    path: "/fontaneria",
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/images/fontaneria-bano.webp"],
  },
  {
    path: "/contacto",
    changeFrequency: "yearly",
    priority: 0.7,
    images: [],
  },
];

export default function sitemap() {
  if (!siteUrl) return [];

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.images.length
      ? { images: route.images.map((image) => absoluteUrl(image)) }
      : {}),
  }));
}
