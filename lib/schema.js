import { absoluteUrl, business, siteUrl } from "./business";

const businessId = siteUrl ? `${siteUrl}/#localbusiness` : undefined;

const serviceArea = {
  "@type": "City",
  name: "Girona",
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Catalunya",
  },
};

const openingHoursSpecification = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: business.hours.days,
  opens: business.hours.opens,
  closes: business.hours.closes,
};

function providerRef() {
  if (businessId) return { "@id": businessId };

  return {
    "@type": ["LocalBusiness", "Electrician", "Plumber"],
    name: business.name,
    telephone: business.contact.phoneE164,
  };
}

function offerCatalog() {
  const services = [
    ...business.services.electricity,
    ...business.services.plumbing,
  ];

  return {
    "@type": "OfferCatalog",
    name: "Lampisteria i electricitat d'urgència a Girona 24/7",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.label,
        areaServed: serviceArea,
        provider: providerRef(),
      },
    })),
  };
}

/**
 * Schema LocalBusiness completo para la home. Incluye los tipos Electrician
 * y Plumber, área de servicio Girona, horario 24/7, rango de precio y catálogo.
 *
 * No se añaden reseñas, valoraciones, dirección postal exacta ni coordenadas
 * del local porque no son datos verificados.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician", "Plumber"],
    ...(businessId ? { "@id": businessId } : {}),
    name: business.name,
    slogan: business.tagline,
    description: business.description,
    telephone: business.contact.phoneE164,
    ...(business.contact.email ? { email: business.contact.email } : {}),
    ...(siteUrl
      ? {
          url: siteUrl,
          logo: absoluteUrl("/icons/icon-512.png"),
          image: absoluteUrl("/images/og-image.jpg"),
        }
      : {}),
    priceRange: business.priceRange,
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      addressLocality: business.location.city,
      addressRegion: business.location.region,
      addressCountry: business.location.countryCode,
    },
    areaServed: serviceArea,
    openingHours: business.hours.openingHours,
    openingHoursSpecification: [openingHoursSpecification],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: business.contact.phoneE164,
        contactType: "customer service",
        areaServed: "Girona",
        availableLanguage: ["ca", "es"],
        hoursAvailable: openingHoursSpecification,
      },
    ],
    knowsLanguage: ["ca", "es"],
    hasOfferCatalog: offerCatalog(),
  };
}

/**
 * Schema de servicio para las páginas de electricidad y lampistería.
 * El proveedor referencia el LocalBusiness del layout mediante @id.
 */
export function serviceSchema({
  name,
  description,
  serviceType,
  path,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    areaServed: serviceArea,
    provider: providerRef(),
    hoursAvailable: openingHoursSpecification,
    ...(siteUrl ? { url: absoluteUrl(path) } : {}),
  };
}

export function breadcrumbSchema(items) {
  if (!siteUrl || !items?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items) {
  if (!items?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
