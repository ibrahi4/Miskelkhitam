import Link from "next/link";
import { Truck } from "lucide-react";
import { siteConfig } from "@/config/site";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  variant?: "light" | "dark";
}

const sizeMap = {
  sm: { icon: "w-8 h-8", text: "text-base", sub: "text-[9px]", iconSize: "w-4 h-4" },
  md: { icon: "w-10 h-10", text: "text-lg", sub: "text-[10px]", iconSize: "w-5 h-5" },
  lg: { icon: "w-12 h-12", text: "text-xl", sub: "text-xs", iconSize: "w-6 h-6" },
} as const;

export function Logo({
  size = "md",
  showText = true,
  className = "",
  variant = "dark",
}: LogoProps) {
  const s = sizeMap[size] ?? sizeMap.md;
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label={siteConfig.name}
    >
      <div className={`${s.icon} rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
        isLight
          ? "bg-white/15 border border-white/20"
          : "bg-green-700 shadow-md shadow-green-700/20"
      }`}>
        <Truck className={`${s.iconSize} ${isLight ? "text-green-300" : "text-white"}`} />
      </div>

      {showText ? (
        <div className="flex flex-col leading-tight">
          <span className={`font-black ${s.text} ${isLight ? "text-white" : "text-green-950"}`}>
            {siteConfig.shortName}
          </span>
          <span className={`${s.sub} font-semibold tracking-wide ${isLight ? "text-green-300" : "text-green-600"}`}>
            لنقل الاثاث
          </span>
        </div>
      ) : null}
    </Link>
  );
}