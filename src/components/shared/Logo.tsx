import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  variant?: "light" | "dark";
}

const sizeMap = {
  sm: { box: "w-10 h-10", text: "text-base", sub: "text-[9px]", img: 40 },
  md: { box: "w-12 h-12", text: "text-lg", sub: "text-[10px]", img: 48 },
  lg: { box: "w-14 h-14", text: "text-xl", sub: "text-xs", img: 56 },
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
      <div
        className={`${s.box} relative overflow-hidden rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-105 ${
          isLight
            ? "ring-2 ring-white/20 shadow-md"
            : "ring-2 ring-blue-100 shadow-md shadow-blue-700/10"
        }`}
      >
        <Image
          src="/logo.jpeg"
          alt={siteConfig.shortName}
          width={s.img}
          height={s.img}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {showText ? (
        <div className="flex flex-col leading-tight">
          <span className={`font-black ${s.text} ${isLight ? "text-white" : "text-blue-950"}`}>
            {siteConfig.shortName}
          </span>
          <span className={`${s.sub} font-semibold tracking-wide ${isLight ? "text-blue-300" : "text-blue-600"}`}>
            لنقل الاثاث
          </span>
        </div>
      ) : null}
    </Link>
  );
}