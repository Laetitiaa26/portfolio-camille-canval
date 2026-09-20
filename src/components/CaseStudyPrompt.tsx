import { useEffect, useRef, useState } from "react";
import CaseStudyModal from "./CaseStudyModal";
import { CloseIcon } from "./Icons";

const SHOW_AT = 0.18;
const HIDE_AT = 0.6;
const SESSION_KEY = "case-study-prompt-seen";

export default function CaseStudyPrompt() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const dismissedRef = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      dismissedRef.current = true;
      return;
    }

    let ticking = false;

    const dismiss = () => {
      if (dismissedRef.current) return;
      dismissedRef.current = true;
      sessionStorage.setItem(SESSION_KEY, "1");
      setLeaving(true);
      setTimeout(() => setVisible(false), 400);
    };

    const handleScroll = () => {
      if (ticking || dismissedRef.current) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

        if (!dismissedRef.current && progress >= SHOW_AT && progress < HIDE_AT) {
          setVisible(true);
        } else if (progress >= HIDE_AT) {
          dismiss();
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    dismissedRef.current = true;
    sessionStorage.setItem(SESSION_KEY, "1");
    setLeaving(true);
    setTimeout(() => setVisible(false), 400);
  };

  const handleOpen = () => {
    setModalOpen(true);
    dismissedRef.current = true;
    sessionStorage.setItem(SESSION_KEY, "1");
    setLeaving(true);
    setTimeout(() => setVisible(false), 400);
  };

  return (
    <>
      {visible && (
        <div
          className={`fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full border border-gold/30 bg-panel/95 py-2 pl-4 pr-2 shadow-xl backdrop-blur transition-all duration-400 sm:bottom-8 sm:left-8 ${
            leaving ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <button
            type="button"
            onClick={handleOpen}
            className="text-sm text-white/85 transition hover:text-gold"
          >
            Voir une étude de cas <span className="text-gold">→</span>
          </button>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Fermer"
            className="rounded-full p-1 text-white/40 transition hover:text-white/80"
          >
            <CloseIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {modalOpen && <CaseStudyModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
