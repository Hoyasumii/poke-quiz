import { PokemonCard, StepButton, StepManager } from "@/components";
import { loadPokemonData } from "@/server";

export default async function Page({
  params: { amount },
}: {
  params: { amount: string };
}) {
  const pokemonAmount = parseInt(amount);

  if (isNaN(pokemonAmount)) return new Error();

  const pokemonData = await loadPokemonData(pokemonAmount);

  return (
    <main className="flex flex-col gap-4 items-center py-10 w-40 md:w-72 h-full">
      <StepManager.Root>
        <StepManager.Content>
          {pokemonData.map((pokemon, index) => (
            <PokemonCard
              name={pokemon.name}
              sprite={pokemon.sprite}
              number={pokemon.number}
              types={pokemon.types}
              correctAnswer={pokemon.correctAnswer}
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
