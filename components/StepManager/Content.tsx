"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Content({ children, type }: Props) {
  return <div>{children}</div>;
}
