import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { resumeHref } from "@/content";
const links = [
  { to: "/work", label: "Work" },
  { to: "/experience", label: "Experience" },
  { to: "/#how-i-work", label: "How I work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const linkClass =
  "relative font-display text-[15px] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:bg-current before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-display text-[17px] font-medium">
          Rahul Bagur
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Sections">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <a href={resumeHref}>Resume</a>
          </Button>
          <Sheet>
            <SheetTrigger className="inline-flex size-11 items-center justify-center rounded-md border border-border lg:hidden" aria-label="Open menu">
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent title="Menu">
              <Link to="/" className="font-display text-lg font-medium">
                Rahul Bagur
              </Link>
              <nav className="mt-6 flex flex-col gap-4" aria-label="Mobile">
                {links.map((link) => (
                  <SheetClose key={link.to} asChild>
                    <Link to={link.to} className="font-display text-lg">
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <Button asChild className="mt-6 sm:hidden">
                <a href={resumeHref}>Resume</a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
