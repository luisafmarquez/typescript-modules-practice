// Visas medan sidan väntar på data
export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-pink-50">
      <p className="text-xl font-semibold text-pink-600">
        Hämtar Futurama-karaktärer...
      </p>
    </main>
  );
}