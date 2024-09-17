"use client";

import { useScore } from "@/storage";

export function End() {
  const { score } = useScore();
  return <h1 className="bg-blue-300">{score}</h1>;
}
