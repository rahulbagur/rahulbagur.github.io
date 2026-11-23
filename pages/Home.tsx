import { Link } from "react-router-dom";
import { CaseCards } from "@/components/blocks/CaseCards";
import { ContactCTA } from "@/components/blocks/ContactCTA";
import { ExperienceTimeline } from "@/components/blocks/ExperienceTimeline";
import { Hero } from "@/components/blocks/Hero";
import { HowIWork } from "@/components/blocks/HowIWork";
import { ProofStrip } from "@/components/blocks/ProofStrip";
import { ToolMarquee } from "@/components/blocks/ToolMarquee";
import { whatBroke } from "@/content";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-[1120px] px-4 pb-10 sm:px-6 md:pb-24">
        <ProofStrip caption="Team Counsel numbers are hand-counted from the inbox and read from Salesforge and Instantly. CoinDCX figure is from my own records." />
      </section>
      <section className="mx-auto max-w-[1120px] px-4 pb-16 sm:px-6 md:pb-24">
        <ToolMarquee />
      </section>
      <section className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-display text-[28px] leading-[34px] font-medium md:text-[34px] md:leading-10">Selected work</h2>
        <p className="mt-3 max-w-[68ch] text-[17px] leading-[28px]">
          Six pieces of work, each with the numbers and the screenshots behind them.
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
        <p className="mt-3 max-w-[68ch] text-[17px] leading-[28px]">The same five steps on every motion I've run.</p>
        <div className="mt-10">
          <HowIWork />
        </div>
      </section>
      <section className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24">
        <h3 className="font-display text-[21px] leading-7 font-medium">What didn't work, and what I changed</h3>
        <ul className="mt-4 max-w-[68ch] list-disc space-y-2 pl-5 text-[17px] leading-[28px]">
          {whatBroke.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          <Link to="/work/retargeting-a-failed-offer" className="font-display hover:underline">
            Read the full story
          </Link>
        </p>
      </section>
      <section className="mx-auto max-w-[1120px] px-4 pb-16 sm:px-6 md:pb-24">
        <ContactCTA />
      </section>
    </>
  );
}
