import Link from "next/link";
import { business, whatsappMessages } from "@/lib/business";
import { PhoneButton, WhatsAppButton } from "./Buttons";
import { CheckIcon } from "./Icons";

const blocks = [
  {
    title: "Lampista d'urgència a Girona",
    text: "Aixetes, cisternes, desguassos, fuites i humitats. Si tens una fuita o l'aigua no baixa, truca'ns: atenem lampisteria d'urgència a Girona les 24 hores.",
    href: "/fontaneria",
    linkLabel: "Veure serveis de lampisteria",
  },
  {
    title: "Electricista a Girona 24 hores",
    text: "Avaries elèctriques, diferencials que salten, quadres i punts de llum. Treballem l'electricitat a Girona amb diagnosi clara i pressupost abans d'intervenir.",
    href: "/electricidad",
    linkLabel: "Veure serveis d'electricitat",
  },
  {
    title: "Instal·lacions elèctriques a Girona",
    text: "Reformes, instal·lacions noves i renovació de quadres elèctrics per a habitatges i locals, amb materials adequats i acabats cuidats.",
    href: "/electricidad#instalaciones",
    linkLabel: "Consultar una instal·lació",
  },
  {
    title: "Lampisteria Girona per a particulars i negocis",
    text: "Reparacions, substitucions i manteniment de lampisteria a Girona, amb preus econòmics, pressupost sense compromís i contacte directe.",
    href: "/fontaneria#reparaciones",
    linkLabel: "Consultar una reparació",
  },
];

export default function LocalSeoContent() {
  return (
    <section
      id="serveis-girona"
      aria-labelledby="serveis-girona-title"
      className="scroll-mt-24 border-y border-line bg-paper py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
              Lampisteria i electricitat a Girona
            </p>
            <h2
              id="serveis-girona-title"
              className="mt-4 max-w-3xl font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.03em] text-ink"
            >
              Lampisteria i electricitat d'urgència a Girona 24/7
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted lg:justify-self-end">
            Un sol contacte per resoldre una avaria, una fuita o una
            instal·lació. Atenem Girona ciutat i, segons disponibilitat, els
            municipis del voltant.
          </p>
        </div>

        <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.title} className="bg-cream p-6 sm:p-8">
              <h3 className="font-display text-[clamp(1.55rem,2.4vw,2.1rem)] leading-[1.08] tracking-[-0.02em] text-ink">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">{block.text}</p>
              <Link
                href={block.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-ink underline decoration-amber underline-offset-4 transition-colors hover:text-amber-deep"
              >
                {block.linkLabel}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 border border-line bg-cream p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="flex items-center gap-2 text-sm font-extrabold text-ink">
              <CheckIcon className="h-4 w-4 text-amber-deep" />
              {business.priceRangeLabel} · {business.hours.display}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-muted">
              Explica'ns què passa i et diem com ho podem resoldre. Pressupost
              sense compromís i sense formularis.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
            <PhoneButton label="Truca ara · 24/7" variant="amber" />
            <WhatsAppButton
              message={whatsappMessages.general}
              label="WhatsApp"
              variant="outline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
