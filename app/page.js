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
  title: "Electricitat i lampisteria a Girona | Serveis",
  description:
    "Serveis d'electricitat i lampisteria a Girona: avaries, instal·lacions i manteniment. Contacta per WhatsApp o telèfon i demana pressupost.",
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
                Serveis
              </p>
              <h2
                id="servicios-title"
                className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,3.9rem)] leading-[1.01] tracking-[-0.032em] text-ink"
              >
                Electricitat i lampisteria per al teu habitatge o local
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted lg:justify-self-end lg:pb-1">
              Cobrim les necessitats habituals de totes dues especialitats.
              Tria el servei que necessites o escriu-nos si no tens clar on
              és el problema.
            </p>
          </div>
        </div>

        <ServiceSection
          number="01"
          eyebrow="Electricitat"
          title="Avaries, instal·lacions i manteniment elèctric"
          description="Revisem l'origen de l'avaria, plantegem la reparació i valorem l'estat general de la instal·lació. També fem instal·lacions noves i tasques de manteniment."
          bullets={[
            "Diagnosi i reparació d'avaries elèctriques.",
            "Instal·lacions elèctriques i posades a punt.",
            "Manteniment i revisió de la instal·lació.",
            "Urgències elèctriques, segons disponibilitat.",
          ]}
          href="/electricidad"
          linkLabel="Veure serveis d'electricitat"
          message={whatsappMessages.electricidad}
          image={media.electricidadCuadro.image}
          imageAlt={media.electricidadCuadro.alt}
          tone="cream"
        />

        <ServiceSection
          number="02"
          eyebrow="Lampisteria"
          title="Reparacions, fuites i instal·lacions de lampisteria"
          description="Atenem problemes de lampisteria en aixetes, cisternes, desguassos i sanitaris. Valorem les fuites i les humitats, i fem instal·lacions i substitucions de components."
          bullets={[
            "Reparació d'aixetes, cisternes, desguassos i sanitaris.",
            "Fuites d'aigua i humitats, segons valoració.",
            "Instal·lacions i substitucions de lampisteria.",
            "Manteniment dels punts d'aigua.",
          ]}
          href="/fontaneria"
          linkLabel="Veure serveis de lampisteria"
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
        title="Preguntes freqüents sobre electricitat i lampisteria"
        intro="Respostes clares sobre serveis, pressupostos, zona de treball i urgències. Si no hi trobes el teu dubte, escriu-nos."
        items={homeFaqs}
      />
      <ServiceArea />
      <FinalCTA
        title="Necessites un electricista o un lampista a Girona?"
        text="Explica'ns què passa i t'indicarem com et podem ajudar. Pots escriure'ns per WhatsApp o trucar-nos per consultar el teu cas i demanar pressupost."
        message={whatsappMessages.presupuesto}
      />
    </>
  );
}
