import { homeReasons } from "@/lib/content";
import { TextLink } from "./Buttons";
import {
  ClockIcon,
  ClipboardIcon,
  CombineIcon,
  MapPinIcon,
} from "./Icons";

const icons = {
  combine: CombineIcon,
  pin: MapPinIcon,
  clock: ClockIcon,
  clipboard: ClipboardIcon,
};

export default function ReasonsSection() {
  return (
    <section
      aria-labelledby="motius-title"
      className="relative isolate overflow-hidden bg-ink py-16 text-cream sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(251,249,244,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,249,244,0.3)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber">
            Per què contactar-nos
          </p>
          <h2
            id="motius-title"
            className="mt-4 max-w-md font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.03em] text-cream"
          >
            Lampisteria i electricitat a Girona, sense intermediaris
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-cream/60">
            Atenció 24/7, contacte directe i pressupost clar. Si el teu cas
            necessita una valoració prèvia, t'ho diem abans d'intervenir.
          </p>
          <TextLink href="/contacto" tone="light" className="mt-7">
            Veure com contactar
          </TextLink>
        </div>

        <div className="grid sm:grid-cols-2">
          {homeReasons.map((reason, index) => {
            const Icon = icons[reason.icon];
            return (
              <article
                key={reason.title}
                className={`border-t border-cream/15 py-7 sm:px-7 ${
                  index % 2 === 0 ? "sm:pl-0" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-amber">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-[10px] font-extrabold tracking-[0.2em] text-cream/30">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-extrabold leading-6 text-cream">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-cream/55">
                  {reason.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
