import Header from "@/components/Header";

export default function OmOssPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-4xl p-8">
        <h2 className="mb-4 text-3xl font-bold">Om oss</h2>

        <p className="text-lg text-slate-700">
          Detta är en enkel sida där jag övar routing i Next.js.
        </p>
      </main>
    </>
  );
}