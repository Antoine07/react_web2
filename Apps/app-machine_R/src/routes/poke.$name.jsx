import { createFileRoute } from "@tanstack/react-router";
import Poke from  "@/pages/Poke"

export const Route = createFileRoute("/poke/$name")({
  loader: async ({ params }) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.name}`
    );
    if (!response.ok) {
      throw new Error("Pokémon introuvable");
    }
    const res = response.json()
    console.log(res)
    return res;
  },
  component: Poke,
});

function RouteComponent() {
  return <div>Hello "/poke/$name"!</div>;
}
