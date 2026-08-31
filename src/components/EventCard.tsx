import { Link } from "react-router-dom";
import type { Event } from "../types/Event";
import { categoryStyles } from "../data/categories";
import { formatDate } from "../utils/formatDate";

interface EventCardProps {
  event: Event;
  isSaved: boolean;
  onToggleSaved: (eventId: number) => void;
}

function EventCard({ event, isSaved, onToggleSaved }: EventCardProps) {
  const category = categoryStyles[event.category];

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md has-[.event-link:focus-visible]:ring-4 has-[.event-link:focus-visible]:ring-red-500 has-[.event-link:focus-visible]:ring-offset-2">
      <div className="relative">
        <Link
          to={`/events/${event.id}`}
          className="event-link block focus:outline-none"
          aria-label={`Se detaljer for ${event.title}`}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <img
              src={event.image}
              alt=""
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        <button
          type="button"
          aria-pressed={isSaved}
          onClick={() => onToggleSaved(event.id)}
          aria-label={
            isSaved
              ? `Fjern ${event.title} fra mine planer`
              : `Lagre ${event.title} i mine planer`
          }
          className={`absolute right-3 top-3 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/90 text-lg shadow-sm backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
            isSaved ? "text-red-600" : "text-gray-700"
          }`}
        >
          {isSaved ? "♥" : "♡"}
        </button>
      </div>
      <div className="p-5">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${category.className}`}
        >
          {category.label}
        </span>

        <h2 className="mt-3 text-xl font-semibold text-gray-950">
          {event.title}
        </h2>

        <p className="mt-1 text-sm text-gray-600">{event.venue}</p>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-gray-900">
              {formatDate(event.date)}
            </p>

            <p className="text-sm text-gray-500">Kl. {event.time}</p>
          </div>

          <p className="text-sm font-semibold text-gray-900">
            {event.price === 0 ? "Gratis" : `${event.price} kr`}
          </p>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
