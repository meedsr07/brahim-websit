import Link from "next/link";
import { business, whatsappMessages } from "@/lib/business";
import { WhatsAppButton } from "./Buttons";
import { MapPinIcon, PhoneIcon } from "./Icons";

export default function ServiceSidebar({ items, message }) {
  return (
    <aside className="h-fit lg:sticky lg:top-32">
      <div className="border border-line bg-cream p-5 sm:p-6">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-deep">
          Contacte directe
        </p>
        <p className="mt-3 font-display text-2xl leading-tight tracking-[-0.02em] text-ink">
          T'ajudem amb el teu cas?
        </p>
        <p className="mt-2 text-xs leading-6 text-muted">
          Explica'ns què passa al teu habitatge o local a {business.location.city}.
        </p>
        <WhatsAppButton
          message={message || whatsappMessages.general}
          label="Escriure per WhatsApp"
          variant="green"
          className="mt-4 w-full"
        />
        <a
          href={business.contact.telHref}
          className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[2px] border border-ink/20 px-4 text-xs font-extrabold text-ink transition-colors hover:border-ink/50"
        >
          <PhoneIcon className="h-4 w-4" />
          {business.contact.phoneDisplay}
        </a>
      </div>

      <nav aria-label="En esta página" className="mt-6">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted">
          En aquesta pàgina
        </p>
        <ul className="mt-3 space-y-0.5 text-sm">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex min-h-11 w-full items-center text-ink/65 transition-colors hover:text-ink lg:min-h-8"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-6 flex items-center gap-2 border-t border-line pt-5 text-xs font-semibold text-muted">
        <MapPinIcon className="h-4 w-4 text-amber-deep" />
        {business.location.city} · Servei local
      </p>
    </aside>
  );
}
