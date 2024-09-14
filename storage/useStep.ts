import { create } from "zustand";

type Step = {
  step: number;
  setStep(value: number): void;
};

export default create<Step>()((set) => ({
  step: 0,
  setStep(value) {
    set(() => ({ step: value }));
  },
}));
