"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ModalImageWithSkeletonProps {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  shimmerClassName?: string;
}

export default function ModalImageWithSkeleton({
  src,
  alt,
  fill = true,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "object-contain p-2",
  shimmerClassName = "skeleton-shine",
}: ModalImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <>
      {!isLoaded && (
        <div
          className={`pointer-events-none absolute inset-0 z-10 ${shimmerClassName}`}
          aria-hidden="true"
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-500 ease-out motion-reduce:transition-none ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </>
  );
}
