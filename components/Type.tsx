import { types } from "@/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  pokemonType: keyof typeof types;
  children?: never;
};

export function Type({ pokemonType, className, ...props }: Props) {
  return (
    <button
      className={`select-none w-fit text-white rounded-lg px-2 py-1 font-extrabold ${types[pokemonType]} ${className}`}
      {...props}
    >
      {pokemonType.toUpperCase()}
    </button>
  );
}
