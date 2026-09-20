type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 8.5h2V5.5h-2c-2.2 0-3.5 1.4-3.5 3.5v2H8.5v3H10.5V21h3v-6h2.1l.4-3h-2.5V9.2c0-.6.3-.7.5-.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6.5" y="10" width="2" height="7.5" fill="currentColor" />
      <circle cx="7.5" cy="6.8" r="1.3" fill="currentColor" />
      <path
        d="M11 17.5V10h2v1.1c.5-.8 1.3-1.3 2.4-1.3 1.8 0 3.1 1.2 3.1 3.5v4.2h-2v-3.9c0-1.1-.5-1.8-1.5-1.8-.8 0-1.5.5-1.8 1.2-.1.2-.1.5-.1.8v3.7h-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 5.8c-.6.3-1.3.5-2 .6.7-.4 1.3-1.1 1.6-2-.7.4-1.5.7-2.3.9A3.6 3.6 0 0 0 11.5 8.5c0 .3 0 .6.1.8-3-.1-5.6-1.6-7.4-3.8-.3.5-.5 1.1-.5 1.8 0 1.2.6 2.2 1.5 2.9-.6 0-1.1-.2-1.6-.4v.1c0 1.7 1.2 3.1 2.8 3.5-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.4 1.8 2.5 3.4 2.5A7.2 7.2 0 0 1 3 17.4a10.2 10.2 0 0 0 5.5 1.6c6.6 0 10.2-5.5 10.2-10.2v-.5c.7-.5 1.3-1.1 1.8-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FiveHundredPxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <text x="12" y="15.5" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="sans-serif">
        500
      </text>
    </svg>
  );
}

export function CameraIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 8h2.5l1.2-2h8.6l1.2 2H20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13.5" r="3.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8 12.5 2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.9 6.2 6.6.7-4.9 4.6 1.3 6.6L12 17.2l-5.9 3.4 1.3-6.6-4.9-4.6 6.6-.7L12 2.5Z" />
    </svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.5 6C4.9 6 3 8.1 3 10.7c0 2.4 1.7 4.3 4 4.3.3 0 .6 0 .8-.1-.5 1.6-1.8 2.9-3.4 3.5l.6 1.6c2.9-1 5-3.6 5-7.3V10.7C10 8.1 8.9 6 7.5 6Zm9 0c-2.6 0-4.5 2.1-4.5 4.7 0 2.4 1.7 4.3 4 4.3.3 0 .6 0 .8-.1-.5 1.6-1.8 2.9-3.4 3.5l.6 1.6c2.9-1 5-3.6 5-7.3V10.7C19 8.1 17.9 6 16.5 6Z" />
    </svg>
  );
}
