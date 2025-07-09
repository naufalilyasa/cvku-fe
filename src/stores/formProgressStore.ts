import type { FormProgressType } from "@/types/formProgressType";
import { create } from "zustand";

export const useFormProgress = create<FormProgressType>((set) => ({
  step: 0,
  setStep: (step) => set({ step }),
}));
