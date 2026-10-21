import { whatsappUrl } from "@/lib/business";
import { CheckIcon, WhatsAppIcon } from "./Icons";

export default function ServiceDetail({ service }) {
  return (
    <article
      id={service.id}
      className="scroll-mt-28 border-t border-line py-10 first:border-t-0 first:pt-0"
    >
      <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6">
        <span className="pt-1 text-[11px] font-extrabold tracking-[0.16em] text-amber-deep">
          {service.number}
        </span>
        <div>
          <h3 className="font-display text-[clamp(1.7rem,3vw,2.35rem)] leading-[1.1] tracking-[-0.025em] text-ink">
            {service.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            {service.intro}
          </p>

          <div className="mt-6 border-l border-line pl-4 sm:pl-5">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted">
              Quan el necessites
            </p>
            <ul className="mt-3 space-y-2.5">
              {service.needs.map((need) => (
                <li
                  key={need}
                  className="flex items-start gap-2.5 text-sm leading-6 text-ink/75"
                >
                  <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-amber-deep" />
                  {need}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={whatsappUrl(service.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-ink underline decoration-amber underline-offset-4 transition-colors hover:text-amber-deep"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#1B6B4A]" />
            {service.cta}
          </a>
        </div>
      </div>
    </article>
  );
}
