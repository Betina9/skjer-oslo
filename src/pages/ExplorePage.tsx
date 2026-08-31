import { useState } from "react";
import EventCard from "../components/EventCard";
import { events } from "../data/events";
import type { EventCategory } from "../types/Event";
import CategoryButton from "../components/CategoryButton";
import heroImage from "../assets/Oslo_bilde.png";
import { Link } from "react-router-dom";
import {
  LayoutGrid,
  Music,
  Utensils,
  Palette,
  Trees,
  Search,
} from "lucide-react";

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

interface ExplorePageProps {
  savedEventIds: number[];
  onToggleSaved: (eventId: number) => void;
}

function ExplorePage({ savedEventIds, onToggleSaved }: ExplorePageProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    EventCategory | "all"
  >("all");

  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;

    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      <section
        className="relative overflow-hidden rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-red-300">
                Oppdag Oslo
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Hva skjer i Oslo?
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-gray-200">
                Finn konserter, kultur, mat og aktiviteter i byen.
              </p>
            </div>

            <div className="mt-8 max-w-2xl rounded-2xl bg-white/95 p-2 shadow-lg backdrop-blur">
              <label htmlFor="event-search" className="sr-only">
                Søk etter arrangementer
              </label>

              <div className="relative">
                <Search
                  size={20}
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="event-search"
                  type="search"
                  placeholder="Søk etter arrangement eller aktivitet..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white py-4 pl-12 pr-5 text-gray-900 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-12 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-950">
            Populært denne helgen
          </h2>

          <Link
            to="/events"
            className="rounded-md font-medium text-red-600 transition hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Se alle
          </Link>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.slice(0, 3).map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isSaved={savedEventIds.includes(event.id)}
                onToggleSaved={onToggleSaved}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-12 text-center">
            <h3 className="text-lg font-semibold text-gray-950">
              Ingen arrangementer funnet
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Prøv et annet søk eller velg en annen kategori.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default ExplorePage;
