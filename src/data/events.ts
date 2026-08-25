import type { Event } from "../types/Event";
import rockefellerImage from "../assets/rockefeller.png";
import youngstorgetImage from "../assets/youngstorget.png";
import munchImage from "../assets/munch.png";

export const events: Event[] = [
  {
    id: 1,
    title: "Konsert på Rockefeller",
    category: "music",
    venue: "Rockefeller",
    date: "2026-08-29",
    time: "20:00",
    price: 450,
    image: rockefellerImage,
  },
  {
    id: 2,
    title: "Street Food Festival",
    category: "food",
    venue: "Youngstorget",
    date: "2026-08-30",
    time: "12:00",
    price: 0,
    image: youngstorgetImage,
  },
  {
    id: 3,
    title: "Kunst på MUNCH",
    category: "culture",
    venue: "MUNCH",
    date: "2026-08-30",
    time: "10:00",
    price: 180,
    image: munchImage,
  },
];
