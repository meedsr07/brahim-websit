import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import ServiceDetail from "@/components/ServiceDetail";
import SimpleProcess from "@/components/SimpleProcess";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/Buttons";
import {
  AlertIcon,
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
} from "@/components/Icons";
import {
  electricalEmergency,
  electricalFaqs,
  electricalServices,
} from "@/lib/content";
import { media } from "@/lib/media";
import { business, whatsappMessages } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Electricista Girona 24/7 | Urgències i instal·lacions",
  description:
    "Electricista d'urgència a Girona 24/7. Avaries elèctriques, instal·lacions i manteniment amb preus econòmics. Truca ara o escriu per WhatsApp.",
  path: "/electricidad",
});

const electricityServiceSchema = serviceSchema({
  name: "Electricista d'urgència a Girona 24/7",
  description:
    "Diagnosi i reparació d'avaries elèctriques, instal·lacions elèctriques i manteniment a Girona, amb atenció d'urgències 24/7.",
  serviceType: "Electricitat i instal·lacions elèctriques",
  path: "/electricidad",
});

const breadcrumbs = [
  { name: "Inici", path: "/" },
  { name: "Electricitat", path: "/electricidad" },
];

const signals = [
  {
    title: "El diferencial salta de forma repetida",
    text: "No lo reinicies una y otra vez. Si vuelve a saltar, conviene localizar qué circuito o aparato está provocando el problema.",
  },
  {
    title: "Una zona se queda sin corriente",
    text: "Puede afectar a una habitación, a varios enchufes o a toda la vivienda. Necesitamos saber qué sigue funcionando y qué no.",
  },
  {
    title: "Un enchufe o un interruptor no responde",
    text: "Un mecanismo que no funciona o que se calienta requiere revisión. Evita usarlo hasta que se compruebe.",
  },
  {
    title: "Las luces parpadean",
    text: "El parpadeo puede tener relación con una lámpara, un contacto o la propia instalación. Revisamos el punto afectado.",
  },
  {
    title: "Notas olor a quemado o ruidos en el cuadro",
    text: "No manipules el cuadro si detectas humo, chispas u olor a quemado. Contacta con un profesional y, si hay riesgo, con emergencias.",
  },
  {
    title: "La instalación es antigua o vas a reformar",
    text: "Una revisión previa ayuda a conocer el estado de la instalación y a planificar los cambios con criterio.",
  },
];

export default function ElectricidadPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={electricityServiceSchema} />

      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Electricista Girona · 24/7"
        title="Electricista d'urgència a Girona 24/7: avaries, instal·lacions i manteniment"
        intro="Tens una avaria elèctrica o necessites una instal·lació a Girona? Atenem urgències 24/7, amb diagnosi clara, preus econòmics i pressupost abans d'intervenir."
        image={media.electricistaQuadre.image}
        imageAlt={media.electricistaQuadre.alt}
        imagePosition="object-[50%_45%]"
        message={whatsappMessages.electricidad}
        bullets={["Urgències 24/7", "Diagnosi d'avaries", "Instal·lacions", "Manteniment"]}
      />

      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[250px_1fr] lg:gap-14 lg:px-10">
          <ServiceSidebar
            message={whatsappMessages.electricidad}
            items={[
              { label: "Avaries", href: "#averias" },
              { label: "Instal·lacions", href: "#instalaciones" },
              { label: "Manteniment", href: "#mantenimiento" },
              { label: "Urgències", href: "#urgencias" },
              { label: "Senyals d'avís", href: "#senales" },
              { label: "Com demanar-ho", href: "#proceso-servicio" },
              { label: "Preguntes freqüents", href: "#faq" },
            ]}
          />

          <div>
            <div className="max-w-3xl">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
                Serveis elèctrics
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.03em] text-ink">
                Serveis d'electricitat a Girona per a habitatges i locals
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Treballem en instal·lacions elèctriques d'habitatges i locals a
                Girona, a més d'avaries i manteniment. El primer pas és
                entendre què passa i què necessita la instal·lació; a partir
                d'aquí plantegem la intervenció i, si escau, el pressupost.
              </p>
            </div>

            <div className="mt-10">
              {electricalServices.map((service) => (
                <ServiceDetail key={service.id} service={service} />
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-muted">
                No saps quin servei necessites? Descriu-nos el problema i
                t'orientarem.
              </p>
              <WhatsAppButton
                message={whatsappMessages.electricidad}
                label="Consulta el meu cas"
                variant="dark"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="urgencias"
        aria-labelledby="urgencias-title"
        className="scroll-mt-24 bg-ink py-16 text-cream sm:py-20"
      >
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:px-10">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber">
              <AlertIcon className="h-4 w-4" />
              Urgències elèctriques · 24/7
            </p>
            <h2
              id="urgencias-title"
              className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.03em] text-cream"
            >
              {electricalEmergency.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-cream/65 sm:text-base sm:leading-8">
              {electricalEmergency.intro}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-cream/55">
              {business.emergencyNote}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                message={electricalEmergency.message}
                label="WhatsApp 24/7"
                variant="amber"
              />
              <a
                href={business.contact.telHref}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[2px] border border-cream/25 px-5 py-3 text-sm font-extrabold text-cream transition-colors hover:border-cream/60 hover:bg-white/[0.06]"
              >
                <PhoneIcon className="h-[18px] w-[18px]" />
                Truca ara · 24/7
              </a>
            </div>
          </div>

          <div className="border border-cream/15 bg-white/[0.035] p-6 sm:p-8">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cream/50">
              Abans d'intervenir
            </p>
            <ul className="mt-4 space-y-4">
              {electricalEmergency.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-7 text-cream/70"
                >
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-amber" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-cream/10 pt-4 text-xs leading-6 text-cream/45">
              El temps d'arribada es confirma en cada cas, segons la zona i el
              moment. Si hi ha risc per a les persones, truca primer al 112.
            </p>
          </div>
        </div>
      </section>

      <section
        id="senales"
        aria-labelledby="senales-title"
        className="scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
                Quan cal revisar la instal·lació
              </p>
              <h2
                id="senales-title"
                className="mt-4 max-w-2xl font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.03em] text-ink"
              >
                Senyals que necessites un electricista d'urgència a Girona
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted lg:justify-self-end">
              Algunes avaries són evidents; d'altres comencen amb petits
              canvis. Si detectes una situació de risc, no esperis que
              empitjori.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 border-t border-line sm:grid-cols-2">
            {signals.map((signal, index) => (
              <article
                key={signal.title}
                className="grid grid-cols-[auto_1fr] gap-4 border-b border-line py-6"
              >
                <span className="text-[10px] font-extrabold tracking-[0.16em] text-amber-deep">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-extrabold leading-6 text-ink">
                    {signal.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-7 text-muted">
                    {signal.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SimpleProcess
        title="Demanar un electricista d'urgència a Girona, pas a pas"
        intro="Explica'ns el problema amb el màxim detall possible. Atenem consultes 24/7 i, amb aquesta informació, valorem el cas i t'indiquem el pas següent."
        message={whatsappMessages.electricidad}
        cta="Consulta la meva avaria"
        steps={[
          {
            title: "Descriu l'avaria",
            text: "Indica què no funciona, des de quan i a quina zona de Girona ets. Una foto del quadre o del punt afectat ajuda a entendre el cas.",
          },
          {
            title: "Valorem la instal·lació",
            text: "Revisem la informació i et preguntem el necessari per entendre l'origen i l'abast de la intervenció.",
          },
          {
            title: "Acordem la intervenció",
            text: "T'expliquem les opcions i, si escau, preparem un pressupost abans de fer la reparació.",
          },
        ]}
      />

      <section className="border-b border-line bg-paper py-8">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-sm text-muted">
            Necessites lampisteria? També fem reparacions, fuites i
            instal·lacions d'aigua.
          </p>
          <Link
            href="/fontaneria"
            className="group inline-flex items-center gap-2 text-sm font-extrabold text-ink transition-colors hover:text-amber-deep"
          >
            Veure serveis de lampisteria
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <FAQ
        title="Preguntes freqüents sobre electricitat a Girona 24/7"
        intro="Dubtes habituals abans de demanar un electricista a Girona. Si el teu cas és diferent, escriu-nos o truca'ns."
        items={electricalFaqs}
      />

      <FinalCTA
        title="Tens una avaria elèctrica urgent a Girona?"
        text="Truca'ns o escriu-nos les 24 hores. Explica'ns què passa, des de quan i a quina zona ets, i t'indicarem com et podem ajudar."
        message={whatsappMessages.electricidad}
      />
    </>
  );
}
