import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import events from "@/data/events.json";

export default function Home() {
  return (
    <>
      {/* Header visas högst upp */}
      <Header />

      {/* Hero visas på startsidan */}
      <Hero />

      {/* Här börjar sektionen med event */}
      <main className="bg-slate-100 px-6 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
          Våra event
        </h2>

        {/* Grid som visar korten */}
        <section className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {/* map går igenom alla event i json-filen */}
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              category={event.category}
              isFree={event.isFree}
            />
          ))}
        </section>
      </main>
    </>
  );
}