import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { PhoneButton, WhatsAppButton } from "@/components/Buttons";
import {
  AlertIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { contactFaqs } from "@/lib/content";
import { business, whatsappMessages, whatsappUrl } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contacto | Electricidad y fontanería en Girona",
  description:
    "Contacta por WhatsApp o teléfono para consultar un servicio de electricidad o fontanería en Girona. Te indicamos cómo solicitar presupuesto.",
  path: "/contacto",
});

const breadcrumbs = [
  { name: "Inicio", path: "/" },
  { name: "Contacto", path: "/contacto" },
];

const quoteSteps = [
  "Elige WhatsApp o teléfono.",
  "Cuéntanos qué necesitas y en qué zona de Girona estás.",
  "Añade una foto si puede ayudar a entender el caso.",
  "Te confirmamos el siguiente paso y la disponibilidad.",
];

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <section className="relative isolate overflow-hidden border-b border-line bg-cream">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(to_right,rgba(11,32,39,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,32,39,0.055)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
        />
        <div className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-7 sm:px-8 sm:pb-20 sm:pt-9 lg:px-10 lg:pb-24 lg:pt-10">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:items-start lg:gap-16">
            <div className="max-w-2xl">
              <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
                <span className="h-px w-8 bg-amber-deep" aria-hidden="true" />
                Contacto directo · {business.location.city}
              </p>
              <h1 className="mt-5 font-display text-[clamp(2.65rem,5.2vw,4.6rem)] leading-[0.99] tracking-[-0.035em] text-ink [text-wrap:balance]">
                Contacta con un electricista y fontanero en Girona
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-muted sm:text-base sm:leading-8">
                Elige WhatsApp o teléfono. Cuéntanos qué necesitas y te
                indicamos cómo podemos ayudarte. Esta web no utiliza
                formularios de contacto.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappUrl(whatsappMessages.contacto)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-32 flex-col justify-between border border-line bg-paper p-5 transition-colors hover:border-[#1B6B4A]/50"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1B6B4A] text-white">
                    <WhatsAppIcon className="h-[18px] w-[18px]" />
                  </span>
                  <span>
                    <span className="mt-5 block text-sm font-extrabold text-ink">
                      WhatsApp
                    </span>
                    <span className="mt-1 flex items-center gap-2 text-xs font-semibold text-muted">
                      Abrir conversación
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </a>

                <a
                  href={business.contact.telHref}
                  className="group flex min-h-32 flex-col justify-between border border-line bg-paper p-5 transition-colors hover:border-ink/40"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-amber">
                    <PhoneIcon className="h-[18px] w-[18px]" />
                  </span>
                  <span>
                    <span className="mt-5 block text-sm font-extrabold text-ink">
                      {business.contact.phoneDisplay}
                    </span>
                    <span className="mt-1 flex items-center gap-2 text-xs font-semibold text-muted">
                      Llamar ahora
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </a>
              </div>

              <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted">
                <MapPinIcon className="h-4 w-4 text-amber-deep" />
                {business.location.city}, {business.location.region}
              </p>
            </div>

            <div className="border border-ink/10 bg-ink p-6 text-cream shadow-[0_26px_60px_-35px_rgba(11,32,39,0.55)] sm:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-amber">
                Solicitar presupuesto
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight tracking-[-0.025em] text-cream">
                Cuéntanos tu caso
              </h2>
              <ol className="mt-6 space-y-4">
                {quoteSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm leading-6 text-cream/65"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cream/20 text-[10px] font-extrabold text-amber">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-7 grid gap-2.5">
                <WhatsAppButton
                  message={whatsappMessages.presupuesto}
                  label="Solicitar por WhatsApp"
                  variant="amber"
                  className="w-full"
                />
                <PhoneButton
                  label="Llamar ahora"
                  variant="lightOutline"
                  className="w-full"
                />
              </div>
              <p className="mt-4 text-xs leading-6 text-cream/45">
                No prometemos un tiempo de respuesta. La disponibilidad se
                confirma al hablar contigo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-10">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
              Antes de escribir
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.03em] text-ink">
              Qué información nos ayuda a valorar tu caso
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              No necesitas preparar un informe. Con unos datos básicos podemos
              entender qué necesitas y decirte cómo seguir.
            </p>

            <ul className="mt-8 grid gap-0 border-t border-line sm:grid-cols-2">
              {[
                {
                  title: "El servicio",
                  text: "Indica si es electricidad o fontanería, y qué tipo de intervención crees que necesitas.",
                },
                {
                  title: "El problema",
                  text: "Describe qué ocurre, desde cuándo y si ha cambiado o empeorado.",
                },
                {
                  title: "La ubicación",
                  text: "Dinos en qué zona de Girona estás para confirmar la disponibilidad.",
                },
                {
                  title: "Una foto",
                  text: "Si puedes, envía una imagen del punto afectado. Ayuda, pero no es imprescindible.",
                },
              ].map((item, index) => (
                <li
                  key={item.title}
                  className="border-b border-line py-5 sm:odd:pr-6 sm:even:pl-6"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckIcon className="h-4 w-4 text-amber-deep" />
                    <h3 className="text-sm font-extrabold text-ink">
                      {index + 1}. {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/electricidad"
                className="group inline-flex items-center gap-2 text-sm font-extrabold text-ink underline decoration-amber underline-offset-4 transition-colors hover:text-amber-deep"
              >
                Servicios de electricidad
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/fontaneria"
                className="group inline-flex items-center gap-2 text-sm font-extrabold text-ink underline decoration-amber underline-offset-4 transition-colors hover:text-amber-deep"
              >
                Servicios de fontanería
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="h-fit border border-line bg-cream p-6 sm:p-8">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-amber-deep">
              Zona y disponibilidad
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-[-0.025em] text-ink">
              {business.location.city}
            </h2>
            <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
              <div className="flex items-start justify-between gap-4 py-4">
                <dt className="flex items-center gap-2 text-muted">
                  <MapPinIcon className="h-4 w-4 text-amber-deep" />
                  Zona
                </dt>
                <dd className="text-right font-bold text-ink">
                  {business.location.city}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 py-4">
                <dt className="flex items-center gap-2 text-muted">
                  <ClockIcon className="h-4 w-4 text-amber-deep" />
                  Horario
                </dt>
                <dd className="text-right font-bold text-ink">
                  Consultar disponibilidad
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 py-4">
                <dt className="flex items-center gap-2 text-muted">
                  <AlertIcon className="h-4 w-4 text-amber-deep" />
                  Urgencias eléctricas
                </dt>
                <dd className="text-right font-bold text-ink">
                  Según disponibilidad
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 py-4">
                <dt className="flex items-center gap-2 text-muted">
                  <PhoneIcon className="h-4 w-4 text-amber-deep" />
                  Contacto
                </dt>
                <dd className="text-right font-bold text-ink">
                  WhatsApp y teléfono
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-xs leading-6 text-muted">
              {business.location.serviceAreaNote}
            </p>
            <a
              href={business.contact.telHref}
              className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-ink underline decoration-amber underline-offset-4 transition-colors hover:text-amber-deep"
            >
              {business.contact.phoneDisplay}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </section>

      <FAQ
        title="Preguntas frecuentes sobre el contacto"
        intro="Cómo funciona el contacto, qué puedes enviar y cómo confirmamos la disponibilidad."
        items={contactFaqs}
      />

      <FinalCTA
        title="Escríbenos y cuéntanos qué necesitas"
        text="Estamos en Girona y atendemos electricidad y fontanería. Elige WhatsApp o teléfono para consultar tu caso y solicitar presupuesto."
        message={whatsappMessages.contacto}
      />
    </>
  );
}
