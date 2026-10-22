import { absoluteUrl, business, siteUrl } from "./business";

const OG_IMAGE_PATH = "/images/og-image.jpg";
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;
const OG_IMAGE_ALT =
  "Lampisteria i electricitat d'urgència a Girona 24/7";

// Teléfono en formato local para la meta description (más legible en Google).
const localPhone = business.contact.phoneDisplay.replace(/^\+34\s*/, "");

/**
 * Posicionament principal de la home. El títol inclou la intenció exacta
 * "Lampisteria urgències Girona" i la meta description combina urgència,
 * preu, disponibilitat 24/7, telèfon i crida a l'acció en menys de 160 caràcters.
 */
export const primarySeo = {
  title: "Lampisteria Urgències Girona 24/7 | Ràpid i Barato",
  description: `Lampista i electricista d'urgència a Girona 24/7. Reparacions ràpides i barates. Truca ara al ${localPhone} i demana pressupost sense compromís.`,
  keywords: [
    business.seo.primaryKeyword,
    ...business.seo.secondaryKeywords,
    "lampisteria 24 hores Girona",
    "electricista 24 hores Girona",
    "urgències lampisteria Girona",
    "lampista barat Girona",
    "electricista barat Girona",
    "lampista d'urgència 24/7 Girona",
  ],
};

// Geolocalización a nivel de ciudad (no inventa la dirección exacta del negocio).
const geoMeta = {
  "geo.region": "ES-GI",
  "geo.placename": "Girona",
  "geo.position": "41.9794;2.8214",
  ICBM: "41.9794, 2.8214",
};

export const defaultRobots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

/**
 * Metadatos por página. La URL canónica y Open Graph solo se publican cuando
 * NEXT_PUBLIC_SITE_URL contiene el dominio real de producción.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  robots = defaultRobots,
  keywords = primarySeo.keywords,
  imageAlt = OG_IMAGE_ALT,
}) {
  const canonical = absoluteUrl(path);
  const ogImage = siteUrl
    ? {
        url: absoluteUrl(OG_IMAGE_PATH),
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: imageAlt,
      }
    : null;

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      siteName: business.name,
      locale: "ca_ES",
      alternateLocale: ["es_ES"],
      type: "website",
      ...(canonical ? { url: canonical } : {}),
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      ...(ogImage ? { images: [ogImage.url] } : {}),
    },
    robots,
    other: geoMeta,
  };
}

export const rootMetadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: primarySeo.title,
    template: `%s | ${business.name}`,
  },
  description: primarySeo.description,
  keywords: primarySeo.keywords,
  applicationName: business.name,
  category: "Lampisteria i electricitat",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    address: false,
    email: false,
  },
  robots: defaultRobots,
  icons: {
    icon: [
      {
        url: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: business.name,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "ca_ES",
    alternateLocale: ["es_ES"],
    siteName: business.name,
    title: primarySeo.title,
    description: primarySeo.description,
    ...(siteUrl
      ? {
          url: siteUrl,
          images: [
            {
              url: absoluteUrl(OG_IMAGE_PATH),
              width: OG_IMAGE_WIDTH,
              height: OG_IMAGE_HEIGHT,
              alt: OG_IMAGE_ALT,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: siteUrl ? "summary_large_image" : "summary",
    title: primarySeo.title,
    description: primarySeo.description,
    ...(siteUrl ? { images: [absoluteUrl(OG_IMAGE_PATH)] } : {}),
  },
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
  other: geoMeta,
};
