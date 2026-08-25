import type { Event } from "../types/Event";
import { categoryStyles } from "../data/categories";

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  const category = categoryStyles[event.category];

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <button
          type="button"
          aria-label={`Lagre ${event.title}`}
          className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-2 text-lg shadow-sm backdrop-blur hover:bg-white"
        >
          ♡
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
            <p className="text-sm font-medium text-gray-900">{event.date}</p>

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
