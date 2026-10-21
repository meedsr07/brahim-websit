import { business } from "@/lib/business";

export default function Logo({ tone = "dark", className = "" }) {
  const isLight = tone === "light";

  return (
    <span className={`inline-flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}>
      <svg
        viewBox="0 0 44 44"
        className={`h-9 w-9 shrink-0 sm:h-10 sm:w-10 ${isLight ? "text-cream" : "text-ink"}`}
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M22 4.5C16.3 13 12 18.3 12 24.3a10 10 0 0 0 20 0c0-6-4.3-11.3-10-19.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="M23.8 13.5 16.6 24.4h4.8l-1.3 7 7.3-10.9h-4.8l1.2-7Z"
          fill="#D98E26"
        />
      </svg>
      <span className="hidden min-w-0 flex-col min-[320px]:flex">
        <span
          className={`whitespace-nowrap text-[10px] font-extrabold uppercase leading-tight tracking-[0.1em] min-[360px]:text-[10.5px] sm:text-[12px] ${
            isLight ? "text-cream" : "text-ink"
          }`}
        >
          {business.brand.line1}
        </span>
        <span className="mt-1 flex items-center gap-2">
          <span className="h-px w-5 shrink-0 bg-amber-deep" aria-hidden="true" />
          <span
            className={`whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.38em] min-[360px]:text-[10px] ${
              isLight ? "text-cream/65" : "text-muted"
            }`}
          >
            {business.brand.line2}
          </span>
        </span>
      </span>
    </span>
  );
}
