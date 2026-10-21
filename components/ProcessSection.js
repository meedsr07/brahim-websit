import { homeProcess } from "@/lib/content";
import { whatsappMessages } from "@/lib/business";
import { WhatsAppButton } from "./Buttons";

export default function ProcessSection() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="scroll-mt-24 border-y border-line bg-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
            Cómo trabajamos
          </p>
          <h2
            id="proceso-title"
            className="mt-4 max-w-md font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.03] tracking-[-0.03em] text-ink"
          >
            Pedir ayuda es sencillo
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            No hay formularios ni intermediarios. Cuéntanos el caso por
            WhatsApp o teléfono y te indicamos el siguiente paso.
          </p>
          <WhatsAppButton
            message={whatsappMessages.general}
            label="Empezar por WhatsApp"
            className="mt-7"
          />
        </div>

        <ol className="relative">
          {homeProcess.map((step, index) => (
            <li
              key={step.title}
              className="group relative grid grid-cols-[auto_1fr] gap-5 border-t border-line py-6 sm:gap-7 sm:py-7"
            >
              <div className="flex flex-col items-center">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-paper text-xs font-extrabold tracking-[0.08em] text-ink transition-colors group-hover:border-amber group-hover:bg-amber">
                  0{index + 1}
                </span>
                {index < homeProcess.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="mt-2 h-full w-px bg-line"
                  />
                ) : null}
              </div>
              <div className="pb-1">
                <h3 className="text-base font-extrabold text-ink sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-7 text-muted">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
