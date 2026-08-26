import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, MapPin } from "lucide-react";
import { events } from "../data/events";
import { categoryStyles } from "../data/categories";

function EventDetailsPage() {
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

        <div className="mt-6 flex flex-wrap gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarDays size={20} />
            <span>{event.date}</span>
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
        <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6">
          <div>
            <p className="text-sm text-gray-500">Pris</p>

            <p className="mt-1 text-2xl font-bold text-gray-950">
              {event.price === 0 ? "Gratis" : `${event.price} kr`}
            </p>
          </div>

          <button
            type="button"
            className="cursor-pointer rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Kjøp billett
          </button>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{event?.venue}</p>
    </main>
  );
}

export default EventDetailsPage;
