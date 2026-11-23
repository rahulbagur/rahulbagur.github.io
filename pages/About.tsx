import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { resumeHref } from "@/content";

export default function About() {
  useEffect(() => {
    document.title = "About | Rahul Bagur";
    return () => {
      document.title = "Rahul Bagur | GTM and revenue operations";
    };
  }, []);
  return (
    <article className="mx-auto max-w-[68ch] px-4 py-16 sm:px-6 md:py-24">
      <h1 className="font-display text-[38px] leading-[42px] font-medium md:text-[56px] md:leading-[60px]">About</h1>
      <div className="mt-6 space-y-4 text-[17px] leading-[28px]">
        <p>
          I'm Rahul. I work on GTM and revenue operations in Bengaluru. Most of the job is lists, sending setup, CRM rules, and the weekly numbers that say whether any of it worked.
        </p>
        <p>
          At Team Counsel I'm the first GTM hire. I set up the outbound, ran the campaigns, onboarded the SDR, and counted the meetings by hand when the tools couldn't. Before that I spent about two years in sales and partnerships at CoinDCX and Pickcel.
        </p>
        <p>
          When I need a tool that isn't already there, I build it by directing AI coding agents. I debug with them, and I make sure I understand how each part works. That's how the daily research brief and the lead tools got made.
        </p>
        <p>I studied aerospace engineering at Jain University (B.Tech, 2022).</p>
        <p>I'm looking at GTM Strategy and Ops, RevOps, Growth Ops and Sales Ops roles.</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/work">See the work</Link>
        </Button>
        <Button variant="outline" asChild>
          <a href={resumeHref}>Download resume</a>
        </Button>
      </div>
    </article>
  );
}
