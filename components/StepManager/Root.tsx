"use client";

import { useStep } from "@/storage";
import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Root({ children }: Props) {
  const { step } = useStep();
  const managedNode = children as ReactElement[];

  if ((children as ReactElement[]).length !== 3) throw new Error();

  const start = managedNode[0];
  const end = managedNode[2];

  return (
    <>
      {step < 0 && start}

      {step >= 0 &&
        step < managedNode.length &&
        managedNode[1].props.children[step]}

      {step > managedNode.length - 1 && end}
    </>
  );
}
