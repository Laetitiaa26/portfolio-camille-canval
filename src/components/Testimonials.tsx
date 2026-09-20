import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../data/testimonials";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon, StarIcon } from "./Icons";
import Reveal from "./Reveal";

const AUTOPLAY_DELAY = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const goTo = (i: number) => setIndex((i + count) % count);
  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, count]);

  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="border-t border-white/10 bg-panel/40 py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">ILS EN PARLENT MIEUX QUE MOI</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">Ce qu'ils en pensent</h2>
        </Reveal>

        <Reveal delay={150} className="relative mt-12">
          <QuoteIcon className="mx-auto h-8 w-8 text-gold/40" />

          <div key={index} className="animate-[fadeIn_0.5s_ease]">
            <div className="mb-4 flex justify-center gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-gold" />
              ))}
            </div>

            <p className="font-display text-xl leading-relaxed text-white/90 sm:text-2xl">
              « {current.quote} »
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <img
                src={current.avatar}
                alt={current.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold">{current.name}</p>
                <p className="text-sm text-white/50">{current.role}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Témoignage précédent"
              className="text-white/50 transition hover:text-gold"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Voir le témoignage de ${t.name}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold" : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Témoignage suivant"
              className="text-white/50 transition hover:text-gold"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
