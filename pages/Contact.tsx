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
      <div className="mt-8 max-w-xl rounded-[10px] border border-border bg-card p-6 text-[17px] leading-[28px]">
        <p>
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className="mt-2">
          LinkedIn: <a href={linkedin}>linkedin.com/in/rahulbagur</a>
        </p>
        <p className="mt-2">
          Resume: <a href={resumeHref}>PDF</a>
        </p>
        <p className="mt-2">Location: Bengaluru, India</p>
        <p className="mt-4">Email is fastest.</p>
      </div>
    </article>
  );
}
