/**
 * Configuració central del negoci.
 *
 * IMPORTANTE: sustituye los datos marcados como pendientes antes de publicar.
 * Todo el sitio (teléfonos, mensajes de WhatsApp, navegación, datos estructurados)
 * se construye a partir de este archivo para evitar duplicidades.
 */

// Único lugar donde se define el número. El resto de formatos se derivan de aquí.
const CONTACT_PHONE_E164 = "+34624917476";

function formatSpanishPhone(e164) {
  const digits = e164.replace(/\D/g, "");
  if (digits.length !== 11 || !digits.startsWith("34")) return e164;
  return `+${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
}

function normalizeSiteUrl(value) {
  if (!value) return null;

  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return url.origin + (url.pathname === "/" ? "" : url.pathname.replace(/\/+$/, ""));
  } catch {
    return null;
  }
}

// En Netlify, `URL` contiene el dominio principal del sitio durante el build.
// NEXT_PUBLIC_SITE_URL tiene prioridad para poder fijar el dominio canónico.
export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL || process.env.URL,
);

export const business = {
  // Nombre de trabajo. Pendiente de confirmación por el cliente.
  name: "Electricitat i Lampisteria Girona",
  nameIsPlaceholder: true,
  brand: {
    line1: "Electricitat i Lampisteria",
    line2: "Girona",
  },
  tagline: "Lampisteria i electricitat d'urgència a Girona 24/7",
  description:
    "Lampisteria i electricitat d'urgència a Girona 24/7. Reparacions ràpides, instal·lacions elèctriques i de lampisteria, manteniment i pressupost sense compromís.",

  /**
   * Paraules clau de posicionament local. Es reutilitzen a les metadades,
   * als textos alternatius i al contingut per evitar inconsistències.
   */
  seo: {
    primaryKeyword: "Lampisteria urgències Girona ràpid i barat 24/7",
    secondaryKeywords: [
      "Lampista Girona",
      "Lampisteria Girona",
      "Electricista Girona",
      "Electricitat Girona",
      "Lampista d'urgència Girona",
      "Instal·lacions elèctriques Girona",
    ],
  },

  contact: {
    phoneE164: CONTACT_PHONE_E164,
    phoneDisplay: formatSpanishPhone(CONTACT_PHONE_E164),
    telHref: `tel:${CONTACT_PHONE_E164}`,
    whatsappNumber: CONTACT_PHONE_E164.replace(/\D/g, ""),
    whatsappBaseUrl: `https://wa.me/${CONTACT_PHONE_E164.replace(/\D/g, "")}`,
    email: null,
  },

  location: {
    city: "Girona",
    region: "Catalunya",
    country: "Espanya",
    countryCode: "ES",
    address: null,
    coordinates: null,
    serviceAreaLabel: "Girona",
    serviceAreaNote:
      "Donem servei a Girona ciutat i, segons disponibilitat, als municipis del voltant. Si el teu habitatge o local és en una altra població, escriu-nos i confirmarem si et podem atendre.",
  },

  /**
   * Horari publicat i utilitzat al web, a les metadades i a Schema.org.
   * Confirma que el negoci realment atén urgències les 24 hores abans de publicar.
   */
  hours: {
    is24_7: true,
    display: "24 hores, 7 dies a la setmana",
    short: "24/7",
    openingHours: "Mo-Su 00:00-24:00",
    opens: "00:00",
    closes: "23:59",
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },

  priceRange: "$",
  priceRangeLabel: "Preus econòmics",

  emergencyNote:
    "Atenem urgències de lampisteria i electricitat a Girona les 24 hores, els 7 dies. Truca'ns o escriu-nos i et confirmem la disponibilitat i el temps d'arribada segons la zona i el moment.",

  navigation: [
    { href: "/electricidad", label: "Electricitat" },
    { href: "/fontaneria", label: "Lampisteria" },
    { href: "/#serveis-girona", label: "Urgències 24/7" },
    { href: "/contacto", label: "Contacte" },
  ],

  services: {
    electricity: [
      { label: "Diagnosi i reparació d'avaries elèctriques", href: "/electricidad#averias" },
      { label: "Instal·lacions elèctriques a Girona", href: "/electricidad#instalaciones" },
      { label: "Manteniment elèctric", href: "/electricidad#mantenimiento" },
      { label: "Urgències elèctriques 24/7", href: "/electricidad#urgencias" },
    ],
    plumbing: [
      { label: "Reparacions de lampisteria", href: "/fontaneria#reparaciones" },
      { label: "Fuites d'aigua i urgències 24/7", href: "/fontaneria#fugas" },
      { label: "Instal·lacions i substitucions", href: "/fontaneria#instalaciones" },
      { label: "Manteniment de lampisteria", href: "/fontaneria#mantenimiento" },
    ],
  },

  /**
   * Galería de trabajos reales. Se mantiene vacía hasta recibir fotografías
   * propias del cliente, con permiso de uso y textos alternativos revisados.
   *
   * Ejemplo de elemento:
   * {
   *   src: "/images/trabajos/cuadro-electrico.jpg",
   *   alt: "Cuadro eléctrico renovado en una vivienda de Girona",
   *   caption: "Renovación de cuadro eléctrico",
   *   width: 1600,
   *   height: 1200,
   * }
   */
  projects: [],
};

export const whatsappMessages = {
  general:
    "Hola! Necessito un lampista o electricista d'urgència a Girona. Em podeu ajudar?",
  presupuesto:
    "Hola! Voldria demanar un pressupost per a un servei de lampisteria o electricitat a Girona. Què necessiteu saber?",
  electricidad:
    "Hola! Necessito informació sobre un servei d'electricitat a Girona. Em podeu ajudar?",
  electricidadAveria:
    "Hola! Tinc una avaria elèctrica a Girona i necessito informació. Em podeu ajudar?",
  electricidadInstalacion:
    "Hola! Necessito informació sobre una instal·lació elèctrica a Girona. Em podeu ajudar?",
  electricidadMantenimiento:
    "Hola! Vull consultar un servei de manteniment elèctric a Girona. Em podeu ajudar?",
  electricidadUrgencia:
    "Hola! Necessito una urgència elèctrica a Girona. Teniu disponibilitat 24/7?",
  fontaneria:
    "Hola! Necessito informació sobre un servei de lampisteria a Girona. Em podeu ajudar?",
  fontaneriaReparacion:
    "Hola! Necessito informació sobre una reparació de lampisteria a Girona. Em podeu ajudar?",
  fontaneriaFuga:
    "Hola! Tinc una fuita d'aigua a Girona i necessito un lampista d'urgència. Em podeu ajudar?",
  fontaneriaInstalacion:
    "Hola! Necessito informació sobre una instal·lació de lampisteria a Girona. Em podeu ajudar?",
  fontaneriaMantenimiento:
    "Hola! Vull consultar un servei de manteniment de lampisteria a Girona. Em podeu ajudar?",
  contacto:
    "Hola! Voldria parlar sobre un servei d'electricitat o lampisteria a Girona. Em podeu ajudar?",
};

/**
 * Construye una URL de WhatsApp con el mensaje correctamente codificado.
 * Usa encodeURIComponent a través de URLSearchParams para respetar acentos,
 * signos de interrogación y saltos de línea.
 */
export function whatsappUrl(message = whatsappMessages.general) {
  const base = business.contact.whatsappBaseUrl;
  const text = typeof message === "string" ? message.trim() : "";
  if (!text) return base;

  const params = new URLSearchParams({ text });
  return `${base}?${params.toString()}`;
}

export function absoluteUrl(path = "/") {
  if (!siteUrl) return undefined;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
}
