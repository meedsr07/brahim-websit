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
import LocalSeoContent from "@/components/LocalSeoContent";
import { homeFaqs } from "@/lib/content";
import { media } from "@/lib/media";
import { primarySeo, buildMetadata } from "@/lib/seo";
import { whatsappMessages } from "@/lib/business";

export const metadata = buildMetadata({
  title: primarySeo.title,
  description: primarySeo.description,
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
                Lampisteria i electricitat d'urgència a Girona 24/7
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted lg:justify-self-end lg:pb-1">
              Avaries elèctriques, fuites, reparacions i instal·lacions.
              Tria el servei que necessites o escriu-nos si no tens clar on
              és el problema.
            </p>
          </div>
        </div>

        <ServiceSection
          number="01"
          eyebrow="Electricista Girona · 24/7"
          title="Electricista d'urgència a Girona: avaries, instal·lacions i manteniment"
          description="Revisem l'origen de l'avaria, plantegem la reparació i valorem l'estat general de la instal·lació. També fem instal·lacions elèctriques a Girona i tasques de manteniment."
          bullets={[
            "Diagnosi i reparació d'avaries elèctriques.",
            "Instal·lacions elèctriques i posades a punt.",
            "Manteniment i revisió de la instal·lació.",
            "Urgències elèctriques 24/7 a Girona.",
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
          eyebrow="Lampista Girona · 24/7"
          title="Lampista d'urgència a Girona: fuites, aixetes i instal·lacions"
          description="Atenem problemes de lampisteria a Girona en aixetes, cisternes, desguassos i sanitaris. Valorem les fuites i les humitats, i fem instal·lacions i substitucions de components."
          bullets={[
            "Reparació d'aixetes, cisternes, desguassos i sanitaris.",
            "Fuites d'aigua i humitats, segons valoració.",
            "Instal·lacions i substitucions de lampisteria.",
            "Urgències de lampisteria 24/7 a Girona.",
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

      <LocalSeoContent />

      <ReasonsSection />
      <ProcessSection />
      <CraftSection />
      <ProjectGallery />
      <FAQ
        title="Preguntes freqüents sobre lampisteria i electricitat a Girona 24/7"
        intro="Respostes clares sobre serveis, preus, zona de treball i urgències. Si no hi trobes el teu dubte, escriu-nos o truca'ns."
        items={homeFaqs}
      />
      <ServiceArea />
      <FinalCTA
        title="Necessites un lampista o electricista d'urgència a Girona?"
        text="Truca'ns o escriu-nos les 24 hores. Explica'ns què passa i t'indicarem com et podem ajudar, amb pressupost clar i preus econòmics."
        message={whatsappMessages.presupuesto}
      />
    </>
  );
}
