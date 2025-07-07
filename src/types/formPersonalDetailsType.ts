import type { PersonalDetailDTO } from "@/schema/FormPersonalDetailsSchema";

export interface FormPersonalDetailsType {
  firstName: string;
  lastName: string;
  // imgUrl: string;
  email: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
  city: string;
  birthDate: Date;
  birthPlace: string;
  linkedinUrl: string;
  websiteUrl: string;
}

export interface FormPersonalDetailsStore {
  data: PersonalDetailDTO;
  setData: (data: PersonalDetailDTO) => void;
}
