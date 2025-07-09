import type { FormPersonalDetailsType } from "@/types/formType";
import { z, ZodType } from "zod";

export const FormPersonalDetailSchema: ZodType<FormPersonalDetailsType> =
  z.object({
    firstName: z
      .string()
      .trim()
      .nonempty({ message: "First Name is required" }),
    lastName: z.string().trim().nonempty({ message: "Last Name is required" }),
    // imgUrl: z.string(),
    email: z
      .string()
      .email({ message: "Email is required" })
      .nonempty()
      .trim()
      .toLowerCase(),
    phoneNumber: z
      .string()
      .trim()
      .nonempty({ message: "Phone Number is required" }),
    address: z.string().trim().nonempty({ message: "Address is required" }),
    postalCode: z
      .string()
      .trim()
      .nonempty({ message: "Postal Code is required" }),
    city: z.string().trim().nonempty({ message: "City is required" }),
    birthDate: z.date(),
    birthPlace: z
      .string()
      .trim()
      .nonempty({ message: "Birth Place is required" }),
    linkedinUrl: z
      .string()
      .url()
      .includes("linkedin.com", { message: "Invalid Linkedin URL" }),
    websiteUrl: z.string().url(),
    imageProfile: z.string().optional(),
    nationality: z
      .string()
      .trim()
      .nonempty({ message: "Nationality is required" }),
    maritalStatus: z
      .string()
      .trim()
      .nonempty({ message: "Marital status is required" }),
  });

export type PersonalDetailDTO = z.infer<typeof FormPersonalDetailSchema>;
