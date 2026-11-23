import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Callout } from "@/components/blocks/Callout";
import { ContactCTA } from "@/components/blocks/ContactCTA";
import { ProofGallery } from "@/components/blocks/ProofGallery";
import { Button } from "@/components/ui/button";
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
        <h1 className="font-display text-[34px] font-medium">That page isn't here.</h1>
        <Link to="/work" className="mt-4 inline-block font-display">
          Back to the work
        </Link>
      </article>
    );
  }

  return (
    <article className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24">
      <p className="text-[15px] text-muted-foreground">
        <Link to="/work">Work</Link>
        {" / "}
        {study.title}
      </p>
      <h1 className="mt-4 max-w-[18em] font-display text-[38px] leading-[42px] font-medium text-pretty md:text-[56px] md:leading-[60px]">
        {study.title}
      </h1>
      {study.meta ? <p className="mt-3 text-[15px] leading-[22px] text-muted-foreground">{study.meta}</p> : null}
      <div className="mt-6 max-w-[68ch] space-y-4 text-[17px] leading-[28px]">
        {study.story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {study.note ? (
        <div className="mt-8">
          <Callout />
        </div>
      ) : null}
      {study.shots.length > 0 ? (
        <div className="mt-10">
          <h2 className="font-display text-[21px] leading-7 font-medium">Screenshots</h2>
          <div className="mt-4">
            <ProofGallery shots={study.shots} />
          </div>
        </div>
      ) : null}
      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild>
          <a href={`mailto:${email}`}>Email me</a>
        </Button>
        {next ? (
          <Button variant="outline" asChild>
            <Link to={`/work/${next.slug}`}>Next: {next.title}</Link>
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
