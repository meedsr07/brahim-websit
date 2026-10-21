"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

  // Lock body scroll while the menu is open and keep keyboard focus inside it.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () => {
      const menuItems = Array.from(
        menuRef.current?.querySelectorAll("a[href], button, summary") || [],
      );

      return [toggleRef.current, ...menuItems].filter(
        (element) => element && !element.hasAttribute("disabled"),
      );
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === toggleRef.current)) {
        event.preventDefault();
        last.focus();
        return;
      }

      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
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

  // Close the menu when rotating to desktop or navigating with browser history.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (event) => {
      if (event.matches) setOpen(false);
    };
    const onPopState = () => setOpen(false);

    desktop.addEventListener("change", onDesktop);
    window.addEventListener("popstate", onPopState);
    return () => {
      desktop.removeEventListener("change", onDesktop);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((value) => !value), []);

  return (
    <>
      {/*
        Keep the sticky bar as a direct child of the page flow so it really
        sticks while scrolling. The overlay and mobile panel are fixed
        siblings rendered outside it: this keeps `position: fixed` relative to
        the viewport on iOS/Safari and keeps the toggle above the backdrop.
      */}
      <header className="sticky top-0 z-50">
        {/* ── Desktop top bar ── */}
        <div className="hidden bg-ink text-cream/80 md:block">
          <div className="mx-auto flex h-9 w-full max-w-[1240px] items-center justify-between px-8 text-[11px] font-semibold tracking-[0.08em] lg:px-10">
            <p className="flex items-center gap-2">
              <MapPinIcon className="h-3.5 w-3.5 text-amber" />
              <span>
                {business.location.city}, {business.location.region}
              </span>
            </p>
            <div className="flex items-center gap-5">
              <span className="text-cream/55">Electricitat i lampisteria</span>
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

        {/* ── Main navigation bar ── */}
        <div className="border-b border-line bg-paper">
          <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-2 px-4 sm:gap-6 sm:px-8 lg:h-[84px] lg:px-10">
            <Link
              href="/"
              aria-label={`${business.name} — ves a l'inici`}
              className="inline-flex min-h-11 min-w-0 shrink items-center rounded-sm"
              onClick={closeMenu}
            >
              <Logo />
            </Link>

            {/* Desktop nav */}
            <nav
              aria-label="Navegació principal"
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
                    className={`group relative flex min-h-11 items-center text-[13px] font-bold transition-colors ${active ? "text-ink" : "text-ink/65 hover:text-ink"
                      }`}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left bg-amber-deep transition-transform duration-200 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          }`}
                      />
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Right-side actions */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              {/* Phone — desktop only */}
              <a
                href={business.contact.telHref}
                className="hidden min-h-11 items-center gap-2 rounded-sm px-2.5 py-2 text-[13px] font-extrabold text-ink transition-colors hover:text-amber-deep xl:inline-flex"
                aria-label={`Truca al ${business.contact.phoneDisplay}`}
              >
                <PhoneIcon className="h-4 w-4" />
                {business.contact.phoneDisplay}
              </a>

              {/* WhatsApp — full button on desktop */}
              <div className="hidden lg:block">
                <WhatsAppButton
                  message={whatsappMessages.general}
                  label="WhatsApp"
                  ariaLabel="Consulta per WhatsApp. WhatsApp s'obre en una pestanya nova."
                />
              </div>

              {/* WhatsApp — icon-only on tablets; hidden on phones because the
                  sticky contact bar already exposes WhatsApp there. */}
              <WhatsAppButton
                message={whatsappMessages.general}
                ariaLabel="Consulta per WhatsApp. WhatsApp s'obre en una pestanya nova."
                iconOnly
                className="max-sm:hidden lg:hidden"
              />

              {/* Mobile menu toggle */}
              <button
                ref={toggleRef}
                type="button"
                onClick={toggleMenu}
                aria-expanded={open}
                aria-controls="mobile-navigation"
                aria-label={open ? "Tanca el menú" : "Obre el menú"}
                className="relative z-[60] inline-flex h-11 w-11 shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-[2px] border border-ink/15 text-ink lg:hidden"
              >
                <span className="pointer-events-none">
                  {open ? (
                    <CloseIcon className="h-5 w-5" />
                  ) : (
                    <MenuIcon className="h-5 w-5" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Backdrop overlay ── */}
      {open && (
        <div
          className="fixed inset-0 top-[var(--header-offset)] z-40 bg-ink/35 lg:hidden"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}

      {/* ── Mobile navigation panel ── */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navegació mòbil"
        className={`fixed inset-x-0 bottom-0 top-[var(--header-offset)] z-50 overflow-hidden border-b border-line bg-paper shadow-[0_28px_45px_-30px_rgba(11,32,39,0.35)] lg:hidden ${
          open ? "block" : "hidden"
        }`}
        aria-hidden={!open}
      >
        <div
          ref={menuRef}
          className="h-full overflow-y-auto overscroll-contain px-5 pb-[calc(6rem+env(safe-area-inset-bottom))] pt-2 sm:px-8"
        >
          <nav aria-label="Navegació mòbil">
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
                        className={`h-px w-8 ${active ? "bg-amber-deep" : "bg-line"
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
              label="Consulta per WhatsApp"
              variant="green"
              className="w-full"
            />
            <a
              href={business.contact.telHref}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[2px] border border-ink/20 px-5 py-3 text-sm font-extrabold text-ink transition-colors hover:border-ink/50"
            >
              <PhoneIcon className="h-[18px] w-[18px]" />
              Truca al {business.contact.phoneDisplay}
            </a>
          </div>

          <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-muted">
            <WhatsAppIcon className="h-4 w-4 text-[#1B6B4A]" />
            Contacte directe · {business.location.city}
          </p>
        </div>
      </div>
    </>
  );
}
