import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SALON = {
  name: "Salão de Beleza Perfil",
  shortName: "Perfil",
  phone: "551239346770",
  phoneDisplay: "(12) 3934-6770",
  city: "São José dos Campos",
  facebookUrl: "https://www.facebook.com/169405203259171",
  image: {
    url: "https://images.pexels.com/photos/27165074/pexels-photo-27165074.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    alt: "Salão espaçoso e elegante com móveis sofisticados e vegetação.",
    photographer: "Wilcle Nunes",
    photographerUrl: "https://www.pexels.com/@wilcle-nunes-38713774",
  },
};

export const whatsappLink = (msg?: string) =>
  `https://wa.me/${SALON.phone}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
