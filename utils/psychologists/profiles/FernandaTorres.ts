// Assets
import Fernanda_Torres_Img from "@/assets/imgs/psychologists/Fernanda Torres.jpg";

// Types
import { PsychologistProfile } from "../types";

export const Fernanda_Torres: PsychologistProfile = {
  name: "Fernanda Torres",
  img: Fernanda_Torres_Img,
  description: `Fernanda Torres is a licensed clinical psychologist with over 10 years of experience working with children,
    adolescents, and adults. She has worked in a variety of settings including schools, hospitals, and private practice.`,
  languages: ["Spanish", "Catalan"],
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
  price: 100,
  currency: "EUR",
  duration: 50,
  durationUnit: "minutes",
  availability: {
    monday: {
      start: "09:00",
      end: "17:00",
    },
    tuesday: {
      start: "09:00",
      end: "17:00",
    },
    wednesday: {
      start: "09:00",
      end: "17:00",
    },
    thursday: {
      start: "09:00",
      end: "17:00",
    },
    friday: {
      start: "09:00",
      end: "17:00",
    },
    saturday: false,
    sunday: false,
  },
  location: {
    country: "Spain",
    city: "Barcelona",
    address: "1-1-1, Barcelona, Spain",
    timezone: "Europe/Madrid",
  },
  calendar: "https://calendly.com/fernandatorres",
};
