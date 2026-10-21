import Image from "next/image";
import { media } from "@/lib/media";
import { TextLink } from "./Buttons";
import { BoltIcon, DropletIcon } from "./Icons";

export default function CraftSection() {
  return (
    <section
      aria-labelledby="oficio-title"
      className="bg-paper py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-10">
        <div className="relative">
          <div className="grid grid-cols-5 items-end gap-3 sm:gap-4">
            <figure className="col-span-3 overflow-hidden bg-ink">
              <div className="relative aspect-[3/4]">
                <Image
                  src={media.fontaneriaGrifo.image}
                  alt={media.fontaneriaGrifo.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 55vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <figure className="col-span-2 mb-8 overflow-hidden border-[5px] border-paper bg-ink shadow-[0_18px_40px_-24px_rgba(11,32,39,0.4)] sm:mb-12">
              <div className="relative aspect-[4/5]">
                <Image
                  src={media.electricidadCableado.image}
                  alt={media.electricidadCableado.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 38vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 border-b border-l border-amber/50"
          />
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            Imágenes de referencia del oficio.
          </p>
        </div>

        <div className="max-w-lg">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
            Oficio y detalle
          </p>
          <h2
            id="oficio-title"
            className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.03em] text-ink"
          >
            El detalle importa tanto como el resultado
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Una instalación bien resuelta debe ser segura, funcional y fácil de
            mantener. Antes de intervenir conviene entender cómo funciona y qué
            necesita, tanto en electricidad como en fontanería.
          </p>

          <ul className="mt-7 space-y-4 border-t border-line pt-6">
            <li className="flex items-start gap-3.5">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-amber">
                <BoltIcon className="h-4 w-4" />
              </span>
              <p className="text-sm leading-7 text-ink/70">
                Revisamos el origen de la avería antes de plantear la
                reparación.
              </p>
            </li>
            <li className="flex items-start gap-3.5">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-amber">
                <DropletIcon className="h-4 w-4" />
              </span>
              <p className="text-sm leading-7 text-ink/70">
                En fontanería, valoramos el punto afectado y el estado de la
                instalación.
              </p>
            </li>
          </ul>

          <TextLink href="/contacto" className="mt-7">
            Cuéntanos qué necesitas
          </TextLink>
        </div>
      </div>
    </section>
  );
}
