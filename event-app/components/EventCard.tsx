import Link from "next/link";

// Props som kortet behöver
interface EventCardProps {
  id: number;
  title: string;
  category: string;
  isFree: boolean;
}

// Komponenten tar emot props
export default function EventCard({
  id,
  title,
  category,
  isFree,
}: EventCardProps) {
  return (
    // Länken öppnar eventets egen sida
    <Link href={`/events/${id}`}>
      <article className="rounded-xl bg-white p-6 text-slate-900 shadow hover:shadow-lg">
        {/* Eventets titel */}
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>

        {/* Eventets kategori */}
        <p className="mb-4">Kategori: {category}</p>

        {/* Visar olika text beroende på isFree */}
        {isFree ? (
          <p className="font-semibold text-green-600">Gratis event</p>
        ) : (
          <p className="font-semibold text-pink-600">Betalt event</p>
        )}

        {/* Klickbar text */}
        <p className="mt-4 text-sm font-semibold text-blue-600">
          Läs mer →
        </p>
      </article>
    </Link>
  );
}