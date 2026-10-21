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
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Electricista en Girona | Reparaciones e instalaciones",
  description:
    "Electricista en Girona para diagnóstico y reparación de averías, instalaciones y mantenimiento eléctrico. Consulta tu caso por WhatsApp o teléfono.",
  path: "/electricidad",
});

const breadcrumbs = [
  { name: "Inicio", path: "/" },
  { name: "Electricidad", path: "/electricidad" },
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

      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Electricidad · Girona"
        title="Electricista en Girona para averías, instalaciones y mantenimiento"
        intro="Revisamos averías eléctricas, realizamos instalaciones y mantenimiento en Girona. Cuéntanos qué ocurre y te indicamos cómo podemos ayudarte."
        image={media.electricidadCableado.image}
        imageAlt={media.electricidadCableado.alt}
        message={whatsappMessages.electricidad}
        bullets={["Diagnóstico de averías", "Instalaciones", "Mantenimiento"]}
      />

      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[250px_1fr] lg:gap-14 lg:px-10">
          <ServiceSidebar
            message={whatsappMessages.electricidad}
            items={[
              { label: "Averías", href: "#averias" },
              { label: "Instalaciones", href: "#instalaciones" },
              { label: "Mantenimiento", href: "#mantenimiento" },
              { label: "Urgencias", href: "#urgencias" },
              { label: "Señales de aviso", href: "#senales" },
              { label: "Cómo pedirlo", href: "#proceso-servicio" },
              { label: "Preguntas frecuentes", href: "#faq" },
            ]}
          />

          <div>
            <div className="max-w-3xl">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
                Servicios eléctricos
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.03em] text-ink">
                Qué podemos hacer por tu instalación
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Trabajamos sobre instalaciones eléctricas de viviendas y
                locales. El primer paso es entender qué ocurre y qué necesita
                la instalación; a partir de ahí planteamos la intervención y,
                cuando corresponde, el presupuesto.
              </p>
            </div>

            <div className="mt-10">
              {electricalServices.map((service) => (
                <ServiceDetail key={service.id} service={service} />
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-7 text-muted">
                ¿No sabes qué tipo de servicio necesitas? Descríbenos el
                problema y te orientamos.
              </p>
              <WhatsAppButton
                message={whatsappMessages.electricidad}
                label="Consultar mi caso"
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
              Urgencias eléctricas
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
                label="Consultar disponibilidad"
                variant="amber"
              />
              <a
                href={business.contact.telHref}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[2px] border border-cream/25 px-5 py-3 text-sm font-extrabold text-cream transition-colors hover:border-cream/60 hover:bg-white/[0.06]"
              >
                <PhoneIcon className="h-[18px] w-[18px]" />
                Llamar ahora
              </a>
            </div>
          </div>

          <div className="border border-cream/15 bg-white/[0.035] p-6 sm:p-8">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cream/50">
              Antes de intervenir
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
              No publicamos tiempos de respuesta garantizados. La atención se
              confirma en cada caso.
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
                Cuándo revisar la instalación
              </p>
              <h2
                id="senales-title"
                className="mt-4 max-w-2xl font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.03em] text-ink"
              >
                Señales de que necesitas un electricista
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted lg:justify-self-end">
              Algunas averías son evidentes; otras empiezan con pequeños
              cambios. Si detectas una situación de riesgo, no esperes a que
              empeore.
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
        title="Pedir un electricista en Girona, paso a paso"
        intro="Cuéntanos el problema con el mayor detalle posible. Con esa información valoramos el caso y te indicamos el siguiente paso."
        message={whatsappMessages.electricidad}
        cta="Consultar mi avería"
        steps={[
          {
            title: "Describe la avería",
            text: "Indica qué no funciona, desde cuándo y en qué zona de Girona estás. Una foto del cuadro o del punto afectado ayuda a entender el caso.",
          },
          {
            title: "Valoramos la instalación",
            text: "Revisamos la información y te preguntamos lo necesario para entender el origen y el alcance de la intervención.",
          },
          {
            title: "Acordamos la intervención",
            text: "Te explicamos las opciones y, si corresponde, preparamos un presupuesto antes de realizar la reparación.",
          },
        ]}
      />

      <section className="border-b border-line bg-paper py-8">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-sm text-muted">
            ¿Tu necesidad es de fontanería? También trabajamos reparaciones,
            fugas e instalaciones de agua.
          </p>
          <Link
            href="/fontaneria"
            className="group inline-flex items-center gap-2 text-sm font-extrabold text-ink transition-colors hover:text-amber-deep"
          >
            Ver servicios de fontanería
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <FAQ
        title="Preguntas frecuentes sobre electricidad"
        intro="Dudas habituales antes de solicitar un servicio eléctrico en Girona. Si tu caso es distinto, escríbenos."
        items={electricalFaqs}
      />

      <FinalCTA
        title="¿Tienes una avería eléctrica en Girona?"
        text="Cuéntanos qué ocurre, desde cuándo y en qué zona estás. Te indicamos cómo podemos ayudarte y qué siguiente paso tiene sentido."
        message={whatsappMessages.electricidad}
      />
    </>
  );
}
