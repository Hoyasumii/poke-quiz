"use client";

import { ReactElement } from "react";

type Props = {
  children: ReactElement;
};

export function Start({ children }: Props) {
  return <div>{children}</div>;
}
