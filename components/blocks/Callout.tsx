import { salesforgeZeros } from "@/content";

export function Callout({ heading = "Why Salesforge shows 0" }: { heading?: string }) {
  return (
    <aside className="border-l border-primary bg-primary-soft px-4 py-4">
      <h2 className="font-display text-[19px] leading-[26px] font-medium">{heading}</h2>
      <p className="mt-2 max-w-[68ch] text-[17px] leading-[28px]">{salesforgeZeros}</p>
    </aside>
  );
}
