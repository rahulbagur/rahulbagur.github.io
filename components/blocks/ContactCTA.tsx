import { Button } from "@/components/ui/button";
import { email, resumeHref } from "@/content";

export function ContactCTA() {
  return (
    <div className="border-y border-border bg-card px-6 py-12 md:px-10">
      <h2 className="font-display text-[28px] leading-[34px] font-medium text-pretty md:text-[34px] md:leading-10">
        I'm in Bengaluru. Email is fastest.
      </h2>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild>
          <a href={`mailto:${email}`}>Email me</a>
        </Button>
        <Button variant="outline" asChild>
          <a href={resumeHref}>Download resume</a>
        </Button>
      </div>
    </div>
  );
}
