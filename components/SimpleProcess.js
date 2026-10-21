import { whatsappMessages } from "@/lib/business";
import { WhatsAppButton } from "./Buttons";

export default function SimpleProcess({
  id = "proceso-servicio",
  eyebrow = "Cómo pedirlo",
  title,
  intro,
  steps,
  message = whatsappMessages.presupuesto,
  cta = "Solicitar presupuesto",
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-y border-line bg-cream py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
              {eyebrow}
            </p>
            <h2
              id={`${id}-title`}
              className="mt-4 max-w-lg font-display text-[clamp(2rem,3.8vw,3.3rem)] leading-[1.03] tracking-[-0.03em] text-ink"
            >
              {title}
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-sm leading-7 text-muted">{intro}</p>
            <WhatsAppButton
              message={message}
              label={cta}
              variant="dark"
              className="mt-5"
            />
          </div>
        </div>

        <ol className="mt-10 grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="border-b border-line py-6 sm:px-6 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <p className="text-[10px] font-extrabold tracking-[0.2em] text-amber-deep">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-base font-extrabold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
