import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { width: 36, height: 36, text: "text-base" },
  md: { width: 44, height: 44, text: "text-lg" },
  lg: { width: 56, height: 56, text: "text-xl" },
} as const;

export function Logo({
  size = "md",
  showText = true,
  className = "",
}: LogoProps) {
  const resolvedSize = sizeMap[size] ?? sizeMap.md;

  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label={siteConfig.name}
    >
      <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.jpeg"
          alt={siteConfig.shortName}
          width={resolvedSize.width}
          height={resolvedSize.height}
          className="h-auto w-auto object-cover"
          priority
        />
      </div>

      {showText ? (
        <div className="flex flex-col leading-tight">
          <span className={`font-bold text-sky-950 ${resolvedSize.text}`}>
            {siteConfig.shortName}
          </span>
          <span className="text-[10px] font-medium tracking-wide text-sky-600">
            لنقل الأثاث
          </span>
        </div>
      ) : null}
    </Link>
  );
}