import { LinkButton, WhatsAppButton } from "@/components/Buttons";
import { ArrowRightIcon, MapPinIcon } from "@/components/Icons";
import { business, whatsappMessages } from "@/lib/business";

export const metadata = {
  title: {
    absolute: "Pàgina no trobada | Lampisteria i electricitat Girona 24/7",
  },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(to_right,rgba(11,32,39,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,32,39,0.055)_1px,transparent_1px)] [background-size:76px_76px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />
      <div className="mx-auto flex min-h-[65vh] w-full max-w-[1240px] flex-col justify-center px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <p className="font-display text-[clamp(5rem,14vw,10rem)] leading-none tracking-[-0.06em] text-ink/10">
          404
        </p>
        <p className="mt-2 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
          <MapPinIcon className="h-4 w-4" />
          Página no encontrada
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.99] tracking-[-0.035em] text-ink">
          Esta página no está por aquí
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
          Puede que el enlace haya cambiado o que la dirección no sea correcta.
          Vuelve al inicio o escríbenos y te ayudamos a encontrar lo que
          necesitas.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/" variant="dark" showArrow>
            Volver al inicio
          </LinkButton>
          <WhatsAppButton
            message={whatsappMessages.general}
            label="Consultar por WhatsApp"
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-ink/65">
          <a
            href="/electricidad"
            className="inline-flex items-center gap-2 underline decoration-amber underline-offset-4 transition-colors hover:text-amber-deep"
          >
            Electricidad
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="/fontaneria"
            className="inline-flex items-center gap-2 underline decoration-amber underline-offset-4 transition-colors hover:text-amber-deep"
          >
            Fontanería
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 underline decoration-amber underline-offset-4 transition-colors hover:text-amber-deep"
          >
            Contacto
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-8 text-xs text-muted">
          {business.location.city} · {business.location.region}
        </p>
      </div>
    </section>
  );
}
