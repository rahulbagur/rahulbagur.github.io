import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { email, github, linkedin, resumeHref } from "@/content";

const links = [
  { to: "/work", label: "Work" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1120px] px-4 py-10 text-center sm:px-6">
      <p className="font-display text-[17px] font-medium">Rahul Bagur, Bengaluru</p>
      <nav className="mt-4 flex flex-wrap justify-center gap-4" aria-label="Footer">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="font-display text-[15px]">
            {link.label}
          </Link>
        ))}
        <a href={resumeHref} className="font-display text-[15px]">
          Resume
        </a>
      </nav>
      <div className="mt-4 flex justify-center gap-4 text-[15px]">
        <a href={linkedin}>LinkedIn</a>
        <a href={github}>GitHub</a>
        <a href={`mailto:${email}`}>Email</a>
      </div>
      <Separator className="my-6" />
      <p className="text-[13px] leading-[18px] text-muted-foreground">© 2026 Rahul Bagur</p>
    </footer>
  );
}
