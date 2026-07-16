import Header from "@/components/Header";
import CharacterCard from "@/components/CharacterCard";
import FuturamaSearch from "@/components/FuturamaSearch";

// Typ för en karaktär från API:et
interface FuturamaCharacter {
  id: number;
  name: string;
  status: string;
  gender: string;
  species: string;
  image: string;
}

// Typ för API-svaret
interface FuturamaApiResponse {
  items: FuturamaCharacter[];
}

// Typ för searchParams
interface FuturamaPageProps {
  searchParams: Promise<{
    query?: string;
    limit?: string;
  }>;
}

// Funktion som hämtar data från API:et
async function getCharacters(): Promise<FuturamaCharacter[]> {
  try {
    // Hämtar data från Futurama API
    const response = await fetch(
      "https://futuramaapi.com/api/characters",
      {
        cache: "no-store",
      }
    );

    // Kontrollerar om svaret är okej
    if (!response.ok) {
      throw new Error("Kunde inte hämta karaktärer");
    }

    // Gör om svaret till JSON
    const data: FuturamaApiResponse = await response.json();

    // Karaktärerna finns i items
    return data.items;
  } catch (error) {
    // Visar felet i terminalen
    console.error("API-fel:", error);

    // Skickar felet vidare till error.tsx
    throw new Error("Något gick fel när data hämtades");
  }
}

// Sidan är async eftersom vi väntar på data
export default async function FuturamaPage({
  searchParams,
}: FuturamaPageProps) {
  // Hämtar query och limit från URL:en
  const { query = "", limit = "6" } = await searchParams;

  // Hämtar alla karaktärer
  const characters = await getCharacters();

  // Gör söktexten enklare att jämföra
  const searchText = query.toLowerCase().trim();

  // Filtrerar karaktärer efter namn
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchText)
  );

  // Gör limit till ett nummer
  const limitNumber = Number(limit);

  // Visar bara valt antal karaktärer
  const visibleCharacters = filteredCharacters.slice(0, limitNumber);

  return (
    <>
      {/* Menyn visas högst upp */}
      <Header />

      <main className="min-h-screen bg-pink-50 px-6 py-12">
        <h1 className="mb-4 text-center text-4xl font-bold text-slate-900">
          Futurama-karaktärer
        </h1>

        <p className="mb-8 text-center text-slate-600">
          Data hämtad från Futurama API.
        </p>

        {/* Sökning och limit */}
        <FuturamaSearch
          defaultQuery={query}
          defaultLimit={limit}
        />

        {/* Conditional rendering */}
        {visibleCharacters.length === 0 ? (
          <p className="text-center text-lg text-slate-600">
            Inga karaktärer hittades.
          </p>
        ) : (
          // map skapar ett kort för varje karaktär
          <section className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCharacters.map((character) => (
              <CharacterCard
                key={character.id}
                name={character.name}
                gender={character.gender}
                species={character.species}
                image={character.image}
              />
            ))}
          </section>
        )}
      </main>
    </>
  );
}