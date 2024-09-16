"use client";

import { Progress } from "@/components";
import { useStep } from "@/storage";
import { ReactNode } from "react";

export default function Layout({
  children,
  params: { amount },
}: {
  children: ReactNode;
  params: { amount: string };
}) {
  const { step } = useStep();

  const pokemonAmount = parseInt(amount);

  if (isNaN(pokemonAmount)) return new Error();

  return (
    <>
      {step < pokemonAmount && (
        <header className="flex bg-white items-center gap-4 px-10 py-4 border-b border-b-slate-200 w-full">
          <Progress value={step} total={pokemonAmount} />
          <strong className="font-medium text-nowrap">
            {step + 1} / {pokemonAmount}
          </strong>
        </header>
      )}
      <main className="flex flex-col gap-4 items-center py-10 w-40 md:w-72 h-full">
        {children}
      </main>
    </>
  );
}
