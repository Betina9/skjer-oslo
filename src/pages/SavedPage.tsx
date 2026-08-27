import EventCard from "../components/EventCard";
import { events } from "../data/events";

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
      <h1 className="text-3xl font-bold">Mine planer</h1>

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
    </main>
  );
}

export default SavedPage;
