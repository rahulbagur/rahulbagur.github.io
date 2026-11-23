import type { Shot } from "@/content";

export function proofSrc(file: string, ext: "png" | "webp") {
  return `${import.meta.env.BASE_URL}proof/${file.replace(/\.png$/, "")}.${ext}`;
}

export function Picture({
  shot,
  eager = false,
  className,
}: {
  shot: Shot;
  eager?: boolean;
  className?: string;
}) {
  return (
    <picture>
      <source srcSet={proofSrc(shot.file, "webp")} type="image/webp" />
      <img
        src={proofSrc(shot.file, "png")}
        alt={shot.alt}
        width={shot.w}
        height={shot.h}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
}
