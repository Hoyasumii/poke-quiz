import { PokemonCard, StepButton, StepManager } from "@/components";
import { getPokemon } from "@/services";
import { preloadImage, shuffleNumbers, shuffleTypes } from "@/utils";

export default async function Page() {
  return (
    <main className="flex flex-col gap-4 items-center py-10 w-40 md:w-72 h-full"></main>
  );
}
