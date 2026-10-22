import Image from "next/image";
import { business } from "@/lib/business";
import { PhoneButton, WhatsAppButton } from "./Buttons";
import Breadcrumbs from "./Breadcrumbs";

export default function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  message,
  primaryLabel = "Demanar pressupost",
  secondaryLabel = "Truca ara · 24/7",
  caption = "Imatge de referència de l'ofici.",
  bullets = [],
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-cream">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(to_right,rgba(11,32,39,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,32,39,0.055)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
      />
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-14 pt-7 sm:px-8 sm:pb-16 sm:pt-9 lg:px-10 lg:pb-20 lg:pt-10">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
              <span className="h-px w-8 bg-amber-deep" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.65rem,5.2vw,4.6rem)] leading-[0.99] tracking-[-0.035em] text-ink [text-wrap:balance]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
              {intro}
            </p>

            {bullets.length ? (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-ink/65">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-amber-deep"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={message} label={primaryLabel} />
              <PhoneButton label={secondaryLabel} />
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1B6B4A]" aria-hidden="true" />
              Contacte directe · {business.location.city}
            </p>
          </div>

          <figure className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 hidden h-full w-full border border-amber/45 sm:block"
            />
            <div className="relative aspect-[4/3] overflow-hidden bg-ink">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
              <div className="absolute left-0 top-6 bg-amber px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-ink">
                {business.location.city} · Urgències 24/7
              </div>
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              <span>{caption}</span>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
