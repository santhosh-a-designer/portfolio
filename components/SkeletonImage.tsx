"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Classes on the image itself */
  imgClassName?: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
  draggable?: boolean;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  /** Light shimmer for the brutalist pages. Dark pages can pass `dark`. */
  tone?: "light" | "dark";
  onError?: () => void;
};

/** Image that holds a skeleton until the file has decoded, then fades in. */
export default function SkeletonImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  loading = "lazy",
  decoding = "async",
  draggable = false,
  style,
  imgStyle,
  tone = "light",
  onError,
}: Props) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {!ready && !failed && (
        <div
          className={`pointer-events-none absolute inset-0 ${
            tone === "dark" ? "image-load-shimmer" : "skeleton-shine"
          }`}
          aria-hidden
        />
      )}
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 p-3 text-center">
          <span className="font-mono text-[10px] uppercase text-zinc-500">{alt}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding={decoding}
          draggable={draggable}
          onLoad={() => setReady(true)}
          onError={() => {
            setFailed(true);
            onError?.();
          }}
          style={{ width: "100%", height: "100%", ...imgStyle }}
          className={`transition-opacity duration-500 ease-out motion-reduce:transition-none ${
            ready ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
