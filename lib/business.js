/**
 * Configuración central del negocio.
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

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const business = {
  // Nombre de trabajo. Pendiente de confirmación por el cliente.
  name: "Electricidad y Fontanería Girona",
  nameIsPlaceholder: true,
  brand: {
    line1: "Electricidad y Fontanería",
    line2: "Girona",
  },
  tagline: "Electricidad y fontanería en Girona",
  description:
    "Servicios de electricidad y fontanería en Girona: instalaciones, reparaciones y mantenimiento. Contacto directo por WhatsApp o teléfono.",

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
    region: "Cataluña",
    country: "España",
    countryCode: "ES",
    address: null,
    coordinates: null,
    serviceAreaLabel: "Girona",
    serviceAreaNote:
      "Nuestra zona de referencia es Girona. Si tu vivienda o local está en otra localidad, escríbenos y confirmamos si podemos atenderte.",
  },

  // Sin horario confirmado. No se inventa.
  hours: null,
  emergencyNote:
    "El servicio de urgencias eléctricas está sujeto a disponibilidad confirmada. Consúltanos tu caso y te indicaremos si podemos atenderlo.",

  navigation: [
    { href: "/electricidad", label: "Electricidad" },
    { href: "/fontaneria", label: "Fontanería" },
    { href: "/#proceso", label: "Cómo trabajamos" },
    { href: "/contacto", label: "Contacto" },
  ],

  services: {
    electricity: [
      { label: "Diagnóstico y reparación de averías", href: "/electricidad#averias" },
      { label: "Instalaciones eléctricas", href: "/electricidad#instalaciones" },
      { label: "Mantenimiento eléctrico", href: "/electricidad#mantenimiento" },
      { label: "Urgencias eléctricas, sujetas a disponibilidad", href: "/electricidad#urgencias" },
    ],
    plumbing: [
      { label: "Reparaciones de fontanería", href: "/fontaneria#reparaciones" },
      { label: "Fugas de agua, según valoración", href: "/fontaneria#fugas" },
      { label: "Instalaciones y sustituciones", href: "/fontaneria#instalaciones" },
      { label: "Mantenimiento de fontanería", href: "/fontaneria#mantenimiento" },
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
    "Hola, necesito información sobre un servicio de electricidad o fontanería en Girona. ¿Podrían ayudarme?",
  presupuesto:
    "Hola, me gustaría solicitar un presupuesto para un servicio en Girona. ¿Podrían ayudarme?",
  electricidad:
    "Hola, necesito información sobre un servicio de electricidad en Girona. ¿Podrían ayudarme?",
  electricidadAveria:
    "Hola, tengo una avería eléctrica en Girona y necesito información. ¿Podrían ayudarme?",
  electricidadInstalacion:
    "Hola, necesito información sobre una instalación eléctrica en Girona. ¿Podrían ayudarme?",
  electricidadMantenimiento:
    "Hola, quiero consultar un servicio de mantenimiento eléctrico en Girona. ¿Podrían ayudarme?",
  electricidadUrgencia:
    "Hola, necesito consultar una urgencia eléctrica en Girona. ¿Hay disponibilidad?",
  fontaneria:
    "Hola, necesito información sobre un servicio de fontanería en Girona. ¿Podrían ayudarme?",
  fontaneriaReparacion:
    "Hola, necesito información sobre una reparación de fontanería en Girona. ¿Podrían ayudarme?",
  fontaneriaFuga:
    "Hola, tengo una fuga de agua en Girona y necesito información. ¿Podrían ayudarme?",
  fontaneriaInstalacion:
    "Hola, necesito información sobre una instalación de fontanería en Girona. ¿Podrían ayudarme?",
  fontaneriaMantenimiento:
    "Hola, quiero consultar un servicio de mantenimiento de fontanería en Girona. ¿Podrían ayudarme?",
  contacto:
    "Hola, me gustaría hablar sobre un servicio de electricidad o fontanería en Girona. ¿Podrían ayudarme?",
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
