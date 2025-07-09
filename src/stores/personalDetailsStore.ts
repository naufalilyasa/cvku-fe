import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PersonalDetailsDTO } from "@/schema/formPersonalDetailsSchema";
import type { FormPersonalDetailsStore } from "@/types/formType";

export const usePersonalDetailsStore = create<FormPersonalDetailsStore>()(
  persist(
    (set) => ({
      data: {} as PersonalDetailsDTO,
      setData: (data) => {
        set(() => ({
          data,
        }));
      },
    }),
    { name: "personalDetailsStore" }
  )
);
