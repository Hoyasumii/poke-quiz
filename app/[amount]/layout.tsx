"use client";

import { Progress } from "@/components";
import { useProgress, useStep } from "@/storage";
import { ReactNode, useEffect } from "react";

export default function Layout({
  children,
  params: { amount },
}: {
  children: ReactNode;
  params: { amount: string };
}) {
  const { step, setStep } = useStep();
  const { progress } = useProgress();

  const pokemonAmount = parseInt(amount);

  useEffect(() => {
    if (progress === 0) return;
    setTimeout(async () => {
      setStep(step + 1);
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  if (isNaN(pokemonAmount) || pokemonAmount <= 0) return new Error();

  return (
    <>
      {step < pokemonAmount && (
        <header className="flex bg-white items-center gap-4 px-6 md:px-10 py-4 border-b border-b-slate-200 w-full">
          <Progress value={progress} total={pokemonAmount} />
          <strong className="hidden md:block font-medium text-nowrap">
            {step + 1} / {pokemonAmount}
          </strong>
        </header>
      )}
      <main className="flex flex-col gap-4 items-center py-10 w-10/12 md:w-72 h-full">
        {children}
      </main>
    </>
  );
}
