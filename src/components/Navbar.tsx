import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, CloseIcon, LogoMarkIcon, MenuIcon } from "./Icons";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/#about" },
  { label: "Portfolio", href: "/#portfolio", hasDropdown: true },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2">
          <LogoMarkIcon className="h-7 w-7 text-gold" />
          <span className="font-display text-lg font-semibold leading-none tracking-wide">
            CAMILLE
            <span className="block text-[0.6rem] font-sans font-medium tracking-[0.35em] text-white/60">
              CANVAL
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="flex items-center gap-1 text-sm text-white/80 transition hover:text-gold"
            >
              {link.label}
              {link.hasDropdown && <ChevronDownIcon className="h-3.5 w-3.5" />}
            </Link>
          ))}
        </nav>

        <Link
          to="/#contact"
          className="hidden rounded-full border border-white/25 px-5 py-2 text-sm text-white/90 transition hover:border-gold hover:text-gold md:inline-block"
        >
          Me contacter
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink px-5 pb-5 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-white/80 transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-white/25 px-5 py-2 text-center text-sm text-white/90"
          >
            Me contacter
          </Link>
        </nav>
      )}
    </header>
  );
}
