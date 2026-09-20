import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, LinkedInIcon, LogoMarkIcon, TwitterIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <Link to="/" className="flex items-center gap-2">
          <LogoMarkIcon className="h-5 w-5 text-gold" />
          <span className="font-display text-sm font-semibold tracking-wide">CAMILLE CANVAL</span>
        </Link>

        <p className="text-xs text-white/40">© {new Date().getFullYear()} Camille Canval. Tous droits réservés.</p>

        <div aria-hidden="true" className="flex items-center gap-5 text-white/40">
          <InstagramIcon className="h-4 w-4" />
          <FacebookIcon className="h-4 w-4" />
          <TwitterIcon className="h-4 w-4" />
          <LinkedInIcon className="h-4 w-4" />
        </div>
      </div>
    </footer>
  );
}
