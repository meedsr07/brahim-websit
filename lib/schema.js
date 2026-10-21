import { absoluteUrl, business, siteUrl } from "./business";

const serviceArea = {
  "@type": "City",
  name: business.location.city,
};

function offerCatalog() {
  const services = [...business.services.electricity, ...business.services.plumbing];
  return {
    "@type": "OfferCatalog",
    name: "Serveis d'electricitat i lampisteria",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.label,
        areaServed: serviceArea,
      },
    })),
  };
}

/**
 * Solo se incluyen datos verificados: nombre de trabajo, ciudad, teléfono,
 * servicios y zona. No hay dirección postal, reseñas, horarios ni precios.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician", "Plumber"],
    ...(siteUrl ? { "@id": `${siteUrl}/#negocio` } : {}),
    name: business.name,
    description: business.description,
    telephone: business.contact.phoneE164,
    ...(siteUrl
      ? {
          url: siteUrl,
          logo: absoluteUrl("/icons/icon-512.png"),
        }
      : {}),
    areaServed: serviceArea,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.location.city,
      addressRegion: business.location.region,
      addressCountry: business.location.countryCode,
    },
    knowsLanguage: ["ca"],
    hasOfferCatalog: offerCatalog(),
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
