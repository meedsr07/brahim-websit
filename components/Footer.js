import Link from "next/link";
import {
  business,
  whatsappMessages,
  whatsappUrl,
} from "@/lib/business";
import Logo from "./Logo";
import {
  ArrowUpRightIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./Icons";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <div className="mx-auto w-full max-w-[1240px] px-5 pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-14 sm:px-8 md:pb-12 lg:px-10 lg:pt-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_0.8fr] lg:gap-12">
          <div>
            <Link
              href="/"
              aria-label={`${business.name} — ir al inicio`}
              className="inline-flex rounded-sm"
            >
              <Logo tone="light" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-cream/65">
              Servicios de electricidad y fontanería en Girona. Instalaciones,
              reparaciones y mantenimiento con contacto directo.
            </p>
            <p className="mt-5 flex items-start gap-2.5 text-sm font-semibold text-cream/80">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              {business.location.city}, {business.location.region}
            </p>
          </div>

          <nav aria-label="Servicios">
            <h2 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber">
              Servicios
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/electricidad"
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  Electricidad
                </Link>
              </li>
              <li>
                <Link
                  href="/fontaneria"
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  Fontanería
                </Link>
              </li>
              <li>
                <Link
                  href="/#proceso"
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  Cómo trabajamos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber">
              Contacto
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl(whatsappMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-cream/70 transition-colors hover:text-cream"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#4FB586]" />
                  WhatsApp
                  <ArrowUpRightIcon className="h-3.5 w-3.5 text-cream/35" />
                </a>
              </li>
              <li>
                <a
                  href={business.contact.telHref}
                  className="inline-flex items-center gap-2.5 text-cream/70 transition-colors hover:text-cream"
                >
                  <PhoneIcon className="h-4 w-4 text-amber" />
                  {business.contact.phoneDisplay}
                </a>
              </li>
              <li className="pt-1 text-xs leading-6 text-cream/45">
                Horario de atención: consultar disponibilidad por WhatsApp o
                teléfono.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-amber">
              Zona
            </h2>
            <p className="mt-5 text-sm leading-7 text-cream/70">
              {business.location.serviceAreaLabel}
              <br />
              <span className="text-cream/45">
                Consulta otras localidades según disponibilidad.
              </span>
            </p>
            <Link
              href="/contacto"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-cream transition-colors hover:text-amber"
            >
              Cómo contactar
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6">
          <p className="max-w-2xl text-xs leading-6 text-cream/40">
            El servicio de urgencias eléctricas está sujeto a disponibilidad
            confirmada. Los servicios, el alcance y el presupuesto se concretan
            al valorar cada caso.
          </p>
          <div className="mt-5 flex flex-col gap-3 text-[11px] leading-5 text-cream/35 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {business.name}. Todos los derechos reservados.
            </p>
            <p>
              Fotografías de referencia:{" "}
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-cream/20 underline-offset-4 transition-colors hover:text-cream/70"
              >
                Unsplash
              </a>
              . No se presentan como trabajos propios.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
