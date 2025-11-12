import { createFileRoute } from "@tanstack/react-router";
import B from "@/components/B";

export const Route = createFileRoute("/pokemon/$name")({
  loader: async ({ params }) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/pikachu`
    );
    if (!response.ok) {
      throw new Error("Pokémon introuvable");
    }
    return response.json();
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const pokemon = Route.useLoaderData()
  const { name } = Route.useParams()

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-3xl font-bold capitalize">{name}</h1>

      <img
        src={pokemon.sprites.front_default}
        alt={name}
        className="w-40 h-40"
      />

      <div className="text-gray-300">
        <p>Poids : {pokemon.weight}</p>
        <p>Taille : {pokemon.height}</p>
        <p>Types : {pokemon.types.map(t => t.type.name).join(', ')}</p>
      </div>
      <B />
    </div>
  )
}
