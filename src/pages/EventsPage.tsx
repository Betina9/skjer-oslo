import { useState } from "react";
import EventCard from "../components/EventCard";
import { events } from "../data/events";

interface EventsPageProps {
  savedEventIds: number[];
  onToggleSaved: (eventId: number) => void;
}

function EventsPage({ savedEventIds, onToggleSaved }: EventsPageProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const eventsPerPage = 25;

  const startIndex = (currentPage - 1) * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;

  const currentEvents = events.slice(startIndex, endIndex);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
          Utforsk Oslo
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
          Alle arrangementer
        </h1>

        <p className="mt-3 text-gray-600">
          Finn konserter, kultur, mat og aktiviteter i Oslo.
        </p>

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
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
            className="rounded-xl border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Forrige
          </button>

          <span className="text-sm font-medium text-gray-600">
            Side {currentPage} av {totalPages}
          </span>

          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) => Math.min(page + 1, totalPages))
            }
            className="rounded-xl border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Neste
          </button>
        </div>
      </div>
    </main>
  );
}

export default EventsPage;
