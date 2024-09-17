"use client";

import { Button } from "@/components";
import { useProgress, useScore, useStep } from "@/storage";
import { RotateCw } from "lucide-react";
import { useRouter } from "next/navigation";

export function End() {
  const router = useRouter();
  const { score, setScore } = useScore();
  const { step, setStep } = useStep();
  const { setProgress } = useProgress();

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-3xl">
        Você acertou {((score * 100) / step).toFixed(0)}%
      </h1>
      <h2 className="font-bold text-3xl text-center">das {step} perguntas!</h2>
      <Button
        onClick={() => {
          router.replace("/");
          setStep(0);
          setScore(0);
          setProgress(0);
        }}
        className="mx-auto"
      >
        <RotateCw />
        Tentar novamente
      </Button>
    </div>
  );
}
