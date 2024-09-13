import { PokemonType } from "../types";
import { shuffleNumbers, types } from ".";

export function shuffleTypes(
  ...selectedTypes: [PokemonType, PokemonType]
): [[PokemonType, PokemonType, PokemonType, PokemonType], PokemonType] {
  const shuffledTypes = shuffleNumbers(4, Object.keys(types).length).map(
    (number) => Object.keys(types)[number - 1]
  );
  const selectedType = selectedTypes[Math.floor(Math.random() * 2)];

  if (!shuffledTypes.find((type) => selectedType === type)) {
    return shuffleTypes(...selectedTypes);
  }

  return [
    shuffledTypes as [PokemonType, PokemonType, PokemonType, PokemonType],
    selectedType,
  ];
}
