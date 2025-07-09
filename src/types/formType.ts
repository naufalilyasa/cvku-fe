import type { ExperiencesDTO } from "@/schema/formExperiencesSchema";
import type { PersonalDetailsDTO } from "@/schema/formPersonalDetailsSchema";

export interface FormPersonalDetailsType {
  firstName: string;
  lastName: string;
  imageProfile?: string;
  email: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
  city: string;
  birthDate: Date;
  birthPlace: string;
  linkedinUrl: string;
  websiteUrl: string;
  nationality: string;
  maritalStatus: string;
}

export interface FormExperiencesType {
  description: string;
  experiences?: ExperiencesType[];
  education?: EducationType[];
  skills?: SkillType[];
  projects?: ProjectType[];
}

export interface ExperiencesType {
  workPosition: string;
  companyName: string;
  startDate: Date;
  endDate: Date | null;
  city: string;
  description?: string;
}

export interface EducationType {
  title: string;
  institution: string;
  city: string;
  startDate: Date;
  endDate: Date | null;
  description?: string;
}

export interface SkillType {
  skillName: string;
  level: "beginner" | "intermediate" | "advanced";
}

export interface ProjectType {
  projectName: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
}

// This interface is used to store the form data in a global state or context
export interface FormPersonalDetailsStore {
  data: PersonalDetailsDTO;
  setData: (data: PersonalDetailsDTO) => void;
}

export interface FormExperiencesStore {
  data: ExperiencesDTO;
  setData: (data: ExperiencesDTO) => void;
}
