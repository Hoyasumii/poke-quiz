import { types } from "@/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  pokemonType: keyof typeof types;
};

export function Type({ pokemonType }: Props) {
  return (
    <div
      className={`select-none w-fit text-white rounded-lg px-2 py-1 font-extrabold ${types[pokemonType]}`}
    >
      {pokemonType.toUpperCase()}
    </div>
  );
}
