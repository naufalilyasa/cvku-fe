import type { FormExperiencesType } from "@/types/formType";
import type { ZodType } from "zod";
import { z } from "zod";

export const FormExperiencesSchema: ZodType<FormExperiencesType> = z.object({
  description: z.string().min(1, "Deskripsi wajib diisi"),
  experiences: z
    .array(
      z
        .object({
          workPosition: z.string().min(1, "Posisi wajib diisi"),
          companyName: z.string().min(1, "Nama perusahaan wajib diisi"),
          startDate: z.date().refine((date) => date <= new Date(), {
            message: "Tanggal mulai harus di masa lalu atau hari ini",
          }),
          endDate: z.date().nullable(),
          city: z.string().min(1, "Kota wajib diisi"),
          description: z.string().optional(),
        })
        .refine((data) => !data.endDate || data.endDate >= data.startDate, {
          message:
            "Tanggal selesai harus setelah atau sama dengan tanggal mulai",
          path: ["endDate"],
        })
    )
    .optional(),
  education: z
    .array(
      z
        .object({
          title: z.string().min(1, "Judul pendidikan wajib diisi"),
          institution: z.string().min(1, "Nama institusi wajib diisi"),
          city: z.string().min(1, "Kota wajib diisi"),
          startDate: z.date().refine((d) => d <= new Date(), {
            message: "Tanggal mulai harus di masa lalu atau hari ini",
          }),
          endDate: z.date().nullable(),
          description: z.string().optional(),
        })
        .refine((data) => !data.endDate || data.endDate >= data.startDate, {
          message:
            "Tanggal selesai harus setelah atau sama dengan tanggal mulai",
          path: ["endDate"],
        })
    )
    .optional(),
  skills: z
    .array(
      z.object({
        skillName: z.string().min(1, "Nama keterampilan wajib diisi"),
        level: z.enum(["beginner", "intermediate", "advanced"], {
          errorMap: () => ({ message: "Pilih level keterampilan" }),
        }),
      })
    )
    .optional(),
  projects: z
    .array(
      z
        .object({
          projectName: z.string().min(1, "Nama proyek wajib diisi"),
          description: z.string().min(1, "Deskripsi proyek wajib diisi"),
          startDate: z.date().refine((date) => date <= new Date(), {
            message: "Tanggal mulai harus di masa lalu atau hari ini",
          }),
          endDate: z.date().nullable(),
        })
        .refine((data) => !data.endDate || data.endDate >= data.startDate, {
          message:
            "Tanggal selesai harus setelah atau sama dengan tanggal mulai",
          path: ["endDate"],
        })
    )
    .optional(),
});

export type ExperiencesDTO = z.infer<typeof FormExperiencesSchema>;
