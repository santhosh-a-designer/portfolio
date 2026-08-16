"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback, useState } from "react";

const IMAGE_ENTER =
  "z-[1] transition-[opacity] duration-700 ease-out motion-reduce:transition-none";
const SHIMMER_HIDE = "duration-500 ease-out motion-reduce:transition-none";

type Props = ImageProps & {
  /** `fill` images must sit in a `relative` parent that defines size. */
  fill?: boolean;
};

/**
 * Shimmer while loading, then a slow fade-in so large hero assets don’t pop or jump.
 * Non-`fill`: reserves space via aspect ratio; `fill`: siblings must be in a sized box.
 */
export default function FadeInImage({
  className,
  fill,
  onLoad,
  width,
  height,
  alt,
  ...rest
}: Props) {
  const [ready, setReady] = useState(false);

  const onDone = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      setReady(true);
      onLoad?.(e);
    },
    [onLoad]
  );

  const placeholder = (
    <div
      className={
        "image-load-shimmer pointer-events-none absolute inset-0 z-0 bg-[#0f1318] " +
        SHIMMER_HIDE +
        (ready ? " opacity-0" : " opacity-100")
      }
      aria-hidden
    />
  );

  const imageOpacity = ready ? "opacity-100" : "opacity-0";

  if (fill) {
    return (
      <>
        {placeholder}
        <Image
          {...rest}
          alt={alt}
          fill
          onLoad={onDone}
          className={`${IMAGE_ENTER} ${imageOpacity} ${className ?? ""}`.trim()}
        />
      </>
    );
  }

  const w = typeof width === "number" ? width : 1;
  const h = typeof height === "number" ? height : 1;

  return (
    <div className="relative w-full" style={{ aspectRatio: `${w} / ${h}` }}>
      {placeholder}
      <Image
        {...rest}
        alt={alt}
        fill
        onLoad={onDone}
        className={`${IMAGE_ENTER} ${imageOpacity} object-contain ${className ?? ""}`.trim()}
      />
    </div>
  );
}
