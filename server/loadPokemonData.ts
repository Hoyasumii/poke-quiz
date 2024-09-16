"use server";

import { getPokemon } from "@/services";
import { PokemonType } from "@/types";
import { preloadImage, shuffleNumbers, shuffleTypes } from "@/utils";

type PokemonCardProps = {
  name: string;
  number: string;
  sprite: string;
  types: [PokemonType, PokemonType, PokemonType, PokemonType];
  correctAnswer: PokemonType;
};

export async function loadPokemonData(
  pokemonAmount: number
): Promise<Array<PokemonCardProps>> {
  const pokemonCounter = parseInt(process.env.POKEMON_COUNTER || "0");

  const pokemonNumbers = !isNaN(pokemonCounter)
    ? shuffleNumbers(
        pokemonAmount,
        parseInt(process.env.POKEMON_COUNTER || "0")
      )
    : shuffleNumbers(pokemonAmount, 151);

  const retrievedPokemon = await Promise.all(
    pokemonNumbers.map((pokemonNumber) => getPokemon(pokemonNumber))
  );

  const preloadedPokemonSprites = await Promise.all(
    retrievedPokemon.map((pokemon) => preloadImage(pokemon.sprite))
  );

  const displayablePokemonTypes = retrievedPokemon.map((pokemon) =>
    shuffleTypes(pokemon.types[0], pokemon.types[1] || pokemon.types[0])
  );

  return retrievedPokemon.map((pokemon, index) => ({
    name: pokemon.name.split("-").join(" "),
    sprite: preloadedPokemonSprites[index],
    number: pokemon.number,
    types: displayablePokemonTypes[index][0],
    correctAnswer: displayablePokemonTypes[index][1],
  }));
}
