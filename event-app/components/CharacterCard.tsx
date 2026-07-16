// Props som kortet behöver
interface CharacterCardProps {
  name: string;
  species: string;
  gender: string;
  image: string;
}

// Komponenten tar emot data genom props
export default function CharacterCard({
  name,
  species,
  gender,
  image,
}: CharacterCardProps) {
  return (
    // Ett kort för en karaktär
    <article className="overflow-hidden rounded-xl bg-white shadow">
      {/* Karaktärens bild */}
      <img
        src={image}
        alt={name}
        className="h-64 w-full object-cover"
      />

      {/* Information om karaktären */}
      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {name}
        </h2>

        <p className="text-slate-600">
          Art: {species}
        </p>

        <p className="text-slate-600">
          Kön: {gender}
        </p>
      </div>
    </article>
  );
}