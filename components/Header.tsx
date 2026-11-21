import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/#work", label: "Work" },
  { to: "/#about", label: "About" },
  { to: "/#contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header" data-open={open ? "true" : "false"}>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="wrap bar">
        <Link className="wordmark" to="/" onClick={() => setOpen(false)}>
          Rahul Bagur
        </Link>
        <button
          ref={buttonRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls={navId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id={navId} aria-label="Sections">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
