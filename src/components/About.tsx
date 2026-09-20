import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { value: 5, suffix: "+", label: "Années d'Expérience" },
  { value: 150, suffix: "+", label: "Projets Réalisés" },
  { value: 25, suffix: "+", label: "Prix Remportés" },
  { value: 75, suffix: "+", label: "Clients Satisfaits" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-panel/40 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="overflow-hidden rounded-2xl">
          <img
            src="photographe femme.avif"
            alt="Portrait du photographe"
            className="h-[420px] w-full object-cover"
          />
        </Reveal>

        <Reveal delay={150}>
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">QUI SUIS-JE</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">Bonjour, je suis Camille Canval</h2>
          <p className="mt-5 max-w-lg text-white/60">
            J'ai commencé avec un vieux reflex de mes parents, un peu par hasard. Aujourd'hui je
            photographie des mariages, des portraits, des voyages. Ce que j'aime, c'est le moment juste
            avant ou juste après la pose, quand les gens oublient l'appareil.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={250 + i * 100}>
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  className="font-display text-3xl font-semibold text-gold"
                />
                <p className="mt-1 text-xs text-white/50">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
