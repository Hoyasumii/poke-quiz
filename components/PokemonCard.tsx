"use client";

import { PokemonType } from "@/types";
import Image from "next/image";
import { Type } from "./Type";
import { useProgress, useScore } from "@/storage";

type Props = {
  name: string;
  number: string;
  sprite: string;
  types: [PokemonType, PokemonType, PokemonType, PokemonType];
  correctAnswer: PokemonType;
};

export function PokemonCard({
  name,
  correctAnswer,
  number,
  sprite,
  types,
}: Props) {
  const { progress, setProgress } = useProgress();
  const { score, setScore } = useScore();

  return (
    <div className="flex flex-col gap-2 items-center w-fit bg-white border border-slate-200 rounded-2xl p-4">
      <Image src={sprite} alt="" width={512} height={512} />
      <div className="w-full flex justify-center items-start gap-2 pb-2 border-b border-b-slate-200">
        <strong className="font-bold text-slate-700 text-xl md:text-2xl capitalize">
          {name}
        </strong>
        <p className="font-semibold text-sm text-slate-400">#{number}</p>
      </div>
      <div className="pt-2 grid grid-cols-2 gap-2 w-full">
        {types.map((pokemonType, index) => (
          <Type
            onClick={() => {
              setProgress(progress + 1);
              if (pokemonType === correctAnswer) {
                setScore(score + 1);
              }
            }}
            pokemonType={pokemonType}
            key={`pokemon-type-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
