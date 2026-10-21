import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServiceSection from "@/components/ServiceSection";
import ReasonsSection from "@/components/ReasonsSection";
import ProcessSection from "@/components/ProcessSection";
import CraftSection from "@/components/CraftSection";
import ProjectGallery from "@/components/ProjectGallery";
import FAQ from "@/components/FAQ";
import ServiceArea from "@/components/ServiceArea";
import FinalCTA from "@/components/FinalCTA";
import { homeFaqs } from "@/lib/content";
import { media } from "@/lib/media";
import { buildMetadata } from "@/lib/seo";
import { whatsappMessages } from "@/lib/business";

export const metadata = buildMetadata({
  title: "Electricidad y fontanería en Girona | Servicios",
  description:
    "Servicios de electricidad y fontanería en Girona: averías, instalaciones y mantenimiento. Contacta por WhatsApp o teléfono y solicita presupuesto.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <section
        id="servicios"
        aria-labelledby="servicios-title"
        className="scroll-mt-28 bg-paper pb-4 pt-16 sm:pt-20 lg:pt-24"
      >
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-amber-deep">
                Servicios
              </p>
              <h2
                id="servicios-title"
                className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,3.9rem)] leading-[1.01] tracking-[-0.032em] text-ink"
              >
                Electricidad y fontanería para tu vivienda o local
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted lg:justify-self-end lg:pb-1">
              Cubrimos las necesidades habituales de las dos especialidades.
              Elige el servicio que necesitas o escríbenos si no tienes claro
              dónde está el problema.
            </p>
          </div>
        </div>

        <ServiceSection
          number="01"
          eyebrow="Electricidad"
          title="Averías, instalaciones y mantenimiento eléctrico"
          description="Revisamos el origen de la avería, planteamos la reparación y valoramos el estado general de la instalación. También realizamos instalaciones nuevas y tareas de mantenimiento."
          bullets={[
            "Diagnóstico y reparación de averías eléctricas.",
            "Instalaciones eléctricas y puestas a punto.",
            "Mantenimiento y revisión de la instalación.",
            "Urgencias eléctricas, sujetas a disponibilidad.",
          ]}
          href="/electricidad"
          linkLabel="Ver servicios de electricidad"
          message={whatsappMessages.electricidad}
          image={media.electricidadCuadro.image}
          imageAlt={media.electricidadCuadro.alt}
          tone="cream"
        />

        <ServiceSection
          number="02"
          eyebrow="Fontanería"
          title="Reparaciones, fugas e instalaciones de fontanería"
          description="Atendemos problemas de fontanería en grifos, cisternas, desagües y sanitarios. Valoramos las fugas y las humedades, y realizamos instalaciones y sustituciones de componentes."
          bullets={[
            "Reparación de grifos, cisternas, desagües y sanitarios.",
            "Fugas de agua y humedades, según valoración.",
            "Instalaciones y sustituciones de fontanería.",
            "Mantenimiento de los puntos de agua.",
          ]}
          href="/fontaneria"
          linkLabel="Ver servicios de fontanería"
          message={whatsappMessages.fontaneria}
          image={media.fontaneriaSifon.image}
          imageAlt={media.fontaneriaSifon.alt}
          reverse
          tone="paper"
        />
      </section>

      <ReasonsSection />
      <ProcessSection />
      <CraftSection />
      <ProjectGallery />
      <FAQ
        title="Preguntas frecuentes sobre electricidad y fontanería"
        intro="Respuestas claras sobre servicios, presupuestos, zona de trabajo y urgencias. Si tu duda no aparece, escríbenos."
        items={homeFaqs}
      />
      <ServiceArea />
      <FinalCTA
        title="¿Necesitas un electricista o un fontanero en Girona?"
        text="Cuéntanos qué ocurre y te indicamos cómo podemos ayudarte. Puedes escribirnos por WhatsApp o llamarnos para consultar tu caso y solicitar presupuesto."
        message={whatsappMessages.presupuesto}
      />
    </>
  );
}
