export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-slate-900 text-white">
      <p className="mb-4 text-sm uppercase tracking-widest text-blue-300">
        Event App
      </p>

      <h1 className="mb-6 text-5xl font-bold">
        Welcome to my Event App
      </h1>

      <p className="mb-8 max-w-xl text-lg text-slate-300">
        Detta är min första Hero byggd med Next.js och Tailwind CSS.
      </p>

      <button className="rounded-full bg-blue-500 px-6 py-3 hover:bg-blue-600">
        Läs mer
      </button>
    </section>
  );
}