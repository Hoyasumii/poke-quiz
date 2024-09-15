"use client";

import { Svg } from "@/components";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const pokemonAmountForm = (data: FormData) => {
    router.push(`/${data.get("amount")}`);
  };

  return (
    <main className="flex flex-col gap-4 justify-center items-center py-4 sm:py-8 lg:py-10 w-11/12 sm:w-9/12 lg:w-3/6 h-full">
      <header className="space-y-4">
        <h1 className="text-lg md:text-4xl font-bold uppercase text-center">
          O quanto você sabe sobre
        </h1>
        <Svg.Pokemon className="mx-auto w-8/12" />
      </header>
      Será que você consegue acertar todos os tipos dos Pokémon?
      <form
        action={pokemonAmountForm}
        id={"my-form"}
      >
        Escolha o número de perguntas
        <input
          type="number"
          name="amount"
          id=""
          defaultValue={3}
          max={process.env.POKEMON_COUNTER}
        />
        <button>Descubra</button>
      </form>
    </main>
  );
}
