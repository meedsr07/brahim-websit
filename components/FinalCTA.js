import {
  business,
  whatsappMessages,
  whatsappUrl,
} from "@/lib/business";
import { PhoneButton, WhatsAppButton } from "./Buttons";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export default function FinalCTA({
  title = "Necessites resoldre una urgència a Girona?",
  text = "Explica'ns què passa i t'indicarem com et podem ajudar. Pots escriure'ns per WhatsApp o trucar-nos; no hi ha formularis ni passos innecessaris.",
  message = whatsappMessages.presupuesto,
}) {
  return (
    <section
      aria-labelledby="cta-final-title"
      className="relative isolate overflow-hidden bg-ink py-16 text-cream sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.14] [background-image:linear-gradient(to_right,rgba(251,249,244,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,249,244,0.35)_1px,transparent_1px)] [background-size:70px_70px] [mask-image:linear-gradient(to_right,black,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full border border-amber/20"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-20 -z-10 h-72 w-72 rounded-full border border-amber/10"
      />

      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20 lg:px-10">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber">
            Parlem del teu cas · 24/7
          </p>
          <h2
            id="cta-final-title"
            className="mt-4 max-w-2xl font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.035em] text-cream"
          >
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-cream/65 sm:text-base sm:leading-8">
            {text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              message={message}
              label="Demanar pressupost"
              variant="amber"
            />
            <PhoneButton
              label="Truca ara · 24/7"
              variant="lightOutline"
            />
          </div>
          <p className="mt-4 text-xs leading-6 text-cream/40">
            Sense formularis. La conversa es fa per WhatsApp o telèfon, les 24
            hores.
          </p>
        </div>

        <div className="border border-cream/15 bg-white/[0.035] p-6 sm:p-7">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-cream/45">
            Contacte directe
          </p>
          <ul className="mt-5 space-y-5">
            <li>
              <a
                href={whatsappUrl(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3.5"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1B6B4A] text-white">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-cream">
                    WhatsApp
                  </span>
                  <span className="mt-0.5 block text-xs leading-5 text-cream/50">
                    Obre una conversa amb el negoci
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={business.contact.telHref}
                className="group flex items-start gap-3.5"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/20 text-amber">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-cream">
                    {business.contact.phoneDisplay}
                  </span>
                  <span className="mt-0.5 block text-xs leading-5 text-cream/50">
                    Trucada directa · 24/7
                  </span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3.5">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/20 text-amber">
                <MapPinIcon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-extrabold text-cream">
                  {business.location.city}
                </span>
                <span className="mt-0.5 block text-xs leading-5 text-cream/50">
                  Zona de referència. Consulta altres poblacions.
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
