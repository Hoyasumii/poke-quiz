"use client";

import { Button, Input, Svg } from "@/components";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const pokemonAmountForm = (data: FormData) => {
    router.push(`/${data.get("amount")}`);
  };

  return (
    <main className="flex flex-col gap-4 items-center pt-40 w-11/12 sm:w-9/12 lg:w-3/6 h-full">
      <header className="space-y-4">
        <Svg.Pokemon className="mx-auto w-11/12 md:w-8/12" />
      </header>
      <form
        className="w-full md:w-1/2"
        action={pokemonAmountForm}
        id={"my-form"}
      >
        <Input.Root name="amount">
          <Input.Label text="Escolha o número de perguntas" />
          <Input.Number defaultValue={3} min={3} />
        </Input.Root>
      </form>
      <Button form="my-form">
        Iniciar
        <Sparkles className="text-blue-700 fill-blue-200" />
      </Button>
    </main>
  );
}
