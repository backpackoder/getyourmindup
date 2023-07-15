export const ROUTES = {
  HOME: "/",
  GOOD_ACTION_OF_THE_DAY: "/action",
  THANK_FOR_SOMETHING: "/thank",
  RELAX_YOUR_MIND: "/relax",
  ABOUT: "/about",
  USERS: "/users",

  AUTH: {
    SIGN_IN: "/api/auth/signin",
    SIGN_OUT: "/api/auth/signout",
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
