import { useState } from "react";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import { useInView } from "../hooks/useInView";

type Category = "Landscape" | "Portrait" | "Wildlife" | "Travel" | "Street" | "Commercial";

type PhotoItem = {
  id: string;
  title: string;
  category: Category;
  src: string;
  span: "tall" | "wide" | "normal";
};

const FILTERS: Array<Category | "All"> = [
  "All",
  "Landscape",
  "Portrait",
  "Wildlife",
  "Travel",
  "Street",
  "Commercial",
];

const FILTER_LABELS: Record<(typeof FILTERS)[number], string> = {
  All: "Tout",
  Landscape: "Paysage",
  Portrait: "Portrait",
  Wildlife: "Faune",
  Travel: "Voyage",
  Street: "Rue",
  Commercial: "Commercial",
};

const PHOTOS: PhotoItem[] = [
  {
    id: "waterfall",
    title: "Vers les Chutes",
    category: "Travel",
    span: "tall",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "zebra",
    title: "Rayures Sauvages",
    category: "Wildlife",
    span: "normal",
    src: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "arch",
    title: "Évasion Insulaire",
    category: "Travel",
    span: "tall",
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "Lion",
    title: "Crinière du Roi",
    category: "Wildlife",
    span: "wide",
    src: "FauneLion.jpg",
  },
  {
    id: "foret",
    title: "Reflets matinaux",
    category: "Landscape",
    span: "normal",
    src: "foret.jpg",
  },
  {
    id: "sable",
    title: "Grains de Sable",
    category: "Travel",
    span: "normal",
    src: "Voyages.jpg",
  },
  {
    id: "Cat",
    title: "Regard félin",
    category: "Wildlife",
    span: "normal",
    src: "Faunechat.jpg",
  },
  {
    id: "portrait",
    title: "Heure Dorée",
    category: "Portrait",
    span: "tall",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "Plane",
    title: "Un petit vol",
    category: "Travel",
    span: "tall",
    src: "airPlaneVoyage.jpg",
  },
  {
    id: "Girafe",
    title: "Une petite Grimace ?",
    category: "Wildlife",
    span: "tall",
    src: "FauneG.jpg",
  },
  {
    id: "Traversée",
    title: "Traversée",
    category: "Travel",
    span: "tall",
    src: "voyage8.jpg",
  },
  {
    id: "Femme",
    title: "Éclat de Minuit",
    category: "Portrait",
    span: "normal",
    src: "Portraitfille2.jpg",
  },
  {
    id: "camera",
    title: "L'Équipement",
    category: "Commercial",
    span: "normal",
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=80",
  },

  {
    id: "street",
    title: "Pluie en Ville",
    category: "Street",
    span: "normal",
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "Italie",
    title: "Couleurs d'Italie",
    category: "Travel",
    span: "wide",
    src: "voyage5.jpg",
  },
  {
    id: "Turtle",
    title: "Ballet Marin",
    category: "Wildlife",
    span: "wide",
    src: "FauneTortue.jpg",
  },
  {
    id: "Enfant",
    title: "Regard d'Innocence",
    category: "Portrait",
    span: "normal",
    src: "Portrait.jpg",
  },
  {
    id: "Parfum",
    title: "Collection de Parfum",
    category: "Commercial",
    span: "wide",
    src: "Parfum1.jpg",
  },
  {
    id: "Ruelles",
    title: "Lueurs de Ruelle",
    category: "Street",
    span: "tall",
    src: "rues3.jpg",
  },
  {
    id: "Boat",
    title: "Cap au Large",
    category: "Travel",
    span: "tall",
    src: "voyage4.jpg",
  },
  {
    id: "Fille",
    title: "Douceur Enfantine",
    category: "Portrait",
    span: "tall",
    src: "PortraitFille.jpg",
  },
  {
    id: "Baskets",
    title: "La paire !",
    category: "Commercial",
    span: "normal",
    src: "Baskets.jpg",
  },
  {
    id: "LignesJaunes",
    title: "Avenue Urbaine",
    category: "Street",
    span: "tall",
    src: "Rues.jpg",
  },
  {
    id: "carte",
    title: "Cap sur l'Aventure",
    category: "Travel",
    span: "normal",
    src: "voyage2.jpg",
  },
  {
    id: "Shark",
    title: "En eaux profondes",
    category: "Wildlife",
    span: "tall",
    src: "FauneRequin.jpg",
  },
  {
    id: "EnfantPetit",
    title: "Petit Trésor",
    category: "Portrait",
    span: "normal",
    src: "Portrait3.jpg",
  },
  {
    id: "bijoux",
    title: "Avec Elégance",
    category: "Commercial",
    span: "normal",
    src: "bijoux.jpg",
  },
  {
    id: "Ruelles2",
    title: "Marché Endormi",
    category: "Street",
    span: "tall",
    src: "Rues1.jpg",
  },
  {
    id: "lake",
    title: "Reflets Brumeux",
    category: "Landscape",
    span: "wide",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "Barque",
    title: "Sérénité Alpine",
    category: "Travel",
    span: "wide",
    src: "voyage.jpg",
  },
  {
    id: "Homme2",
    title: "Contraste",
    category: "Portrait",
    span: "normal",
    src: "Portraith.jpg",
  },
  {
    id: "Sac",
    title: "Une touche de style",
    category: "Commercial",
    span: "normal",
    src: "commercial2.jpg",
  },
  {
    id: "Rue",
    title: "Traversée Urbaine",
    category: "Street",
    span: "normal",
    src: "rue.jpg",
  },
  {
    id: "mountains",
    title: "Lumière des Sommets",
    category: "Landscape",
    span: "normal",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=700&q=80",
  },
];

const SPAN_CLASSES: Record<PhotoItem["span"], string> = {
  tall: "row-span-2 [content-visibility:auto] [contain-intrinsic-size:220px_456px]",
  wide: "sm:col-span-2 [content-visibility:auto] [contain-intrinsic-size:600px_220px]",
  normal: "[content-visibility:auto] [contain-intrinsic-size:220px_220px]",
};

type PortfolioFigureProps = {
  photo: PhotoItem;
  index: number;
  onClick: () => void;
};

function PortfolioFigure({ photo, index, onClick }: PortfolioFigureProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const delay = (index % 8) * 60;

  return (
    <figure
      ref={ref}
      onClick={onClick}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={`group relative cursor-pointer overflow-hidden rounded-xl bg-panel transition-all duration-500 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${SPAN_CLASSES[photo.span]}`}
    >
      <img
        src={photo.src}
        alt={photo.title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-4 opacity-0 transition group-hover:opacity-100">
        <span className="text-xs font-semibold tracking-widest text-gold">
          {FILTER_LABELS[photo.category]}
        </span>
        <span className="font-display text-lg">{photo.title}</span>
      </figcaption>
    </figure>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visible = active === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === active);
  const selectedPhoto = selectedIndex !== null ? visible[selectedIndex] : null;

  const showPrev = () =>
    setSelectedIndex((i) => (i === null ? null : (i - 1 + visible.length) % visible.length));
  const showNext = () => setSelectedIndex((i) => (i === null ? null : (i + 1) % visible.length));

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <Reveal className="mb-10 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-gold">TRAVAUX SÉLECTIONNÉS</p>
        <h2 className="mt-3 font-display text-4xl font-semibold">Portfolio</h2>
      </Reveal>

      <div className="mb-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-white/10 pb-6 text-sm">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => {
              setActive(filter);
              setSelectedIndex(null);
            }}
            className={`relative pb-1 uppercase tracking-wide transition ${
              active === filter ? "text-gold" : "text-white/50 hover:text-white"
            }`}
          >
            {FILTER_LABELS[filter]}
            {active === filter && <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gold" />}
          </button>
        ))}
      </div>

      <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-4 grid-flow-dense">
        {visible.map((photo, index) => (
          <PortfolioFigure
            key={photo.id}
            photo={photo}
            index={index}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedPhoto && (
        <Lightbox
          photo={{
            src: selectedPhoto.src,
            title: selectedPhoto.title,
            category: FILTER_LABELS[selectedPhoto.category],
          }}
          onClose={() => setSelectedIndex(null)}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  );
}
