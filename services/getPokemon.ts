import { Pokemon } from "@/types";
import Request from ".";

export async function getPokemon(id: number): Promise<Pokemon> {
  const pokemonResponse = (await Request.get(`/pokemon/${id}`)).data;

  return {
    name: pokemonResponse?.name,
    number: pokemonResponse?.id,
    sprite: pokemonResponse?.sprites?.other?.["official-artwork"].front_default,
    types: (pokemonResponse?.types as Array<{ type: { name: string } }>).map(
      (type) => type.type.name
    ) as Pokemon["types"],
  };
}
