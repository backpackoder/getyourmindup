// Assets
import PicOfThibaut from "@/assets/imgs/owners/Thibaut - Profile picture.jpg";
import PicOfMiguel from "@/assets/imgs/owners/Miguel - Profile picture.jpg";

export const ROUTES = {
  HOME: "/",
  GOOD_ACTION_OF_THE_DAY: "/action",
  THANK_FOR_SOMETHING: "/thank",
  RELAX_YOUR_MIND: "/relax",
  ABOUT: "/about",
  BLOG: {
    HOME: "/blog",
    ARTICLE: (title: string) => `/blog/${title}`,
  },
  USERS: "/users",

  AUTH: {
    SIGN_UP: (asPath: string) => `/auth/register?p=${asPath}`,
    LOG_IN: (asPath: string) => `/auth/login?p=${asPath}`,
    LOG_OUT: "/api/auth/signout",
  },

  DASHBOARD: {
    HOME: "/dashboard",
    MY_ACTIONS: "/dashboard/my-actions",
    MY_THANKS: "/dashboard/my-thanks",
    MY_FAVORITES: "/dashboard/favorites",
    SETTINGS: "/dashboard/settings",
  },

  API: {
    // Users
    USERS: "/api/users",
    USER: (id: string) => `/api/users/${id}`,
    // Good action of the day
    ACTIONS: "/api/actions",
    ACTION: (id: string) => `/api/actions/${id}`,
    // Thank for something
    THANKS: "/api/thanks",
    THANK: (id: string) => `/api/thanks/${id}`,
    // Relax your mind
    RELAX: "/api/relax",
  },
};

export const OWNERS = {
  MIGUEL: {
    NAME: "Miguel",
    SURNAME: "Herrera",
    PICTURE: PicOfMiguel,
    JOB: "Fullstack web developer",
    BIO: "I am a fullstack web developer, I like to learn new things and I am passionate about technology.",
    CONTACT: {
      PHONE: null,
      LINKEDIN: "https://www.linkedin.com/in/miguel-herrera-86a8a71a4/",
      GITHUB: "https://github.com/pac008",
      TWITTER: null,
    },
  },
  THIBAUT: {
    NAME: "Thibaut",
    SURNAME: "Barbiera",
    PICTURE: PicOfThibaut,
    JOB: "Frontend web developer",
    BIO: "I am a frontend web developer, I like to learn new things and I am passionate about technology.",
    CONTACT: {
      PHONE: "+33674020502",
      LINKEDIN: "https://www.linkedin.com/in/backpackoder",
      GITHUB: "https://github.com/backpackoder",
      TWITTER: null,
    },
  },
};
