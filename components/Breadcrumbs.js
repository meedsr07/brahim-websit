import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Fil d'Ariadna" className="text-xs font-semibold text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-line">
                  /
                </span>
              ) : null}
              {isLast ? (
                <span aria-current="page" className="text-ink/70">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-ink"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
