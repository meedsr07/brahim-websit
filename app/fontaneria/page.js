import Link from "next/link";
import Image from "next/image";
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
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Fontanero en Girona | Reparaciones y fugas de agua",
  description:
    "Fontanero en Girona para reparar grifos, cisternas, desagües y fugas de agua, además de instalaciones y mantenimiento. Consulta tu caso por WhatsApp.",
  path: "/fontaneria",
});

const breadcrumbs = [
  { name: "Inicio", path: "/" },
  { name: "Fontanería", path: "/fontaneria" },
];

export default function FontaneriaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Fontanería · Girona"
        title="Fontanero en Girona para reparaciones, fugas e instalaciones"
        intro="Reparamos problemas de fontanería, valoramos fugas y humedades, e instalamos componentes de agua. Cuéntanos qué ocurre y te indicamos cómo podemos ayudarte."
        image={media.fontaneriaBano.image}
        imageAlt={media.fontaneriaBano.alt}
        message={whatsappMessages.fontaneria}
        bullets={["Reparaciones", "Fugas y humedades", "Instalaciones"]}
      />

      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[250px_1fr] lg:gap-14 lg:px-10">
          <ServiceSidebar
            message={whatsappMessages.fontaneria}
            items={[
              { label: "Reparaciones", href: "#reparaciones" },
              { label: "Fugas y humedades", href: "#fugas" },
              { label: "Instalaciones", href: "#instalaciones" },
              { label: "Mantenimiento", href: "#mantenimiento" },
              { label: "Problemas habituales", href: "#problemas" },
              { label: "Cómo pedirlo", href: "#proceso-servicio" },
              { label: "Preguntas frecuentes", href: "#faq" },
            ]}
          />

          <div>
            <div className="max-w-3xl">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
                Servicios de fontanería
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.03em] text-ink">
                Soluciones para el agua de tu vivienda o local
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Desde una cisterna que no para hasta una instalación que
                necesita renovarse. Revisamos el punto afectado, explicamos las
                opciones y acordamos el alcance antes de intervenir.
              </p>
            </div>

            <div className="mt-10">
              {plumbingServices.map((service) => (
                <ServiceDetail key={service.id} service={service} />
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-muted">
                Si no sabes de dónde viene el problema, cuéntanos qué has
                observado y te orientamos.
              </p>
              <WhatsAppButton
                message={whatsappMessages.fontaneria}
                label="Consultar mi caso"
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
                Consultas habituales
              </p>
              <h2
                id="problemas-title"
                className="mt-4 max-w-2xl font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.03em] text-ink"
              >
                Problemas de fontanería habituales
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted lg:justify-self-end">
              Cada instalación es distinta. Estas situaciones sirven para
              orientarte; el alcance real se valora al revisar el caso.
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
              Fugas de agua
            </p>
            <h2
              id="fuga-title"
              className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.03em] text-cream"
            >
              Qué hacer mientras esperas una revisión
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-cream/65 sm:text-base sm:leading-8">
              Ante una fuga visible, lo primero es reducir el riesgo y evitar
              que el agua siga avanzando. Si no puedes hacerlo con seguridad,
              no fuerces nada y busca ayuda.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                "Cierra la llave de paso general si puedes acceder a ella con seguridad.",
                "Recoge el agua y retira objetos que puedan dañarse.",
                "Evita tocar cables o enchufes que estén en contacto con agua.",
                "Cuéntanos dónde está la fuga y desde cuándo ocurre.",
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
              Si hay riesgo eléctrico o la fuga afecta a la estructura, no
              manipules la instalación y contacta con los servicios de
              emergencia si es necesario.
            </p>

            <WhatsAppButton
              message={whatsappMessages.fontaneriaFuga}
              label="Consultar una fuga"
              variant="amber"
              className="mt-7"
            />
          </div>

          <figure>
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
              <Image
                src={media.fontaneriaTuberias.image}
                alt={media.fontaneriaTuberias.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream/40">
              Imagen de referencia del oficio.
            </figcaption>
          </figure>
        </div>
      </section>

      <SimpleProcess
        title="Pedir un fontanero en Girona, paso a paso"
        intro="Cuéntanos qué elemento falla y qué has observado. Si puedes, indica la marca o el modelo y envía una foto del punto afectado."
        message={whatsappMessages.fontaneria}
        cta="Consultar mi reparación"
        steps={[
          {
            title: "Describe el problema",
            text: "Indica si es una fuga, un grifo, una cisterna, un desagüe u otro elemento, y desde cuándo ocurre.",
          },
          {
            title: "Valoramos el punto afectado",
            text: "Revisamos la información y te pedimos lo necesario para entender el estado de la instalación.",
          },
          {
            title: "Acordamos la intervención",
            text: "Te explicamos las opciones y, si corresponde, preparamos un presupuesto antes de realizar el trabajo.",
          },
        ]}
      />

      <section className="border-b border-line bg-paper py-8">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-sm text-muted">
            ¿También necesitas resolver una avería eléctrica? Trabajamos las
            dos especialidades.
          </p>
          <Link
            href="/electricidad"
            className="group inline-flex items-center gap-2 text-sm font-extrabold text-ink transition-colors hover:text-amber-deep"
          >
            Ver servicios de electricidad
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <FAQ
        title="Preguntas frecuentes sobre fontanería"
        intro="Respuestas sobre fugas, reparaciones, instalaciones y mantenimiento. Si tu problema no está aquí, cuéntanoslo."
        items={plumbingFaqs}
      />

      <FinalCTA
        title="¿Necesitas un fontanero en Girona?"
        text="Cuéntanos qué ocurre con el agua de tu vivienda o local. Te indicamos cómo podemos ayudarte y qué siguiente paso tiene sentido."
        message={whatsappMessages.fontaneria}
      />
    </>
  );
}
