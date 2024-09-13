import { Type } from "@/components";
import { getPokemon } from "@/services";
import { shuffleNumbers, types } from "@/utils";

export default async function Page() {
  const pokemonNumbers = shuffleNumbers(3);

  const selectedPokemon = await Promise.all(
    pokemonNumbers.map((pokemonNumber) => getPokemon(pokemonNumber))
  );

  return (
    <>
      {/* {selectedPokemon.map((pokemon, index) => (
        <div key={`pokemon-card-${index}`}>
          <img src={pokemon.sprite} alt="" loading="lazy" />{" "}
          {pokemon.types.map((pokemonType, index) => (
            <Type pokemonType={pokemonType} key={`type-${index}`} />
          ))}
        </div>
      ))} */}
    </>
  );
}


