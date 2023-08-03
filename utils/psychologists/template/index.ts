// Assets
import Default_Profile_Image from "@/assets/imgs/psychologists/default_profile_image.jpg";

// Types
import { PsychologistProfile } from "../types";

export const Psychologist_Template: PsychologistProfile = {
  name: "",
  img: Default_Profile_Image,
  description: ``,
  languages: [],
  specializations: [],
  price: 0,
  currency: "",
  duration: 0,
  durationUnit: "minutes",
  availability: {
    monday: {
      start: "",
      end: "",
    },
    tuesday: {
      start: "",
      end: "",
    },
    wednesday: {
      start: "",
      end: "",
    },
    thursday: {
      start: "",
      end: "",
    },
    friday: {
      start: "",
      end: "",
    },
    saturday: false,
    sunday: false,
  },
  location: {
    country: "",
    city: "",
    address: "",
    timezone: "",
  },
  calendar: "",
};
