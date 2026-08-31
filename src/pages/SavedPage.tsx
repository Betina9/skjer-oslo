import EventCard from "../components/EventCard";
import { events } from "../data/events";
import { Link } from "react-router-dom";

interface SavedPageProps {
  savedEventIds: number[];
  onToggleSaved: (eventId: number) => void;
}

function SavedPage({ savedEventIds, onToggleSaved }: SavedPageProps) {
  const savedEvents = events.filter((event) =>
    savedEventIds.includes(event.id)
  );

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Mine planer</h1>

        <p className="mt-2 text-gray-600">
          {savedEvents.length === 1
            ? "1 arrangement lagret"
            : `${savedEvents.length} arrangementer lagret`}
        </p>
      </div>

      {savedEvents.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {savedEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isSaved={true}
              onToggleSaved={onToggleSaved}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-12 text-center">
          <h2 className="text-xl font-semibold text-gray-950">
            Ingen planer ennå
          </h2>

          <p className="mt-2 text-gray-600">
            Lagre arrangementer du har lyst til å dra på, så finner du dem her.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Utforsk arrangementer
          </Link>
        </div>
      )}
    </main>
  );
}

export default SavedPage;
