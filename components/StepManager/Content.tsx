"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: string;
};

export function Content({ children, type }: Props) {
  return <div>{children}</div>;
}
