"use client";

import { useStep } from "@/storage";
import { Play, RotateCw } from "lucide-react";
import { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  onClick?(): never;
};

export function StepButton({}: Props) {
  const { step, setStep } = useStep();

  return (
    <button
      onClick={() => {
        setStep(step + 1);
      }}
      className="bg-white px-4 py-3 text-slate-300 shadow"
    >
      {step < 0 ? (
        <>
          <Play />
          Iniciar
        </>
      ) : (
        <>
          <RotateCw />
          Reiniciar
        </>
      )}
    </button>
  );
}
