import Image from "next/image";
import { business, whatsappMessages } from "@/lib/business";
import { media } from "@/lib/media";
import { PhoneButton, WhatsAppButton } from "./Buttons";
import { BoltIcon, CheckIcon, DropletIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-cream">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-70 [background-image:linear-gradient(to_right,rgba(11,32,39,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,32,39,0.055)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
      />
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:gap-14 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="max-w-2xl">
          <p className="rise flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
            <span className="h-px w-8 bg-amber-deep" aria-hidden="true" />
            {business.location.city} · Electricitat i lampisteria
          </p>

          <h1 className="rise rise-1 mt-5 font-display text-[clamp(2.5rem,5.2vw,4.75rem)] leading-[0.98] tracking-[-0.038em] text-ink [text-wrap:balance]">
            Serveis d'electricitat i lampisteria a{" "}
            <span className="italic text-[#A4610E]">Girona</span>
          </h1>

          <p className="rise rise-2 mt-6 max-w-xl text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
            Solucions per a instal·lacions, reparacions i manteniment
            elèctric i de lampisteria. Contacta'ns per explicar-nos què
            necessites i demanar pressupost.
          </p>

          <ul className="rise rise-2 mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-ink/65">
            {["Instal·lacions", "Reparacions", "Manteniment"].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-amber-deep" />
                {item}
              </li>
            ))}
          </ul>

          <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              message={whatsappMessages.presupuesto}
              label="Demanar pressupost"
            />
            <PhoneButton label="Truca ara" />
          </div>

          <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted">
            <WhatsAppIcon className="h-4 w-4 text-[#1B6B4A]" />
            Sense formularis: parla directament amb el negoci.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 hidden h-full w-full border border-amber/45 sm:block"
          />

          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden bg-ink">
              <Image
                src={media.heroElectricidad.image}
                alt={media.heroElectricidad.alt}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute left-0 top-5 bg-amber px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-ink">
                Electricitat · Lampisteria
              </div>
            </div>

            <div className="relative z-10 -mt-12 ml-4 mr-4 border border-line bg-paper p-5 shadow-[0_24px_50px_-30px_rgba(11,32,39,0.4)] sm:ml-8 sm:mr-8 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-2xl leading-tight tracking-[-0.02em] text-ink">
                    Dos oficis, un sol contacte
                  </p>
                  <p className="mt-2 max-w-xs text-xs leading-6 text-muted">
                    Electricitat i lampisteria per al teu habitatge o local a{" "}
                    {business.location.city}.
                  </p>
                </div>
                <div className="hidden shrink-0 gap-2 sm:flex">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-amber">
                    <BoltIcon className="h-4 w-4" />
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-amber">
                    <DropletIcon className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <a
                href={business.contact.telHref}
                className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-ink underline decoration-amber underline-offset-4 transition-colors hover:text-[#A4610E]"
              >
                Truca al {business.contact.phoneDisplay}
              </a>
            </div>
          </figure>

          <div className="absolute -right-4 top-10 hidden w-[34%] max-w-[190px] border-[6px] border-cream bg-ink shadow-[0_18px_35px_-20px_rgba(11,32,39,0.5)] sm:block">
            <div className="relative aspect-[4/3]">
              <Image
                src={media.heroFontaneria.image}
                alt={media.heroFontaneria.alt}
                fill
                sizes="(min-width: 1024px) 16vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

          <p className="mt-5 text-right text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            Imatges de referència de l'ofici.
          </p>
        </div>
      </div>
    </section>
  );
}
