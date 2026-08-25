import type { Event } from "../types/Event";

export const events: Event[] = [
  {
    id: 1,
    title: "Konsert på Rockefeller",
    category: "music",
    venue: "Rockefeller",
    date: "2026-08-29",
    time: "20:00",
    price: 450,
    image: "/images/concert.jpg",
  },
  {
    id: 2,
    title: "Street Food Festival",
    category: "food",
    venue: "Youngstorget",
    date: "2026-08-30",
    time: "12:00",
    price: 0,
    image: "/images/street-food.jpg",
  },
  {
    id: 3,
    title: "Kunst på MUNCH",
    category: "culture",
    venue: "MUNCH",
    date: "2026-08-30",
    time: "10:00",
    price: 180,
    image: "/images/munch.jpg",
  },
];
