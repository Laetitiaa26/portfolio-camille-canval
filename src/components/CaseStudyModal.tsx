import { useEffect } from "react";
import { CASE_STUDY } from "../data/caseStudy";
import { CloseIcon, QuoteIcon } from "./Icons";

type CaseStudyModalProps = {
  onClose: () => void;
};

export default function CaseStudyModal({ onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-4 z-10 rounded-full bg-ink/70 p-2 text-white/70 transition hover:text-gold"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <img
          src={CASE_STUDY.coverImage}
          alt={CASE_STUDY.title}
          className="h-56 w-full object-cover sm:h-72"
        />

        <div className="px-6 py-8 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">ÉTUDE DE CAS</p>
          <h2 className="mt-3 font-display text-2xl font-semibold leading-snug sm:text-3xl">
            {CASE_STUDY.title}
          </h2>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/50">
            <span>Client : {CASE_STUDY.client}</span>
            <span>{CASE_STUDY.type}</span>
            <span>{CASE_STUDY.location}</span>
          </div>

          <p className="mt-6 leading-relaxed text-white/75">{CASE_STUDY.context}</p>

          <h3 className="mt-8 font-display text-lg font-semibold text-gold">L'approche</h3>
          <div className="mt-4 space-y-5">
            {CASE_STUDY.approach.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 text-xs font-semibold text-gold">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{step.title}</p>
                  <p className="mt-1 text-sm text-white/60">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-8 font-display text-lg font-semibold text-gold">Le résultat</h3>
          <p className="mt-3 leading-relaxed text-white/75">{CASE_STUDY.result}</p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {CASE_STUDY.gallery.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                className="aspect-square w-full rounded-lg object-cover"
              />
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-gold/20 bg-ink/40 p-5">
            <QuoteIcon className="h-5 w-5 text-gold/50" />
            <p className="mt-2 font-display text-lg text-white/90">
              « {CASE_STUDY.quote.text} »
            </p>
            <p className="mt-2 text-sm text-white/50">— {CASE_STUDY.quote.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
