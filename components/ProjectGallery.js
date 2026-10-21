import Image from "next/image";
import { business } from "@/lib/business";

/**
 * La galería solo se muestra cuando hay fotografías reales del cliente
 * configuradas en lib/business.js. Nunca se presentan imágenes de stock como
 * trabajos propios.
 */
export default function ProjectGallery() {
  if (!business.projects?.length) return null;

  return (
    <section
      aria-labelledby="trabajos-title"
      className="bg-paper py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
            Trabajos
          </p>
          <h2
            id="trabajos-title"
            className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.03em] text-ink"
          >
            Proyectos realizados
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {business.projects.map((project) => (
            <figure key={project.src} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={project.width || 1600}
                  height={project.height || 1200}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.025]"
                />
              </div>
              {project.caption ? (
                <figcaption className="mt-3 text-sm font-semibold text-ink/75">
                  {project.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
