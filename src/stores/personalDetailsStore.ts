import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FormPersonalDetailsStore } from "@/types/formType";
import type { PersonalDetailDTO } from "@/schema/formPersonalDetailsSchema";

export const usePersonalDetailsStore = create<FormPersonalDetailsStore>()(
  persist(
    (set) => ({
      data: {} as PersonalDetailDTO,
      setData: (data) => {
        set(() => ({
          data,
        }));
      },
    }),
    { name: "personalDetailsStore" }
  )
);
