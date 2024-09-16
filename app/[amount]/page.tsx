import { PokemonCard, StepManager } from "@/components";
import { loadPokemonData } from "@/server";

export default async function Page({
  params: { amount },
}: {
  params: { amount: string };
}) {
  const pokemonAmount = parseInt(amount);

  const pokemonData = await loadPokemonData(pokemonAmount);

  return (
    <>
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
          <h1>Hello</h1>
          {/* <End />
            <ReloadButton /> */}
        </StepManager.End>
      </StepManager.Root>
    </>
  );
}
