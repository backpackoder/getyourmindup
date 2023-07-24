// Assets
import Sarah_Beldoun_Img from "@/assets/imgs/psychologists/Sarah Beldoun.jpg";

// Types
import { PsychologistProfile } from "../types";

export const Sarah_Beldoun: PsychologistProfile = {
  name: "Sarah Beldoun",
  img: Sarah_Beldoun_Img,
  description: `Sarah Beldoun is a licensed clinical psychologist with over 10 years of experience working with children, adolescents, and adults.
      She has worked in a variety of settings including schools, hospitals, and private practice. She has extensive experience
      working with individuals with anxiety, depression, trauma, and relationship issues. She has also worked with individuals
      with autism spectrum disorders, ADHD, and learning disabilities. She has a special interest in working with individuals
      with chronic medical conditions and their families. She is trained in Cognitive Behavioral Therapy (CBT), Acceptance and
      Commitment Therapy (ACT), and mindfulness-based approaches. She is bilingual in English and Japanese.`,
  languages: ["French"],
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
    country: "France",
    city: "Paris",
    address: "1-1-1, Paris, France",
    timezone: "Europe/Paris",
  },
  calendar: "https://calendly.com/sarahbeldoun",
};
