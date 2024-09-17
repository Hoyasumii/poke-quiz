import { Pokemon } from "@/types";

export async function getPokemon(id: number): Promise<Pokemon> {
  const pokemonResponse = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: "no-cache",
    })
  ).json();

  return {
    name: pokemonResponse?.name,
    number: pokemonResponse?.id,
    sprite: pokemonResponse?.sprites?.other?.["official-artwork"].front_default,
    types: (pokemonResponse?.types as Array<{ type: { name: string } }>).map(
      (type) => type.type.name
    ) as Pokemon["types"],
  };
}
