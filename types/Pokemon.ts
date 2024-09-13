import { PokemonType } from "./PokemonType";

export interface Pokemon {
  name: string;
  number: string;
  sprite: string;
  types: [PokemonType, PokemonType] | [PokemonType];
}
