import { Route } from "../routes/poke.$name";
import { use } from "@tanstack/react-router";

export default function () {
  const pokemon = Route.useLoaderData();

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} width={120} />
    </div>
  );
}
