import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export function Breadcrumb({ items, variant = "dark" }: BreadcrumbProps) {
  const isLight = variant === "light";

  const baseColor = isLight ? "text-slate-500" : "text-green-200/70";
  const hoverColor = isLight ? "hover:text-green-700" : "hover:text-white";
  const activeColor = isLight ? "text-green-950" : "text-white";

  return (
    <nav
      aria-label="التنقل"
      className={`flex items-center gap-1.5 text-sm flex-wrap ${baseColor}`}
    >
      <Link
        href="/"
        className={`flex items-center gap-1 transition-colors ${hoverColor}`}
        aria-label="الرئيسية"
      >
        <Home className="w-3.5 h-3.5" />
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5">
          <ChevronLeft className="w-3.5 h-3.5 opacity-50" />
          {item.href && index < items.length - 1 ? (
            <Link href={item.href} className={`transition-colors ${hoverColor}`}>
              {item.label}
            </Link>
          ) : (
            <span className={`font-medium ${activeColor}`}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}