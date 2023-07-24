import { StaticImageData } from "next/image";

export type PsychologistProfile = {
  name: string;
  img: StaticImageData;
  description: string;
  languages: string[];
  specializations: Specializations[];
  price: number;
  currency: string;
  duration: number;
  durationUnit: "hours" | "minutes";
  availability: {
    monday: availabilityDay;
    tuesday: availabilityDay;
    wednesday: availabilityDay;
    thursday: availabilityDay;
    friday: availabilityDay;
    saturday: availabilityDay;
    sunday: availabilityDay;
  };
  location: {
    country: string;
    city: string;
    address: string;
    timezone: string;
  };
  calendar: string;
};

type availabilityDay =
  | {
      start: string;
      end: string;
    }
  | false;

type Specializations =
  | "Anxiety"
  | "Depression"
  | "Trauma"
  | "Relationship issues"
  | "Autism spectrum disorders"
  | "ADHD"
  | "Learning disabilities"
  | "Chronic medical conditions";
