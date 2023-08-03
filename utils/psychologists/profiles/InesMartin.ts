// Assets
import Ines_Martin_Img from "@/assets/imgs/psychologists/Ines Martin.jpg";

// Types
import { PsychologistProfile } from "../types";

export const Ines_Martin: PsychologistProfile = {
  name: "Ines Martin",
  img: Ines_Martin_Img,
  description: `Ines Martin is a licensed clinical psychologist with over 10 years of experience working with children,
    adolescents, and adults. She has worked in a variety of settings including schools, hospitals, and private practice.`,
  languages: ["French", "Arabic", "German"],
  specializations: [
    "Anxiety",
    "Depression",
    "Trauma",
    "Relationship issues",
    "Autism spectrum disorders",
    "ADHD",
    "Learning disabilities",
    "Chronic medical conditions",
  ],
  price: 130,
  currency: "EUR",
  duration: 50,
  durationUnit: "minutes",
  availability: {
    monday: {
      start: "08:00",
      end: "18:00",
    },
    tuesday: {
      start: "08:00",
      end: "18:00",
    },
    wednesday: {
      start: "08:00",
      end: "18:00",
    },
    thursday: {
      start: "08:00",
      end: "18:00",
    },
    friday: {
      start: "08:00",
      end: "18:00",
    },
    saturday: false,
    sunday: false,
  },
  location: {
    country: "Switzerland",
    city: "Geneva",
    address: "1-1-1, Geneva, Switzerland",
    timezone: "Europe/Zurich",
  },
  calendar: "https://calendly.com/inesmartin",
};
