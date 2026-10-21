"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business, whatsappMessages } from "@/lib/business";
import Logo from "./Logo";
import { WhatsAppButton } from "./Buttons";
import {
  CloseIcon,
  MapPinIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => {
      menuRef.current?.querySelector("a")?.focus();
    }, 40);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-ink text-cream/80 md:block">
        <div className="mx-auto flex h-9 w-full max-w-[1240px] items-center justify-between px-8 text-[11px] font-semibold tracking-[0.08em] lg:px-10">
          <p className="flex items-center gap-2">
            <MapPinIcon className="h-3.5 w-3.5 text-amber" />
            <span>
              {business.location.city}, {business.location.region}
            </span>
          </p>
          <div className="flex items-center gap-5">
            <span className="text-cream/55">Electricidad y fontanería</span>
            <a
              href={business.contact.telHref}
              className="inline-flex items-center gap-2 text-cream transition-colors hover:text-amber"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {business.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-line bg-paper">
        <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-2 px-4 sm:gap-6 sm:px-8 lg:h-[84px] lg:px-10">
          <Link
            href="/"
            aria-label={`${business.name} — ir al inicio`}
            className="rounded-sm"
            onClick={closeMenu}
          >
            <Logo />
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-7 lg:flex"
          >
            {business.navigation.map((item) => {
              const active =
                item.href !== "/#proceso" && pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative py-2 text-[13px] font-bold transition-colors ${
                    active ? "text-ink" : "text-ink/65 hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-amber-deep transition-transform duration-200 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={business.contact.telHref}
              className="hidden items-center gap-2 rounded-sm px-2 py-2 text-[13px] font-extrabold text-ink transition-colors hover:text-amber-deep xl:inline-flex"
              aria-label={`Llamar al ${business.contact.phoneDisplay}`}
            >
              <PhoneIcon className="h-4 w-4" />
              {business.contact.phoneDisplay}
            </a>

            <div className="hidden lg:block">
              <WhatsAppButton
                message={whatsappMessages.general}
                label="WhatsApp"
                ariaLabel="Consultar por WhatsApp. Se abre WhatsApp en una pestaña nueva."
              />
            </div>

            <WhatsAppButton
              message={whatsappMessages.general}
              ariaLabel="Consultar por WhatsApp. Se abre WhatsApp en una pestaña nueva."
              iconOnly
              className="lg:hidden"
            />

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="inline-flex h-12 w-12 items-center justify-center rounded-[2px] border border-ink/15 text-ink transition-colors hover:border-ink/40 hover:bg-ink/[0.035] lg:hidden"
            >
              {open ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 top-[72px] z-40 bg-ink/35 md:top-[108px] lg:hidden"
          aria-hidden="true"
          onClick={closeMenu}
        />
      ) : null}

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full z-50 border-b border-line bg-paper shadow-[0_28px_45px_-30px_rgba(11,32,39,0.35)] transition-[opacity,transform] duration-200 lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          ref={menuRef}
          className="max-h-[calc(100dvh-72px)] overflow-y-auto px-5 pb-7 pt-2 sm:px-8 md:max-h-[calc(100dvh-108px)]"
        >
          <nav aria-label="Navegación móvil">
            <ul className="divide-y divide-line">
              {business.navigation.map((item) => {
                const active =
                  item.href !== "/#proceso" && pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className="flex min-h-14 items-center justify-between gap-4 py-3 font-display text-2xl text-ink sm:text-[28px]"
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`h-px w-8 ${
                          active ? "bg-amber-deep" : "bg-line"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-6 grid gap-3">
            <WhatsAppButton
              message={whatsappMessages.general}
              label="Consultar por WhatsApp"
              variant="green"
              className="w-full"
            />
            <a
              href={business.contact.telHref}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[2px] border border-ink/20 px-5 py-3 text-sm font-extrabold text-ink transition-colors hover:border-ink/50"
            >
              <PhoneIcon className="h-[18px] w-[18px]" />
              Llamar al {business.contact.phoneDisplay}
            </a>
          </div>

          <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-muted">
            <WhatsAppIcon className="h-4 w-4 text-[#1B6B4A]" />
            Contacto directo · {business.location.city}
          </p>
        </div>
      </div>
    </header>
  );
}
