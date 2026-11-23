import { Button } from "@/components/ui/button";
import { email, linkedin, resumeHref } from "@/content";

export function ContactCTA() {
  return (
    <div className="border-y border-border bg-card px-6 py-12 md:px-10">
      <h2 className="font-display text-[28px] leading-[34px] font-medium text-pretty md:text-[34px] md:leading-10">
        Hiring for GTM, RevOps, Growth Ops or Sales Ops?
      </h2>
      <p className="mt-3 max-w-[68ch] text-[17px] leading-[28px]">I'm in Bengaluru. Email is fastest.</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild>
          <a href={`mailto:${email}`}>Email me</a>
        </Button>
        <Button variant="outline" asChild>
          <a href={linkedin}>LinkedIn</a>
        </Button>
        <a href={resumeHref} className="font-display text-[15px] underline-offset-4 hover:underline">
          Download resume
        </a>
      </div>
    </div>
  );
}
