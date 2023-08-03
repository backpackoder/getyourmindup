import {
  FavoriteBorder,
  BookRounded,
  LocalLibrary,
  SelfImprovement,
  Diversity1,
  FolderShared,
  Settings,
  VolunteerActivism,
  Logout,
  Login,
  ArrowBack,
} from "@mui/icons-material";

// Commons
import { ROUTES } from "@/commons/commons";
const {
  ABOUT,
  AUTH,
  BLOG,
  DASHBOARD,
  GOOD_ACTION_OF_THE_DAY,
  RELAX_YOUR_MIND,
  THANK_FOR_SOMETHING,
} = ROUTES;

export const NAVBAR_ITEMS = {
  notLogged: [
    { icon: <Login />, label: "Sign in", path: AUTH.LOG_IN },
    { icon: null, label: "Sign up", path: AUTH.SIGN_UP },
  ],
  APP: {
    primary: [
      { icon: <Diversity1 />, label: "Thank for something", path: THANK_FOR_SOMETHING },
      {
        icon: <VolunteerActivism />,
        label: "Good action of the day",
        path: GOOD_ACTION_OF_THE_DAY,
      },
      { icon: <SelfImprovement />, label: "Relax your mind", path: RELAX_YOUR_MIND },
    ],
    secondary: [
      { icon: <LocalLibrary />, label: "Read", path: BLOG.HOME },
      { icon: <BookRounded />, label: "About us", path: ABOUT },

    ],
  },
  DASHBOARD: {
    logged: [
      { icon: <ArrowBack />, label: "Main menu", path: null, handleMenu: "main" },
      { icon: <FolderShared />, label: "Profile", path: DASHBOARD.HOME },
      { icon: <VolunteerActivism />, label: "My actions done", path: DASHBOARD.MY_ACTIONS },
      { icon: <Diversity1 />, label: "My thanks", path: DASHBOARD.MY_THANKS },
      { icon: <FavoriteBorder />, label: "My favorites", path: DASHBOARD.MY_FAVORITES },
      { icon: <Settings />, label: "Settings", path: DASHBOARD.SETTINGS },
      { icon: <Logout />, label: "Sign out", path: AUTH.LOG_OUT },
    ],
  },
};

export type NAVBAR_ITEMS_TYPE = typeof NAVBAR_ITEMS;
export type NAVBAR_ITEMS_KEYS = keyof NAVBAR_ITEMS_TYPE;
export type NAVBAR_ITEMS_VALUES = NAVBAR_ITEMS_TYPE[NAVBAR_ITEMS_KEYS];
export type NAVBAR_ITEMS_PRIMARY = NAVBAR_ITEMS_TYPE["APP"]["primary"];
export type NAVBAR_ITEMS_SECONDARY = NAVBAR_ITEMS_TYPE["APP"]["secondary"];
export type NAVBAR_ITEMS_NOT_LOGGED = NAVBAR_ITEMS_TYPE["notLogged"];
export type NAVBAR_ITEMS_LOGGED = NAVBAR_ITEMS_TYPE["DASHBOARD"]["logged"];
export type NAVBAR_ITEMS_PRIMARY_ITEM = NAVBAR_ITEMS_PRIMARY[number];
export type NAVBAR_ITEMS_SECONDARY_ITEM = NAVBAR_ITEMS_SECONDARY[number];
export type NAVBAR_ITEMS_NOT_LOGGED_ITEM = NAVBAR_ITEMS_NOT_LOGGED[number];
export type NAVBAR_ITEMS_LOGGED_ITEM = NAVBAR_ITEMS_LOGGED[number];
