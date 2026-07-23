export const PHONE_TEL = "tel:+18604540283";
export const PHONE_DISPLAY = "(860) 454-0283";
export const ADDRESS = "500 Talcottville Rd Suite 5, Vernon, CT 06066";
export const ADDRESS_SHORT = "500 Talcottville Rd · Suite 5 · Vernon, CT";
export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS);
export const MAPS_EMBED =
  "https://www.google.com/maps?q=" + encodeURIComponent(ADDRESS) + "&output=embed";
export const IG_URL = "https://www.instagram.com/cruzn_retro/?hl=en";
export const IG_HANDLE = "@cruzn_retro";
export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Cruzn+Retro+Vernon+CT";

export const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tue – Sat", time: "10:00 AM – 6:00 PM" },
  { day: "Sunday", time: "12:00 PM – 5:00 PM" },
] as const;

export const NAV_LINKS = [
  { href: "#shop", label: "Shop" },
  { href: "#about", label: "About" },
  { href: "#trade", label: "Buy / Sell / Trade" },
  { href: "#drops", label: "Instagram" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
] as const;

export const TRADE_PILLARS = [
  {
    title: "Buy",
    text: "Hunt rotating shelves of hand-picked games, figures, and collectibles.",
  },
  {
    title: "Sell",
    text: "Cash offers on retro games, cards, toys, and pop-culture pieces.",
  },
  {
    title: "Trade",
    text: "Swap what you’ve outgrown for the grail you’ve been chasing.",
  },
] as const;

export const REVIEWS = [
  {
    quote:
      "Awesome store with a great vibe. Loads of selections between retro figures and games and even DVDs and VHS. There is a gaming area with retro consoles and arcade cabinets for free. Ramses was a pleasure to talk with.",
    who: "Ismael Garcia",
  },
  {
    quote:
      "Very sleek setup, excellently displayed products, and a wide assortment across generations and types. Definitely worth a visit — glad one of these stores opened in my town.",
    who: "Robert Busque",
  },
  {
    quote:
      "Awesome store with full-size arcade cabs and lots of retro goodies. Cruz is a very awesome dude. Glad I stopped by — check it out if you are in the area.",
    who: "Capt Fwiffo",
  },
] as const;
