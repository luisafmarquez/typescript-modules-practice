import Link from "next/link";

// Visas när eventet inte finns
export default function EventNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-50 px-6 text-center">
      <p className="mb-4 text-7xl font-bold text-pink-500">404</p>

      <h1 className="mb-4 text-3xl font-bold text-slate-900">
        Eventet finns inte
      </h1>

      <p className="mb-8 text-slate-600">
        Sidan du söker kunde inte hittas.
      </p>

      <Link
        href="/"
        className="rounded-full bg-pink-500 px-6 py-3 font-semibold text-white"
      >
        Till startsidan
      </Link>
    </main>
  );
}