import { Link } from "react-router-dom";
import { CaseCards } from "@/components/blocks/CaseCards";
import { ContactCTA } from "@/components/blocks/ContactCTA";
import { ExperienceTimeline } from "@/components/blocks/ExperienceTimeline";
import { Hero } from "@/components/blocks/Hero";
import { HowIWork } from "@/components/blocks/HowIWork";
import { ToolMarquee } from "@/components/blocks/ToolMarquee";
import { whatBroke } from "@/content";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-[1120px] px-4 pb-16 sm:px-6 md:pb-24">
        <ToolMarquee />
      </section>
      <section className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-display text-[28px] leading-[34px] font-medium md:text-[34px] md:leading-10">Selected work</h2>
        <p className="mt-3 max-w-[68ch] text-[17px] leading-[28px]">
          Six pieces of work. The numbers and the screenshots are on each page.
        </p>
        <div className="mt-8">
          <CaseCards />
        </div>
      </section>
      <section className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-display text-[28px] leading-[34px] font-medium md:text-[34px] md:leading-10">Experience</h2>
        <div className="mt-8">
          <ExperienceTimeline />
        </div>
      </section>
      <section id="how-i-work" className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-display text-[28px] leading-[34px] font-medium md:text-[34px] md:leading-10">How I work</h2>
        <div className="mt-10">
          <HowIWork />
        </div>
      </section>
      <section className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-display text-[21px] leading-7 font-medium">What didn't work</h2>
        <div className="mt-4 max-w-[68ch] space-y-3 text-[17px] leading-[28px]">
          {whatBroke.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <p className="mt-4">
          <Link to="/work/retargeting-a-failed-offer" className="font-display hover:underline">
            The ECP offer, in full
          </Link>
        </p>
      </section>
      <section className="mx-auto max-w-[1120px] px-4 pb-16 sm:px-6 md:pb-24">
        <ContactCTA />
      </section>
    </>
  );
}
