import Header from "@/components/Header";
import events from "@/data/events.json";
import { notFound } from "next/navigation";

// Typ för params
interface EventPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Sidan är async eftersom params måste väntas in
export default async function EventPage({ params }: EventPageProps) {
  // Hämtar id från URL:en
  const { id } = await params;

  // Letar efter eventet med rätt id
  const event = events.find((item) => item.id === Number(id));

  // Om eventet inte finns visas not-found-sidan
  if (!event) {
    notFound();
  }

  return (
    <>
      {/* Menyn visas högst upp */}
      <Header />

      {/* Infosidan för ett event */}
      <main className="min-h-screen bg-pink-50 px-6 py-12">
        <article className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow">
          {/* Eventets titel */}
          <h1 className="mb-4 text-4xl font-bold text-slate-900">
            {event.title}
          </h1>

          {/* Eventets kategori */}
          <p className="mb-4 text-lg text-slate-700">
            Kategori: {event.category}
          </p>

          {/* Visar olika text beroende på isFree */}
          {event.isFree ? (
            <p className="font-semibold text-green-600">
              Detta event är gratis.
            </p>
          ) : (
            <p className="font-semibold text-pink-600">
              Detta event kostar pengar.
            </p>
          )}
        </article>
      </main>
    </>
  );
}