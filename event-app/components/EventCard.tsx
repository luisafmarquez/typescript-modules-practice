// Interface beskriver vilka props komponenten ska få
interface EventCardProps {
  title: string;
  category: string;
  isFree: boolean;
}

// Komponent som tar emot props
export default function EventCard({
  title,
  category,
  isFree,
}: EventCardProps) {
  return (
    // Detta är kortet för ett event
    <article className="rounded-xl bg-white p-6 text-slate-900 shadow">
      {/* Visar eventets titel */}
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>

      {/* Visar kategory */}
      <p className="mb-4">Kategori: {category}</p>

      {/* Conditional rendering: visar olika text beroende på isFree */}
      {isFree ? (
        <p className="font-semibold text-green-600">Gratis event</p>
      ) : (
        <p className="font-semibold text-red-600">Betalt event</p>
      )}
    </article>
  );
}