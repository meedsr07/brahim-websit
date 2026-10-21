import { business, whatsappMessages, whatsappUrl } from "@/lib/business";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function StickyContact() {
  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper px-3 pb-[calc(0.7rem+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-16px_35px_-25px_rgba(11,32,39,0.4)] md:hidden"
        role="region"
        aria-label="Contacto rápido"
      >
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
          <a
            href={business.contact.telHref}
            aria-label={`Llamar al ${business.contact.phoneDisplay}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[2px] border border-ink/20 bg-transparent px-3 text-[13px] font-extrabold text-ink"
          >
            <PhoneIcon className="h-[18px] w-[18px]" />
            Llamar
          </a>
          <a
            href={whatsappUrl(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar por WhatsApp. Se abre WhatsApp en una pestaña nueva."
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[2px] bg-[#1B6B4A] px-3 text-[13px] font-extrabold text-white"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            WhatsApp
          </a>
        </div>
      </div>

      <a
        href={whatsappUrl(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Consultar por WhatsApp. Se abre WhatsApp en una pestaña nueva."
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#1B6B4A] text-white shadow-[0_14px_30px_-12px_rgba(11,32,39,0.55)] transition-colors hover:bg-[#15563c] md:flex"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </>
  );
}
