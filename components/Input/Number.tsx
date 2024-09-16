"use client";

import { ComponentProps } from "react";
import { useContext } from "react";
import Context from "./Context";

type Props = ComponentProps<"input"> & {
  name?: never;
  id?: never;
  autoComplete?: never;
};

export function Number({ className, ...props }: Props) {
  const inputName = useContext(Context);

  return (
    <input
      type="number"
      className={`w-full duration-300 transition-all focus:border-blue-400 focus:ring-2 focus:ring-blue-200 py-2 px-3 rounded-lg border border-slate-300 bg-white outline-none ${className}`}
      autoComplete="off"
      name={inputName}
      id={inputName}
      {...props}
    />
  );
}
