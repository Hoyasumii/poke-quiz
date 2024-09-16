import { ComponentProps } from "react";

type Props = ComponentProps<"button">;

export function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={`bg-white px-4 py-3 text-slate-900 shadow shadow-slate-100 rounded-lg flex items-center gap-4 duration-300 transition-all hover:scale-105 hover:bg-slate-50 active:scale-100 active:bg-slate-100 uppercase font-bold border border-slate-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
