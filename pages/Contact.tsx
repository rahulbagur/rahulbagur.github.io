import { useEffect } from "react";
import { email, linkedin, resumeHref } from "@/content";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Rahul Bagur";
    return () => {
      document.title = "Rahul Bagur | GTM and revenue operations";
    };
  }, []);
  return (
    <article className="mx-auto max-w-[1120px] px-4 py-16 sm:px-6 md:py-24">
      <h1 className="font-display text-[38px] leading-[42px] font-medium md:text-[56px] md:leading-[60px]">Contact</h1>
      <div className="mt-6 max-w-[68ch] space-y-4 text-[17px] leading-[28px]">
        <p>I'm in Bengaluru. Email is the fastest way to reach me.</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          <a href={linkedin}>linkedin.com/in/rahulbagur</a>
        </p>
        <p>
          <a href={resumeHref}>Download resume</a>
        </p>
      </div>
    </article>
  );
}
