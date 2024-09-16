"use client";

import { ComponentProps, useContext } from "react";
import Context from "./Context";

type Props = ComponentProps<"label"> & {
  text: string;
  children?: never;
  htmlFor?: never;
};

export function Label({ text, className, ...props }: Props) {
  const inputName = useContext(Context);
  return (
    <label
      className={`font-medium ${className}`}
      htmlFor={inputName}
      {...props}
    >
      {text}
    </label>
  );
}
