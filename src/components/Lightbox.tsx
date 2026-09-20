import { useEffect } from "react";
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from "./Icons";

type LightboxPhoto = {
  src: string;
  title: string;
  category: string;
};

type LightboxProps = {
  photo: LightboxPhoto;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({ photo, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-4 top-4 text-white/70 transition hover:text-gold sm:right-8 sm:top-8"
      >
        <CloseIcon className="h-8 w-8" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Photo précédente"
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white/70 transition hover:text-gold sm:left-6"
      >
        <ChevronLeftIcon className="h-9 w-9" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Photo suivante"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 transition hover:text-gold sm:right-6"
      >
        <ChevronRightIcon className="h-9 w-9" />
      </button>

      <figure
        className="flex max-h-full max-w-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.title}
          className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl"
        />
        <figcaption className="mt-4 text-center">
          <span className="text-xs font-semibold tracking-widest text-gold">{photo.category}</span>
          <span className="mt-1 block font-display text-xl text-white">{photo.title}</span>
        </figcaption>
      </figure>
    </div>
  );
}
