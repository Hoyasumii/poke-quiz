"use client";

import { ComponentProps } from "react";
import Context from "./Context";

type Props = ComponentProps<"div"> & {
  name: string;
};

export function Root({ name, className, children, ...props }: Props) {
  return (
    <Context.Provider value={name}>
      <div
        className={`space-y-2 ${className}`}
        {...props}
      >
        {children}
      </div>
    </Context.Provider>
  );
}
