import { howIWork } from "@/content";

export function HowIWork() {
  return (
    <div className="max-w-[68ch] space-y-4 text-[17px] leading-[28px]">
      {howIWork.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
