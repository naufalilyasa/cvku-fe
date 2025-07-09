import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FormExperiencesStore } from "@/types/formType";
import type { ExperiencesDTO } from "@/schema/formExperiencesSchema";

export const useExperiencesStore = create<FormExperiencesStore>()(
  persist(
    (set) => ({
      data: {} as ExperiencesDTO,
      setData: (data) => {
        set(() => ({
          data,
        }));
      },
    }),
    { name: "experiencesStore" }
  )
);
