import { create } from "zustand";
import type { FormPersonalDetailsStore } from "@/types/formPersonalDetailsType";
import type { PersonalDetailDTO } from "@/schema/FormPersonalDetailsSchema";

export const usePersonalDetailsStore = create<FormPersonalDetailsStore>()(
  (set) => ({
    data: {} as PersonalDetailDTO,
    setData: (data) => {
      set(() => ({
        data,
      }));
    },
  })
);
