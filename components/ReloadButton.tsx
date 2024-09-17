"use client";

import { RotateCw } from "lucide-react";
import { ComponentProps } from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import { useScore, useStep } from "@/storage";

type Props = ComponentProps<"button"> & {
  onClick?(): never;
  children?: never;
};

export function ReloadButton({ ...props }: Props) {
  const router = useRouter();
  const { setStep } = useStep();
  const { setScore } = useScore();

  return (
    <Button
      onClick={() => {
        router.replace("/");
        setStep(0);
        setScore(0);
      }}
      {...props}
    >
      <RotateCw />
      Reiniciar
    </Button>
  );
}
