const BASE_URL = "https://lampisteriaelectricitatgirona.online";

const routes = [
  {
    path: "/",
    changeFrequency: "monthly",
    priority: 1,
    images: ["/images1/electricista-installacio.webp", "/images1/lampista-caldera.webp"],
  },
  {
    path: "/electricidad",
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/images1/electricista-quadre.webp"],
  },
  {
    path: "/fontaneria",
    changeFrequency: "monthly",
    priority: 0.9,
    images: ["/images1/lampista-tuberies.webp"],
  },
  {
    path: "/contacto",
    changeFrequency: "yearly",
    priority: 0.7,
    images: [],
  },
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.images.length
      ? { images: route.images.map((image) => `${BASE_URL}${image}`) }
      : {}),
  }));
}