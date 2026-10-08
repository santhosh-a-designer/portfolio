const ICON_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons";

/** Brand logo from simple-icons CDN */
export default function TechIcon({ slug }: { slug: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${ICON_CDN}/${slug}.svg`}
      alt=""
      width={20}
      height={20}
      className="w-5 h-5 shrink-0 object-contain"
      loading="lazy"
      aria-hidden
      onError={(e) => {
        (e.target as HTMLImageElement).style.opacity = "0.3";
      }}
    />
  );
}
