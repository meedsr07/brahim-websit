import Link from "next/link";
import { business, whatsappMessages, whatsappUrl } from "@/lib/business";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[2px] py-3 text-[13px] font-extrabold tracking-[0.045em] transition-colors duration-200 sm:text-sm";

export const buttonVariants = {
  amber: "bg-amber text-ink hover:bg-[#f2b45b] active:bg-[#dd982f]",
  dark: "bg-ink text-cream hover:bg-ink-soft",
  outline:
    "border border-ink/20 bg-transparent text-ink hover:border-ink/60 hover:bg-ink/[0.035]",
  lightOutline:
    "border border-cream/25 bg-transparent text-cream hover:border-cream/65 hover:bg-white/[0.06]",
  green: "bg-[#1B6B4A] text-white hover:bg-[#15563c]",
};

export function LinkButton({
  href,
  children,
  variant = "outline",
  className = "",
  showArrow = false,
  ...props
}) {
  return (
    <Link
      href={href}
      className={cx(
        base,
        buttonVariants[variant],
        "px-5 sm:px-6",
        className,
      )}
      {...props}
    >
      {children}
      {showArrow ? (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </Link>
  );
}

export function WhatsAppButton({
  message = whatsappMessages.general,
  label = "Consulta per WhatsApp",
  ariaLabel,
  variant = "amber",
  className = "",
  iconOnly = false,
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        ariaLabel ||
        `${label}. Se abre WhatsApp en una pestaña nueva.`
      }
      className={cx(
        base,
        buttonVariants[variant],
        iconOnly ? "w-12 min-w-12 px-0" : "px-5 sm:px-6",
        className,
      )}
    >
      <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
      {iconOnly ? null : <span>{label}</span>}
    </a>
  );
}

export function PhoneButton({
  label = "Truca ara",
  variant = "outline",
  className = "",
  showIcon = true,
  showNumber = false,
}) {
  return (
    <a
      href={business.contact.telHref}
      aria-label={`Truca al ${business.contact.phoneDisplay}`}
      className={cx(
        base,
        buttonVariants[variant],
        "px-5 sm:px-6",
        className,
      )}
    >
      {showIcon ? <PhoneIcon className="h-[18px] w-[18px] shrink-0" /> : null}
      <span>{showNumber ? business.contact.phoneDisplay : label}</span>
    </a>
  );
}

export function TextLink({
  href,
  children,
  className = "",
  tone = "dark",
  external = false,
}) {
  const classes = cx(
    "group inline-flex items-center gap-2 text-sm font-extrabold underline-offset-[5px] transition-colors",
    tone === "light"
      ? "text-cream hover:text-amber"
      : "text-ink hover:text-amber-deep",
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
