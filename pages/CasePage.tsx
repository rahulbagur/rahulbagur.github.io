import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Callout } from "@/components/blocks/Callout";
import { ContactCTA } from "@/components/blocks/ContactCTA";
import { ProofGallery } from "@/components/blocks/ProofGallery";
import { ProofStrip } from "@/components/blocks/ProofStrip";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { caseBySlug, email, nextCase } from "@/content";

export default function CasePage() {
  const { slug } = useParams();
  const study = slug ? caseBySlug(slug) : undefined;
  const next = slug ? nextCase(slug) : undefined;

  useEffect(() => {
    document.title = study ? `${study.title} | Rahul Bagur` : "Rahul Bagur | GTM and revenue operations";
    return () => {
      document.title = "Rahul Bagur | GTM and revenue operations";
    };
  }, [study]);

  if (!study) {
    return (
      <article className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6">
        <h1 className="font-display text-[34px] font-medium">That case is not on this site.</h1>
        <Link to="/work" className="mt-4 inline-block font-display">
          Back to the work
        </Link>
      </article>
    );
  }

  return (
    <article className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24">
      <p className="text-[15px] text-muted-foreground">
        <Link to="/work">Work</Link> / {study.title}
      </p>
      <h1 className="mt-4 max-w-[22em] font-display text-[38px] leading-[42px] font-medium text-pretty md:text-[56px] md:leading-[60px]">
        {study.title}
      </h1>
      <p className="mt-4 max-w-[68ch] text-[21px] leading-[30px]">{study.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      {study.meta ? <p className="mt-3 text-[15px] leading-[22px] text-muted-foreground">{study.meta}</p> : null}
      <div className="mt-8">
        <ProofStrip items={study.metrics} caption={study.metricCaption} />
      </div>
      <h2 className="mt-12 font-display text-[28px] leading-[34px] font-medium">Context</h2>
      <p className="mt-3 max-w-[68ch] text-[17px] leading-[28px]">{study.context}</p>
      <h2 className="mt-10 font-display text-[28px] leading-[34px] font-medium">Problem</h2>
      <p className="mt-3 max-w-[68ch] text-[17px] leading-[28px]">{study.problem}</p>
      <h2 className="mt-10 font-display text-[28px] leading-[34px] font-medium">What I did</h2>
      <ol className="mt-3 max-w-[68ch] list-decimal space-y-2 pl-5 text-[17px] leading-[28px]">
        {study.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <h2 className="mt-10 font-display text-[28px] leading-[34px] font-medium">Result</h2>
      <ul className="mt-3 max-w-[68ch] list-disc space-y-2 pl-5 text-[17px] leading-[28px]">
        {study.results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {study.note ? (
        <div className="mt-8">
          <Callout />
        </div>
      ) : null}
      {study.didntMove.length > 0 ? (
        <>
          <h2 className="mt-10 font-display text-[28px] leading-[34px] font-medium">What didn't move</h2>
          <ul className="mt-3 max-w-[68ch] list-disc space-y-2 pl-5 text-[17px] leading-[28px]">
            {study.didntMove.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      ) : null}
      {study.shots.length > 0 ? (
        <>
          <h2 className="mt-10 font-display text-[28px] leading-[34px] font-medium">Proof</h2>
          <div className="mt-4">
            <ProofGallery shots={study.shots} />
          </div>
        </>
      ) : study.slug === "coindcx-partner-vertical" ? (
        <p className="mt-8 text-[15px] leading-[22px] text-muted-foreground">Figures from my own records at CoinDCX.</p>
      ) : null}
      <p className="mt-12 max-w-[68ch] font-display text-[21px] leading-[30px]">{study.close}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button asChild>
          <a href={`mailto:${email}`}>Email me</a>
        </Button>
        {next ? (
          <Button variant="outline" asChild>
            <Link to={`/work/${next.slug}`}>Next case{study.slug === "outbound-engine" ? ": Multichannel tests" : ""}</Link>
          </Button>
        ) : (
          <Button variant="outline" asChild>
            <Link to="/work">Back to all work</Link>
          </Button>
        )}
      </div>
      <div className="mt-16">
        <ContactCTA />
      </div>
    </article>
  );
}
