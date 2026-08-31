import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, MapPin, Heart } from "lucide-react";
import { events } from "../data/events";
import { categoryStyles } from "../data/categories";
import { formatDate } from "../utils/formatDate";

interface EventDetailsPageProps {
  savedEventIds: number[];
  onToggleSaved: (eventId: number) => void;
}

function EventDetailsPage({
  savedEventIds,
  onToggleSaved,
}: EventDetailsPageProps) {
  const { id } = useParams();

  const event = events.find((event) => event.id === Number(id));

  if (!event) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-950">
          Arrangementet finnes ikke
        </h1>
      </main>
    );
  }

  const isSaved = savedEventIds.includes(event.id);

  const category = categoryStyles[event.category];

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray600 transition hover:text-gray-950"
      >
        <ArrowLeft size={18} />
        Tilbake til arrangementer
      </Link>
      <div className="overflow-hidden rounded-2xl">
        <img
          src={event.image}
          alt={event.title}
          className="h-[420px] w-full object-cover"
        />
      </div>

      <div className="mt-8">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${category.className}`}
        >
          {category.label}
        </span>

        <h1 className="text-3xl font-bold text-gray-950">{event.title}</h1>

        <button
          type="button"
          onClick={() => onToggleSaved(event.id)}
          aria-pressed={isSaved}
          className={`mt-4 inline-flex cursor-pointer rounded-xl border px-4 py-2 text-sm font-semibold transition ${
            isSaved
              ? "border-red-200 bg-red-50 text-red-600"
              : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Heart
            size={18}
            fill={isSaved ? "currentColor" : "none"}
            aria-hidden="true"
          />
        </button>

        <div className="mt-6 flex flex-wrap gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarDays size={20} />
            <span>{formatDate(event.date)}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span>Kl. {event.time}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>{event.venue}</span>
          </div>
        </div>

        <div className="mt-8 max-w-3xl">
          <h2 className="text-xl font-semibold text-gray-950">
            Om arrangementet
          </h2>

          <p className="mt-3 leading-7 text-gray-600">{event.description}</p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="font-semibold text-gray-950">
              Praktisk informasjon
            </h2>

            <p className="mt-2 text-sm text-gray-600">{event.address}</p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-950">Tilgjengelighet</h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {event.accessibility}
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6">
          <div>
            <p className="text-sm text-gray-500">Pris</p>

            <p className="mt-1 text-2xl font-bold text-gray-950">
              {event.price === 0 ? "Gratis" : `${event.price} kr`}
            </p>
          </div>

          {event.price > 0 && event.ticketUrl && (
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Kjøp billett
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

export default EventDetailsPage;
