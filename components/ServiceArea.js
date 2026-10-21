import { business, whatsappMessages } from "@/lib/business";
import { LinkButton, WhatsAppButton } from "./Buttons";
import { MapPinIcon } from "./Icons";

export default function ServiceArea() {
  return (
    <section
      id="zona"
      aria-labelledby="zona-title"
      className="scroll-mt-24 border-y border-line bg-cream py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20 lg:px-10">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
            Zona de servicio
          </p>
          <h2
            id="zona-title"
            className="mt-4 max-w-xl font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.03em] text-ink"
          >
            Electricidad y fontanería en {business.location.city}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            {business.location.serviceAreaNote}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
            No publicamos una lista cerrada de municipios porque no queremos
            prometer una cobertura que no podamos confirmar. Dinos dónde estás
            y te respondemos con la disponibilidad real.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/contacto" variant="dark" showArrow>
              Consultar la zona
            </LinkButton>
            <WhatsAppButton
              message={whatsappMessages.contacto}
              label="Preguntar por WhatsApp"
              variant="outline"
            />
          </div>
        </div>

        <div className="relative isolate overflow-hidden border border-line bg-paper p-8 sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full border border-amber/25"
          />
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 -z-10 h-44 w-44 rounded-full border border-amber/15"
          />
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-amber">
            <MapPinIcon className="h-5 w-5" />
          </span>
          <p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.24em] text-muted">
            Zona de referencia
          </p>
          <p className="mt-2 font-display text-5xl leading-none tracking-[-0.04em] text-ink sm:text-6xl">
            {business.location.city}
          </p>
          <p className="mt-3 text-sm font-semibold text-muted">
            {business.location.region} · {business.location.country}
          </p>

          <dl className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-muted">Servicios</dt>
              <dd className="font-bold text-ink">Electricidad y fontanería</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-muted">Contacto</dt>
              <dd className="font-bold text-ink">WhatsApp y teléfono</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-muted">Otras localidades</dt>
              <dd className="font-bold text-ink">Según disponibilidad</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
