import { create } from "zustand";

type Step = {
  step: number;
  setStep(value: number): void;
};

export default create<Step>()((set) => ({
  step: -1,
  setStep(value) {
    set(() => ({ step: value }));
  },
}));
