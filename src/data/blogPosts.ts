export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  content: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "5-conseils-photo-paysage",
    title: "5 trucs que j'applique (presque) à chaque paysage",
    excerpt:
      "Pas de recette magique, juste des habitudes qui reviennent souvent quand je pars shooter dehors.",
    date: "2026-08-12",
    readTime: "4 min",
    category: "Technique",
    coverImage:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    content: [
      "On me demande souvent quel matériel utiliser pour de belles photos de paysage. Honnêtement, ce n'est presque jamais ça le sujet. Voici ce qui revient vraiment, shooting après shooting.",
      "D'abord la lumière. Un endroit banal au lever du soleil vaut mieux qu'un endroit magnifique à midi. J'arrive sur place bien avant l'heure dorée, souvent 45 minutes avant, parfois plus si je ne connais pas le lieu.",
      "Ensuite, simplifier. Je me demande toujours ce que je veux que les gens regardent en premier. Si je ne peux pas répondre en une seconde, je recadre.",
      "Les lignes aident beaucoup aussi. Un chemin, une rivière, même une clôture. Ça guide l'œil sans qu'on s'en rende compte.",
      "Un truc bête mais que j'oublie encore parfois : ralentir. Regarder la scène deux minutes avant de sortir l'appareil. Ça évite de shooter la première idée qui passe.",
      "Et le dernier, celui que personne ne veut entendre : retourner plusieurs fois au même endroit. Mes photos préférées ne sont presque jamais du premier passage.",
    ],
  },
  {
    slug: "coulisses-shooting-portrait",
    title: "Ce qui se passe avant même de sortir l'appareil",
    excerpt:
      "Sur un portrait, la technique compte moins que ce qu'on croit. Le plus dur, c'est de mettre la personne à l'aise.",
    date: "2026-07-03",
    readTime: "5 min",
    category: "Portrait",
    coverImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Un bon portrait se joue souvent avant le premier déclic. Si la personne en face n'est pas à l'aise, ça se voit à l'image, peu importe le réglage.",
      "Je commence toujours par discuter, sans appareil en main. Ce qu'elle aime, pourquoi elle fait ce shooting, ce qui la stresse. Ça détend l'ambiance et ça me donne des indices sur les expressions à chercher plus tard.",
      "Techniquement, je préfère une lumière douce, une fenêtre plutôt qu'un flash en pleine face qui a tendance à braquer les gens. L'idée c'est que la personne oublie l'appareil, pas qu'elle le fixe.",
      "Et je shoote beaucoup entre les poses. Les vraies pauses, quand la personne pense qu'on ne prend plus rien. C'est souvent là que je trouve la meilleure photo de la séance.",
    ],
  },
  {
    slug: "materiel-voyage-indispensable",
    title: "Ce qui reste toujours dans mon sac en voyage",
    excerpt:
      "Après pas mal de voyages ratés côté bagages, voici ce que j'emporte systématiquement maintenant.",
    date: "2026-05-21",
    readTime: "3 min",
    category: "Matériel",
    coverImage: "airPlaneVoyage.jpg",
    content: [
      "Voyager avec du matos photo, c'est un compromis permanent entre tout emmener et pouvoir encore porter son sac. Voici ce qui reste, année après année.",
      "Un boîtier et deux focales fixes, pas de gros zoom. Plus léger, plus discret, et ça m'oblige à bouger pour cadrer au lieu de zoomer depuis le même endroit.",
      "Un petit trépied carbone. Pas le plus stable du marché, mais suffisant pour un coucher de soleil en pose longue sans se ruiner le dos.",
      "Des batteries et cartes mémoire en double. Toujours. J'ai appris à mes dépens qu'une batterie morte au mauvais moment, ça n'arrive jamais quand on s'y attend.",
      "Et une sauvegarde chaque soir sur disque externe, sans exception. Une carte mémoire perdue en voyage, ça ne se rattrape pas.",
    ],
  },
  {
    slug: "post-traitement-sans-exces",
    title: "Retoucher sans trahir la photo",
    excerpt:
      "Je ne cherche jamais à transformer une image, juste à retrouver ce que j'ai vu sur le moment.",
    date: "2026-03-09",
    readTime: "4 min",
    category: "Technique",
    coverImage: "Paysage1.jpg",
    content: [
      "La retouche divise. Certains trouvent que ça dénature la photo, d'autres que ça fait partie du travail. Je suis quelque part entre les deux.",
      "Pour moi, l'objectif n'est jamais de changer une scène mais de retrouver ce que j'ai ressenti en la prenant. Le capteur ne capte pas toujours exactement ce que l'œil voit.",
      "Concrètement je fais ça en trois passes : d'abord les corrections techniques (exposition, balance des blancs), puis l'ambiance générale, et enfin quelques retouches locales si vraiment nécessaire.",
      "La meilleure retouche, c'est souvent celle qu'on ne remarque même pas.",
    ],
  },
];

export function getPostBySlug(slug: string | undefined) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
