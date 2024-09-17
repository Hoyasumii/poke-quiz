import { create } from "zustand";

type Score = {
  score: number;
  setScore(value: number): void;
};

export default create<Score>()((set) => ({
  score: 0,
  setScore(value) {
    set(() => ({ score: value }));
  },
}));
