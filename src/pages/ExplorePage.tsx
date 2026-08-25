import { useState } from "react";
import EventCard from "../components/EventCard";
import { events } from "../data/events";
import type { EventCategory } from "../types/Event";
import CategoryButton from "../components/CategoryButton";
import { LayoutGrid, Music, Utensils, Palette, Trees } from "lucide-react";

const categories = [
  {
    label: "Alle",
    value: "all",
    color: "bg-gray-950 text-white",
    icon: LayoutGrid,
  },
  {
    label: "Musikk",
    value: "music",
    color: "bg-pink-100 text-pink-800",
    icon: Music,
  },
  {
    label: "Mat og drikke",
    value: "food",
    color: "bg-orange-100 text-orange-800",
    icon: Utensils,
  },
  {
    label: "Kultur",
    value: "culture",
    color: "bg-purple-100 text-purple-800",
    icon: Palette,
  },
  {
    label: "Aktivitet",
    value: "activity",
    color: "bg-green-100 text-green-800",
    icon: Trees,
  },
];

function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<
    EventCategory | "all"
  >("all");
  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-600">
              Oppdag Oslo
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Hva skjer i Oslo?
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Finn konserter, kultur, mat og aktiviteter i byen.
            </p>
          </div>

          <div className="mt-8 max-w-2xl">
            <label htmlFor="event-search" className="sr-only">
              Søk etter arrangementer
            </label>

            <input
              id="event-search"
              type="search"
              placeholder="Søk etter arrangement eller aktivitet..."
              className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => (
              <CategoryButton
                key={category.value}
                label={category.label}
                icon={category.icon}
                color={category.color}
                isActive={selectedCategory === category.value}
                onClick={() =>
                  setSelectedCategory(category.value as EventCategory | "all")
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-950">
            Populært denne helgen
          </h2>

          <button className="text-sm font-medium text-gray-600 hover:text-gray-950">
            Se alle
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ExplorePage;
