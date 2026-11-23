import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExperienceTimeline } from "@/components/blocks/ExperienceTimeline";
import { resumeHref } from "@/content";

const skills = [
  "outbound sequencing",
  "A/B testing",
  "ICP and list building",
  "CRM design and hygiene",
  "funnel reporting and MIS",
  "SDR enablement",
  "partner programmes",
];

const toolRows = [
  ["Sequencing", "Instantly, Salesforge"],
  ["CRM", "Zoho CRM, Zoho SalesIQ"],
  ["Enrichment and outreach", "Apollo.io, LinkedIn Sales Navigator"],
  ["Data and campaigns", "Databricks, MoEngage"],
  ["Workspace", "Google Workspace, Zoho Vault"],
];

export default function Experience() {
  useEffect(() => {
    document.title = "Experience | Rahul Bagur";
    return () => {
      document.title = "Rahul Bagur | GTM and revenue operations";
    };
  }, []);
  return (
    <article className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="font-display text-[38px] leading-[42px] font-medium md:text-[56px] md:leading-[60px]">Experience</h1>
        <Button variant="outline" asChild>
          <a href={resumeHref}>Download resume</a>
        </Button>
      </div>
      <div className="mt-10">
        <ExperienceTimeline full />
      </div>
      <h2 className="mt-16 font-display text-[28px] leading-[34px] font-medium">Skills</h2>
      <h3 className="mt-6 font-display text-[19px] font-medium">GTM and RevOps</h3>
      <ul className="mt-2 list-disc pl-5 text-[17px] leading-[28px]">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <h2 className="mt-12 font-display text-[28px] leading-[34px] font-medium">Tools by function</h2>
      <table className="mt-4 w-full max-w-3xl text-left text-[17px] leading-[28px]">
        <tbody>
          {toolRows.map(([fn, tools]) => (
            <tr key={fn} className="border-b border-border">
              <th className="py-3 pr-4 font-display font-medium">{fn}</th>
              <td className="py-3">{tools}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="mt-12 font-display text-[28px] leading-[34px] font-medium">Building with AI</h2>
      <p className="mt-3 max-w-[68ch] text-[17px] leading-[28px]">
        I ship working tools by directing AI coding agents (Claude, Gemini CLI), debug with them, and learn the concepts underneath. SQL for data pulls.
      </p>
      <h2 className="mt-12 font-display text-[28px] leading-[34px] font-medium">Education</h2>
      <p className="mt-3 text-[17px] leading-[28px]">B.Tech, Aerospace Engineering, Jain University, 2022.</p>
      <Button variant="outline" asChild className="mt-10">
        <a href={resumeHref}>Download resume</a>
      </Button>
    </article>
  );
}
