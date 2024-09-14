import { PokemonCard, StepButton, StepManager } from "@/components";
import { getPokemon } from "@/services";
import { preloadImage, shuffleNumbers, shuffleTypes } from "@/utils";

export default async function Page({
  params: { amount },
}: {
  params: { amount: string };
}) {
  const pokemonAmount = parseInt(amount);

  if (isNaN(pokemonAmount)) return new Error();

  const pokemonNumbers = shuffleNumbers(
    pokemonAmount,
    parseInt(process.env.POKEMON_COUNTER || "0")
  );

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
      <StepManager.Root>
        <StepManager.Content>
          {selectedPokemon.map((pokemon, index) => (
            <PokemonCard
              name={pokemon.name.split("-").join()}
              sprite={preloadedPokemonSprites[index]}
              number={pokemon.number}
              types={displayablePokemonTypes[index][0]}
              correctAnswer={displayablePokemonTypes[index][1]}
              key={`pokemon-card-${index}`}
            />
          ))}
        </StepManager.Content>
        <StepManager.End>
          <StepButton />
        </StepManager.End>
      </StepManager.Root>
    </main>
  );
}
