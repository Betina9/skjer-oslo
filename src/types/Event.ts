export type EventCategory = "music" | "food" | "culture" | "activity";

export interface Event {
  id: number;
  title: string;
  category: EventCategory;
  venue: string;
  date: string;
  time: string;
  price: number;
  image: string;
}
