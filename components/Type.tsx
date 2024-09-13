"use client";

import { types } from "@/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  pokemonType: keyof typeof types;
  children?: never;
};

export function Type({ pokemonType, className, ...props }: Props) {
  return (
    <button
      className={`border-1 border-slate-200 select-none duration-300 transition-all hover:scale-105 active:scale-100 text-white rounded-lg px-2 py-3 font-extrabold shadow ${
        types[pokemonType]
      } ${className && className}`}
      {...props}
    >
      {pokemonType.toUpperCase()}
    </button>
  );
}
