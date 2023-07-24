// Assets
import Robert_Rossi_Img from "@/assets/imgs/psychologists/Robert Rossi.jpg";

// Types
import { PsychologistProfile } from "../types";

export const Robert_Rossi: PsychologistProfile = {
  name: "Robert Rossi",
  img: Robert_Rossi_Img,
  description: `Robert Rossi is a licensed clinical psychologist with over 10 years of experience working with children, adolescents, and adults.
      She has worked in a variety of settings including schools, hospitals, and private practice. She has extensive experience
      working with individuals with anxiety, depression, trauma, and relationship issues. She has also worked with individuals
      with autism spectrum disorders, ADHD, and learning disabilities. She has a special interest in working with individuals
      with chronic medical conditions and their families. She is trained in Cognitive Behavioral Therapy (CBT), Acceptance and
      Commitment Therapy (ACT), and mindfulness-based approaches. She is bilingual in English and Japanese.`,
  languages: ["English", "Italian"],
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
    country: "United States",
    city: "Chicago",
    address: "1-1-1, Chicago, United States",
    timezone: "America/Chicago",
  },
  calendar: "https://calendly.com/robertrossi",
};
