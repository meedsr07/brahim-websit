import { business } from "@/lib/business";
import {
  BoltIcon,
  CheckIcon,
  ClockIcon,
  DropletIcon,
} from "./Icons";

const items = [
  {
    icon: ClockIcon,
    title: "Urgències 24/7",
    text: "Nits, festius i caps de setmana",
  },
  {
    icon: DropletIcon,
    title: "Lampisteria Girona",
    text: "Fuites, reparacions i instal·lacions",
  },
  {
    icon: BoltIcon,
    title: "Electricista Girona",
    text: "Avaries, instal·lacions i manteniment",
  },
  {
    icon: CheckIcon,
    title: "Preus econòmics",
    text: `Pressupost sense compromís · ${business.location.city}`,
  },
];

export default function TrustStrip() {
  return (
    <section aria-label="Resum del servei" className="bg-ink text-cream">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-px bg-cream/10 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex items-start gap-3.5 bg-ink px-3 py-6 sm:px-4 lg:px-5 lg:py-7"
            >
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/15 text-amber">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[13px] font-extrabold text-cream">{title}</p>
                <p className="mt-1 text-[11px] leading-5 text-cream/50">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
