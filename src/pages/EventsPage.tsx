import { useRef, useState } from "react";
import { Search } from "lucide-react";
import EventCard from "../components/EventCard";
import { events } from "../data/events";
import type { EventCategory } from "../types/Event";
import { categoryStyles } from "../data/categories";

interface EventsPageProps {
  savedEventIds: number[];
  onToggleSaved: (eventId: number) => void;
}

function EventsPage({ savedEventIds, onToggleSaved }: EventsPageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    EventCategory | "all"
  >("all");
  const eventsTopRef = useRef<HTMLDivElement>(null);
  const goToPage = (page: number) => {
    setCurrentPage(page);

    eventsTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const eventsPerPage = 25;

  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;

    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const currentEvents = filteredEvents.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div ref={eventsTopRef} className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
          Utforsk Oslo
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
          Alle arrangementer
        </h1>

        <p className="mt-3 text-gray-600">
          Finn konserter, kultur, mat og aktiviteter i Oslo.
        </p>

        <div className="relative mt-6">
          <Search
            size={20}
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <label htmlFor="events-search" className="sr-only">
            Søk etter arrangementer
          </label>

          <input
            id="events-search"
            type="search"
            placeholder="Søk etter arrangement eller sted..."
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setCurrentPage(1);
            }}
            className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-5 text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            aria-pressed={selectedCategory === "all"}
            onClick={() => {
              setSelectedCategory("all");
              setCurrentPage(1);
            }}
            className={`cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
              selectedCategory === "all"
                ? "bg-gray-950 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Alle
          </button>

          {Object.entries(categoryStyles).map(([category, style]) => (
            <button
              key={category}
              type="button"
              aria-pressed={selectedCategory === category}
              onClick={() => {
                setSelectedCategory(category as EventCategory);
                setCurrentPage(1);
              }}
              className={`cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                selectedCategory === category
                  ? style.className
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>

        {currentEvents.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isSaved={savedEventIds.includes(event.id)}
                onToggleSaved={onToggleSaved}
              />
            ))}
          </div>
        ) : (
          <div
            role="status"
            className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-12 text-center"
          >
            <h2 className="text-xl font-semibold text-gray-950">
              Ingen arrangementer funnet
            </h2>

            <p className="mt-2 text-gray-600">Prøv et annet søk.</p>
          </div>
        )}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => goToPage(Math.max(currentPage - 1, 1))}
            className="rounded-xl border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Forrige
          </button>

          <div className="flex items-center gap-2">
            {pageNumbers.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => goToPage(page)}
                aria-label={`Gå til side ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
                className={`h-10 min-w-10 cursor-pointer rounded-lg px-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  currentPage === page
                    ? "bg-red-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
            className="rounded-xl border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Neste
          </button>
        </div>
      </div>
    </main>
  );
}

export default EventsPage;
