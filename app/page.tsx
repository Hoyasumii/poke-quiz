import { PokemonCard } from "@/components";
import { getPokemon } from "@/services";
import { preloadImage, shuffleNumbers, shuffleTypes } from "@/utils";

export default async function Page() {
  const pokemonNumbers = shuffleNumbers(3);

  const selectedPokemon = await Promise.all(
    pokemonNumbers.map((pokemonNumber) => getPokemon(pokemonNumber))
  );

  const preloadedPokemonSprites = await Promise.all(
    selectedPokemon.map((pokemon) => preloadImage(pokemon.sprite))
  );

  const displayablePokemonTypes = selectedPokemon.map((pokemon) =>
    shuffleTypes(pokemon.types[0], pokemon.types[1] || pokemon.types[0])
  );

  return (
    <main className="flex flex-col gap-4 items-center py-10 w-40 md:w-72 h-full">
      {selectedPokemon.map((pokemon, index) => (
        <PokemonCard
          name={pokemon.name}
          sprite={preloadedPokemonSprites[index]}
          number={pokemon.number}
          types={displayablePokemonTypes[index][0]}
          correctAnswer={displayablePokemonTypes[index][1]}
          key={`pokemon-card-${index}`}
        />
      ))}
    </main>
  );
}
