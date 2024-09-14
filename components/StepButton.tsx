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
        if (step > 0) {
          window.location.reload();
          return;
        }

        setStep(step + 1);
      }}
      className="bg-white px-4 py-3 text-slate-900 shadow rounded-lg flex items-center gap-4 duration-300 transition-all hover:scale-105 hover:bg-slate-50 active:scale-100 active:bg-slate-100"
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
