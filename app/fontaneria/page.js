import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import ServiceDetail from "@/components/ServiceDetail";
import SimpleProcess from "@/components/SimpleProcess";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { PhoneButton, WhatsAppButton } from "@/components/Buttons";
import {
  AlertIcon,
  ArrowRightIcon,
  CheckIcon,
  DropletIcon,
} from "@/components/Icons";
import {
  plumbingFaqs,
  plumbingProblems,
  plumbingServices,
} from "@/lib/content";
import { media } from "@/lib/media";
import { whatsappMessages } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Lampista Girona 24/7 | Urgències de lampisteria i fuites",
  description:
    "Lampista d'urgència a Girona 24/7 per a fuites, aixetes, cisternes i desguassos. Reparacions ràpides i preus econòmics. Truca ara o escriu per WhatsApp.",
  path: "/fontaneria",
});

const plumbingServiceSchema = serviceSchema({
  name: "Lampista d'urgència a Girona 24/7",
  description:
    "Reparacions de lampisteria, fuites d'aigua, instal·lacions i manteniment a Girona, amb atenció d'urgències 24/7.",
  serviceType: "Lampisteria i instal·lacions d'aigua",
  path: "/fontaneria",
});

const breadcrumbs = [
  { name: "Inici", path: "/" },
  { name: "Lampisteria", path: "/fontaneria" },
];

export default function FontaneriaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={plumbingServiceSchema} />

      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Lampista Girona · 24/7"
        title="Lampista d'urgència a Girona 24/7: fuites, reparacions i instal·lacions"
        intro="Tens una fuita, una aixeta que goteja o una cisterna que no para? Atenem lampisteria d'urgència a Girona 24/7, amb preus econòmics i pressupost abans d'intervenir."
        image={media.lampistaTuberies.image}
        imageAlt={media.lampistaTuberies.alt}
        imagePosition="object-[45%_45%]"
        message={whatsappMessages.fontaneria}
        bullets={["Urgències 24/7", "Fuites i humitats", "Reparacions", "Instal·lacions"]}
      />

      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[250px_1fr] lg:gap-14 lg:px-10">
          <ServiceSidebar
            message={whatsappMessages.fontaneria}
            items={[
              { label: "Reparacions", href: "#reparaciones" },
              { label: "Fuites i humitats", href: "#fugas" },
              { label: "Instal·lacions", href: "#instalaciones" },
              { label: "Manteniment", href: "#mantenimiento" },
              { label: "Problemes habituals", href: "#problemas" },
              { label: "Com demanar-ho", href: "#proceso-servicio" },
              { label: "Preguntes freqüents", href: "#faq" },
            ]}
          />

          <div>
            <div className="max-w-3xl">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
                Serveis de lampisteria
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.03em] text-ink">
                Serveis de lampisteria a Girona per a habitatges i locals
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Des d'una cisterna que no para fins a una instal·lació que cal
                renovar. Revisem el punt afectat, expliquem les opcions i
                acordem l'abast abans d'intervenir, amb un pressupost clar.
              </p>
            </div>

            <div className="mt-10">
              {plumbingServices.map((service) => (
                <ServiceDetail key={service.id} service={service} />
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-muted">
                Si no saps d'on ve el problema, explica'ns què has observat i
                t'orientarem.
              </p>
              <WhatsAppButton
                message={whatsappMessages.fontaneria}
                label="Consulta el meu cas"
                variant="dark"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="problemas"
        aria-labelledby="problemas-title"
        className="scroll-mt-24 border-y border-line bg-cream py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
                Consultes habituals
              </p>
              <h2
                id="problemas-title"
                className="mt-4 max-w-2xl font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.03em] text-ink"
              >
                Problemes habituals de lampisteria a Girona
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted lg:justify-self-end">
              Cada instal·lació és diferent. Aquestes situacions serveixen per
              orientar-te; l'abast real es valora en revisar el cas.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {plumbingProblems.map((problem, index) => (
              <article
                key={problem.title}
                className="border border-line bg-paper p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-amber">
                    <DropletIcon className="h-4 w-4" />
                  </span>
                  <span className="text-[10px] font-extrabold tracking-[0.18em] text-muted">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-extrabold leading-6 text-ink">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {problem.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="fuga-title"
        className="bg-ink py-16 text-cream sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20 lg:px-10">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber">
              <AlertIcon className="h-4 w-4" />
              Lampisteria d'urgència · 24/7
            </p>
            <h2
              id="fuga-title"
              className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.03em] text-cream"
            >
              Lampisteria d'urgència a Girona: què fer davant una fuita
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-cream/65 sm:text-base sm:leading-8">
              Davant d'una fuita visible, el primer és reduir el risc i evitar
              que l'aigua continuï avançant. Si no ho pots fer amb seguretat,
              no forcis res i truca'ns: atenem urgències de lampisteria a
              Girona 24/7.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                "Tanca la clau de pas general si hi pots accedir amb seguretat.",
                "Recull l'aigua i retira els objectes que es puguin fer malbé.",
                "Evita tocar cables o endolls que estiguin en contacte amb aigua.",
                "Explica'ns on és la fuita i des de quan passa.",
              ].map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 text-sm leading-7 text-cream/70"
                >
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-amber" />
                  {tip}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-xl text-xs leading-6 text-cream/45">
              Si hi ha risc elèctric o la fuita afecta l'estructura, no
              manipulis la instal·lació i contacta amb els serveis
              d'emergència si cal.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PhoneButton label="Truca ara · 24/7" variant="amber" />
              <WhatsAppButton
                message={whatsappMessages.fontaneriaFuga}
                label="WhatsApp 24/7"
                variant="lightOutline"
              />
            </div>
          </div>

          <figure>
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
              <Image
                src={media.lampistaCaldera.image}
                alt={media.lampistaCaldera.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[68%_50%]"
              />
            </div>
            <figcaption className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream/40">
              Imatge de referència de l'ofici.
            </figcaption>
          </figure>
        </div>
      </section>

      <SimpleProcess
        title="Demanar un lampista d'urgència a Girona, pas a pas"
        intro="Explica'ns quin element falla i què has observat. Atenem consultes 24/7; si pots, indica la marca o el model i envia una foto del punt afectat."
        message={whatsappMessages.fontaneria}
        cta="Consulta la meva reparació"
        steps={[
          {
            title: "Descriu el problema",
            text: "Indica si és una fuita, una aixeta, una cisterna, un desguàs o un altre element, i des de quan passa.",
          },
          {
            title: "Valorem el punt afectat",
            text: "Revisem la informació i et demanem el necessari per entendre l'estat de la instal·lació.",
          },
          {
            title: "Acordem la intervenció",
            text: "T'expliquem les opcions i, si escau, preparem un pressupost abans de fer la feina.",
          },
        ]}
      />

      <section className="border-b border-line bg-paper py-8">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-sm text-muted">
            També necessites resoldre una avaria elèctrica? Treballem les dues
            especialitats.
          </p>
          <Link
            href="/electricidad"
            className="group inline-flex items-center gap-2 text-sm font-extrabold text-ink transition-colors hover:text-amber-deep"
          >
            Veure serveis d'electricitat
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <FAQ
        title="Preguntes freqüents sobre lampisteria a Girona 24/7"
        intro="Respostes sobre fuites, reparacions, instal·lacions i manteniment. Si el teu problema no hi és, explica'ns-el o truca'ns."
        items={plumbingFaqs}
      />

      <FinalCTA
        title="Necessites un lampista d'urgència a Girona?"
        text="Truca'ns o escriu-nos les 24 hores. Explica'ns què passa amb l'aigua del teu habitatge o local i t'indicarem com et podem ajudar."
        message={whatsappMessages.fontaneria}
      />
    </>
  );
}
