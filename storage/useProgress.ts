import { create } from "zustand";

type Progress = {
  progress: number;
  setProgress(value: number): void;
};

export default create<Progress>()((set) => ({
  progress: 0,
  setProgress(value) {
    set(() => ({ progress: value }));
  },
}));
