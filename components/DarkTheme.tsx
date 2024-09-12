"use client";

import { useEffect } from "react";

export function DarkTheme() {
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);
  return <></>;
}
