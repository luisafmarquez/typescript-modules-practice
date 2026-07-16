"use client";

// Props som error-sidan får från Next.js
interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

// Visas om något går fel
export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-50 px-6 text-center">
      <h1 className="mb-4 text-3xl font-bold text-slate-900">
        Något gick fel
      </h1>

      <p className="mb-6 text-slate-600">
        {error.message}
      </p>

      {/* Försöker ladda sidan igen */}
      <button
        onClick={reset}
        className="rounded-lg bg-pink-500 px-6 py-3 font-semibold text-white hover:bg-pink-600"
      >
        Försök igen
      </button>
    </main>
  );
}