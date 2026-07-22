"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallback?: string;
  containerClassName?: string;
  showSkeleton?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  fallback = "/placeholder.jpg",
  className,
  containerClassName,
  showSkeleton = true,
  fill,
  sizes,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Default sizes إذا كان fill بدون sizes
  const defaultSizes = fill && !sizes 
    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    : sizes;

  return (
    <div className={cn("relative overflow-hidden bg-gray-100", containerClassName)}>
      {/* Skeleton Loader */}
      {isLoading && showSkeleton && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}

      <Image
        src={hasError ? fallback : src}
        alt={alt}
        fill={fill}
        sizes={defaultSizes}
        className={cn(
          "transition-all duration-500",
          isLoading ? "scale-105 blur-sm opacity-0" : "scale-100 blur-0 opacity-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        quality={75}
        loading={props.priority ? "eager" : "lazy"}
        {...props}
      />
    </div>
  );
}