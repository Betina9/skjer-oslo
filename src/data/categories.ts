import type { EventCategory } from "../types/Event";

export const categoryStyles: Record<
  EventCategory,
  {
    label: string;
    className: string;
  }
> = {
  music: {
    label: "Musikk",
    className: "bg-pink-100 text-pink-700",
  },
  food: {
    label: "Mat og drikke",
    className: "bg-orange-100 text-orange-700",
  },
  culture: {
    label: "Kultur",
    className: "bg-purple-100 text-purple-700",
  },
  activity: {
    label: "Aktiviteter",
    className: "bg-green-100 text-green-700",
  },
};
