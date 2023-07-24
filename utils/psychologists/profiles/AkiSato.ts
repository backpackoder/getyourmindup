// Assets
import Aki_Sato_Img from "@/assets/imgs/psychologists/Aki Sato.jpg";

// Types
import { PsychologistProfile } from "../types";

export const Aki_Sato: PsychologistProfile = {
  name: "Aki Sato",
  img: Aki_Sato_Img,
  description: `Aki Sato is a licensed clinical psychologist with over 10 years of experience working with children, adolescents, and adults.
      She has worked in a variety of settings including schools, hospitals, and private practice. She has extensive experience
      working with individuals with anxiety, depression, trauma, and relationship issues. She has also worked with individuals
      with autism spectrum disorders, ADHD, and learning disabilities. She has a special interest in working with individuals
      with chronic medical conditions and their families. She is trained in Cognitive Behavioral Therapy (CBT), Acceptance and
      Commitment Therapy (ACT), and mindfulness-based approaches. She is bilingual in English and Japanese.`,
  languages: ["Japanese", "English"],
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
    country: "Japan",
    city: "Tokyo",
    address: "1-1-1, Tokyo, Japan",
    timezone: "Asia/Tokyo",
  },
  calendar: "https://calendly.com/akisato",
};
