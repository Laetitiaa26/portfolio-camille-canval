export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Léa Fontaine",
    role: "Shooting mariage",
    quote:
      "On avait peur d'être mal à l'aise devant l'appareil, au final on a limite oublié qu'elle était là. Les photos sont hyper naturelles.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Marc Dubreuil",
    role: "Portrait corporate",
    quote:
      "Rapide, pro, et le rendu est nickel. Franchement on a eu plusieurs retours positifs sur les photos du site depuis.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Sophie Marchand",
    role: "Séance famille",
    quote:
      "Mes enfants ne tiennent jamais en place pour une photo. Elle a réussi à en tirer un truc de fou, je ne sais toujours pas comment.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Thomas Nguyen",
    role: "Shooting voyage",
    quote:
      "On lui a laissé carte blanche pendant le voyage. Résultat : des photos qu'on n'aurait jamais pensé prendre nous-mêmes.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];
