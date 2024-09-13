"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Content({ children }: Props) {
  return <div>{children}</div>;
}
