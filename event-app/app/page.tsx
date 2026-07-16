import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import events from "@/data/events.json";

export default function Home() {
  return (
    <>
      {/* Menyn visas högst upp */}
      <Header />

      {/* Hero visas på startsidan */}
      <Hero />

      {/* Här visas alla event */}
      <main className="bg-slate-100 px-6 py-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
          Våra event
        </h2>

        {/* Grid med eventkort */}
        <section className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {/* map skapar ett kort för varje event */}
          {events.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
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