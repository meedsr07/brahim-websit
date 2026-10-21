import { absoluteUrl, business, siteUrl } from "./business";

const OG_IMAGE_PATH = "/images/og-image.jpg";
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

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
}) {
  const canonical = absoluteUrl(path);
  const ogImage = siteUrl
    ? {
        url: absoluteUrl(OG_IMAGE_PATH),
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: "Electricidad y fontanería en Girona",
      }
    : null;

  return {
    title: { absolute: title },
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      siteName: business.name,
      locale: "es_ES",
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
  };
}

export const rootMetadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Electricidad y fontanería en Girona | Servicios",
    template: "%s | Electricidad y Fontanería Girona",
  },
  description: business.description,
  applicationName: business.name,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    address: false,
    email: false,
  },
  robots: defaultRobots,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: business.name,
    title: "Electricidad y fontanería en Girona",
    description: business.description,
    ...(siteUrl
      ? {
          url: siteUrl,
          images: [
            {
              url: absoluteUrl(OG_IMAGE_PATH),
              width: OG_IMAGE_WIDTH,
              height: OG_IMAGE_HEIGHT,
              alt: "Electricidad y fontanería en Girona",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: siteUrl ? "summary_large_image" : "summary",
    title: "Electricidad y fontanería en Girona",
    description: business.description,
    ...(siteUrl ? { images: [absoluteUrl(OG_IMAGE_PATH)] } : {}),
  },
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
};
