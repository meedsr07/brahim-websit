import Image from "next/image";
import Link from "next/link";
import { business, whatsappMessages, whatsappUrl } from "@/lib/business";
import { media } from "@/lib/media";
import {
  ArrowUpRightIcon,
  BoltIcon,
  CheckIcon,
  DropletIcon,
  PhoneIcon,
  WhatsAppIcon,
  WrenchIcon,
} from "./Icons";

const services = [
  {
    icon: BoltIcon,
    title: "Electricista d'urgència a Girona",
    eyebrow: "Electricitat · 24/7",
    text: "Avaries elèctriques, diferencials que salten, quadres i punts de llum. Diagnosi clara i reparació amb pressupost previ.",
    bullets: [
      "Diagnosi i reparació d'avaries",
      "Quadres elèctrics i proteccions",
      "Urgències elèctriques 24/7",
    ],
    image: media.electricistaQuadre,
    imagePosition: "object-[50%_45%]",
    href: "/electricidad",
    message: whatsappMessages.electricidad,
    accent: "bg-[#fff4d9] text-[#8a4b00]",
    badge: "Urgències 24/7",
  },
  {
    icon: DropletIcon,
    title: "Lampista d'urgència a Girona",
    eyebrow: "Lampisteria · 24/7",
    text: "Fuites, aixetes, cisternes, desguassos i sanitaris. Valorem el punt afectat i t'expliquem les opcions abans d'intervenir.",
    bullets: [
      "Fuites d'aigua i humitats",
      "Aixetes, cisternes i desguassos",
      "Urgències de lampisteria 24/7",
    ],
    image: media.lampistaTuberies,
    imagePosition: "object-[45%_50%]",
    href: "/fontaneria",
    message: whatsappMessages.fontaneria,
    accent: "bg-[#e7f8ef] text-[#0d7a41]",
    badge: "Resposta ràpida",
  },
  {
    icon: WrenchIcon,
    title: "Instal·lacions elèctriques a Girona",
    eyebrow: "Instal·lacions",
    text: "Reformes, instal·lacions noves i renovació de quadres per a habitatges i locals, amb materials adequats i acabats cuidats.",
    bullets: [
      "Instal·lacions i reformes",
      "Renovació de quadres",
      "Punts de llum i enchufes",
    ],
    image: media.electricistaInstallacio,
    imagePosition: "object-[50%_40%]",
    href: "/electricidad#instalaciones",
    message: whatsappMessages.electricidadInstalacion,
    accent: "bg-electric-soft text-electric-deep",
    badge: "Pressupost clar",
  },
  {
    icon: CheckIcon,
    title: "Lampisteria: instal·lacions i manteniment",
    eyebrow: "Manteniment",
    text: "Substitució de components, adaptació de punts d'aigua i manteniment de la instal·lació per a particulars i negocis.",
    bullets: [
      "Instal·lacions i substitucions",
      "Manteniment de lampisteria",
      "Habitatges i locals",
    ],
    image: media.lampistaCaldera,
    imagePosition: "object-[62%_50%]",
    href: "/fontaneria#instalaciones",
    message: whatsappMessages.fontaneriaInstalacion,
    accent: "bg-ink/[0.06] text-ink",
    badge: "Preus econòmics",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
      {services.map(
        ({
          icon: Icon,
          title,
          eyebrow,
          text,
          bullets,
          image,
          imagePosition,
          href,
          message,
          accent,
          badge,
        }) => (
          <article
            key={title}
            className="hover-lift group relative flex flex-col overflow-hidden rounded-[1.65rem] border border-line/80 bg-white shadow-[0_22px_50px_-38px_rgba(7,26,43,0.6)] hover:border-electric/30 hover:shadow-[0_30px_60px_-34px_rgba(7,26,43,0.45)]"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-ink">
              <Image
                src={image.image}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 90vw, 100vw"
                className={`object-cover ${imagePosition} transition-transform duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transition-none`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-night/45 text-white backdrop-blur-md">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] ${accent}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                  {badge}
                </span>
              </div>
              <p className="absolute bottom-4 left-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/75">
                {eyebrow}
              </p>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-[19px] font-extrabold leading-snug tracking-[-0.025em] text-ink sm:text-[21px]">
                {title}
              </h3>
              <p className="mt-2.5 text-[13px] leading-6 text-muted sm:text-sm sm:leading-7">
                {text}
              </p>

              <ul className="mt-4 space-y-2">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-[12.5px] font-semibold leading-5 text-ink/70 sm:text-[13px]"
                  >
                    <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-electric-soft text-electric-deep">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-line/70 pt-5">
                <a
                  href={business.contact.telHref}
                  aria-label={`Truca al ${business.contact.phoneDisplay}`}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-amber px-3.5 text-[11px] font-extrabold text-night shadow-[0_10px_22px_-14px_rgba(255,176,31,0.9)] transition-all hover:-translate-y-0.5 hover:bg-[#ffc04d]"
                >
                  <PhoneIcon className="h-3.5 w-3.5" />
                  Trucar
                </a>
                <a
                  href={whatsappUrl(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title}. Consulta per WhatsApp. S'obre en una pestanya nova.`}
                  className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[#0f7a37] px-3.5 text-[11px] font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0b6430]"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
                <Link
                  href={href}
                  className="ml-auto inline-flex min-h-10 items-center gap-1.5 text-[11px] font-extrabold text-ink/70 transition-colors hover:text-electric-deep"
                >
                  Veure detall
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </article>
        ),
      )}
    </div>
  );
}
