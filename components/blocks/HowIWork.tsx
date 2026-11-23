import { howIWork } from "@/content";

export function HowIWork() {
  return (
    <ol className="mx-auto max-w-2xl space-y-8">
      {howIWork.map((step, index) => (
        <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
          <span className="font-display text-[21px] font-medium text-primary tabular-nums">{index + 1}</span>
          <div>
            <h3 className="font-display text-[19px] leading-[26px] font-medium md:text-[21px] md:leading-7">{step.title}</h3>
            <p className="mt-2 max-w-[68ch] text-[17px] leading-[28px]">{step.copy}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
