// Props för sökformuläret
interface FuturamaSearchProps {
  defaultQuery: string;
  defaultLimit: string;
}

// Ett enkelt formulär för sökning och limit
export default function FuturamaSearch({
  defaultQuery,
  defaultLimit,
}: FuturamaSearchProps) {
  return (
    // Formuläret skickar värden till URL:en
    <form className="mx-auto mb-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
      {/* Här skriver användaren ett namn */}
      <input
        type="text"
        name="query"
        defaultValue={defaultQuery}
        placeholder="Sök efter en karaktär"
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900"
      />

      {/* Här väljer användaren antal kort */}
      <select
        name="limit"
        defaultValue={defaultLimit}
        className="rounded-lg border border-slate-300 px-4 py-3 text-slate-900"
      >
        <option value="3">3 kort</option>
        <option value="6">6 kort</option>
        <option value="9">9 kort</option>
        <option value="12">12 kort</option>
      </select>

      {/* Skickar formuläret */}
      <button
        type="submit"
        className="rounded-lg bg-pink-500 px-6 py-3 font-semibold text-white hover:bg-pink-600"
      >
        Sök
      </button>
    </form>
  );
}