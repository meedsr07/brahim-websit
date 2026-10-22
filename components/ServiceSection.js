import Image from "next/image";
import { LinkButton, WhatsAppButton } from "./Buttons";
import { CheckIcon } from "./Icons";

export default function ServiceSection({
  number,
  eyebrow,
  title,
  description,
  bullets,
  href,
  linkLabel,
  message,
  image,
  imageAlt,
  imagePosition = "object-center",
  reverse = false,
  tone = "cream",
}) {
  return (
    <article
      className={`py-14 sm:py-16 lg:py-20 ${tone === "cream" ? "bg-cream" : "bg-paper"}`}
    >
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <figure
          className={`relative ${reverse ? "lg:order-2" : ""}`}
        >
          <div
            aria-hidden="true"
            className={`absolute -bottom-3 hidden h-full w-full border border-amber/40 sm:block ${
              reverse ? "-left-3" : "-right-3"
            }`}
          />
          <div className="relative aspect-[5/4] overflow-hidden bg-ink shadow-[0_24px_55px_-42px_rgba(11,32,39,0.55)]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              quality={82}
              sizes="(min-width: 1024px) 48vw, (min-width: 640px) 90vw, 100vw"
              className={`object-cover ${imagePosition}`}
            />
            <span className="absolute left-0 top-0 inline-flex h-12 min-w-12 items-center justify-center bg-amber px-3 text-sm font-extrabold tracking-[0.12em] text-ink">
              {number}
            </span>
          </div>
        </figure>

        <div className={`max-w-xl ${reverse ? "lg:order-1" : ""}`}>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
            {eyebrow}
          </p>
          <h3 className="mt-4 font-display text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.04] tracking-[-0.03em] text-ink">
            {title}
          </h3>
          <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            {description}
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-sm leading-6 text-ink/75"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/20 text-amber-deep">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={href} variant="dark" showArrow>
              {linkLabel}
            </LinkButton>
            <WhatsAppButton
              message={message}
              label="Consulta per WhatsApp"
              variant="outline"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
