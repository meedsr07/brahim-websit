import { whatsappMessages, whatsappUrl } from "@/lib/business";
import { faqSchema } from "@/lib/schema";
import { PlusIcon, WhatsAppIcon } from "./Icons";
import JsonLd from "./JsonLd";

export default function FAQ({
  id = "faq",
  eyebrow = "Preguntes freqüents",
  title = "El que convé saber abans de contactar",
  intro,
  items,
  withSchema = true,
  className = "",
}) {
  if (!items?.length) return null;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`bg-paper py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-4 max-w-md font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.06] tracking-[-0.025em] text-ink"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">{intro}</p>
          ) : null}

          <div className="mt-7 border-l-2 border-amber pl-4">
            <p className="text-sm font-bold text-ink">No hi veus el teu cas?</p>
            <a
              href={whatsappUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 text-sm font-extrabold text-amber-deep underline decoration-amber/40 underline-offset-4 transition-colors hover:text-ink"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Explica'ns-ho per WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-line">
          {items.map((item, index) => (
            <details
              key={item.question}
              name={`${id}-accordion`}
              open={index === 0}
              className="group border-b border-line"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="text-[15px] font-bold leading-7 text-ink sm:text-base">
                  {item.question}
                </span>
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-cream text-ink transition-colors group-hover:border-amber group-hover:bg-amber">
                  <PlusIcon className="h-4 w-4 transition-transform duration-200 group-open:rotate-45" />
                </span>
              </summary>
              <div className="pb-6 pr-10 text-sm leading-7 text-muted sm:pr-14">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      {withSchema ? <JsonLd data={faqSchema(items)} /> : null}
    </section>
  );
}
