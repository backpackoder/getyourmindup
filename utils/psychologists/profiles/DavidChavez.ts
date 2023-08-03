// Assets
import David_Chavez_Img from "@/assets/imgs/psychologists/David Chavez.jpg";

// Types
import { PsychologistProfile } from "../types";

export const David_Chavez: PsychologistProfile = {
  name: "David Chavez",
  img: David_Chavez_Img,
  description: `David Chavez is a licensed clinical psychologist with over 10 years of experience working with children,
    adolescents, and adults. He has worked in a variety of settings including schools, hospitals, and private practice.`,
  languages: ["Spanish", "English"],
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
  currency: "USD",
  duration: 50,
  durationUnit: "minutes",
  availability: {
    monday: {
      start: "10:00",
      end: "17:00",
    },
    tuesday: {
      start: "10:00",
      end: "17:00",
    },
    wednesday: {
      start: "10:00",
      end: "17:00",
    },
    thursday: {
      start: "10:00",
      end: "17:00",
    },
    friday: {
      start: "10:00",
      end: "17:00",
    },
    saturday: false,
    sunday: false,
  },
  location: {
    country: "Mexico",
    city: "Mexico City",
    address: "1-1-1, Mexico City, Mexico",
    timezone: "America/Mexico_City",
  },
  calendar: "https://calendly.com/davidchavez",
};
