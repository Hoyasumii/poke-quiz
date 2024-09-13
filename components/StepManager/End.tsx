"use client";

import { ReactElement } from "react";

type Props = {
  children: ReactElement;
};

export function End({ children }: Props) {
  return <div>{children}</div>;
}
