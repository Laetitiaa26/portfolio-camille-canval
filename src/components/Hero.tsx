import { CameraIcon, FacebookIcon, InstagramIcon, LinkedInIcon, PlayIcon, TwitterIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">PHOTOGRAPHE</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
            Je capture
            <br />vos meilleurs moments
          </h1>
          <p className="mt-6 max-w-md text-white/60">
            Portraits, mariages, voyages. J'aime les photos qui ressemblent vraiment aux gens, pas les
            poses figées.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#portfolio"
              className="rounded-md bg-gold px-7 py-3 text-sm font-semibold text-ink transition hover:bg-gold-light"
            >
              Voir le Portfolio
            </a>
            <span className="flex items-center gap-2 text-sm text-white/85">
              <PlayIcon className="h-9 w-9" />
              Voir la Bande Démo
            </span>
          </div>

          <div aria-hidden="true" className="mt-10 flex items-center gap-5 text-white/40">
            <InstagramIcon className="h-5 w-5" />
            <FacebookIcon className="h-5 w-5" />
            <TwitterIcon className="h-5 w-5" />
            <LinkedInIcon className="h-5 w-5" />
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="accueil.jpg"
              alt="Photographe capturant un coucher de soleil en montagne"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden h-28 w-28 items-center justify-center rounded-full border border-gold/40 bg-ink/90 text-center sm:flex">
            <div className="flex flex-col items-center gap-1 text-[0.6rem] font-semibold uppercase tracking-widest text-gold">
              <span>Primé</span>
              <CameraIcon className="h-5 w-5" />
              <span>& Reconnu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
