import { PokemonType } from "@/types";

export default {
  normal: "bg-[#a0a19f]",
  fighting: "bg-[#fe7f00]",
  flying: "bg-[#81b8ef]",
  poison: "bg-[#9141cb]",
  ground: "bg-[#8c5126]",
  rock: "bg-[#afa981]",
  bug: "bg-[#91a019]",
  ghost: "bg-[#6f4170]",
  steel: "bg-[#60a2b9]",
  fire: "bg-[#e72829]",
  water: "bg-[#2980ef]",
  grass: "bg-[#3da129]",
  electric: "bg-[#fac000]",
  psychic: "bg-[#ef4079]",
  ice: "bg-[#3ecff3]",
  dragon: "bg-[#5060e1]",
  dark: "bg-[#624d4f]",
  fairy: "bg-[#ef71ef]",
} as const as Record<PokemonType, string>;
