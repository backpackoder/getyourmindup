import {
  FavoriteBorder,
  BookRounded,
  Home,
  LocalLibrary,
  SelfImprovement,
  Diversity1,
  FolderShared,
  Settings,
  VolunteerActivism,
  Logout,
  Login,
} from "@mui/icons-material";

// Commons
import { ROUTES } from "@/commons/commons";
const {
  ABOUT,
  AUTH,
  BLOG,
  DASHBOARD,
  GOOD_ACTION_OF_THE_DAY,
  HOME,
  RELAX_YOUR_MIND,
  THANK_FOR_SOMETHING,
} = ROUTES;

export const NAVBAR_ITEMS = {
  APP: {
    primary: [
      { icon: <Home />, label: "Home", path: HOME },
      {
        icon: <VolunteerActivism />,
        label: "Good action",
        path: GOOD_ACTION_OF_THE_DAY,
      },
      { icon: <Diversity1 />, label: "Thank", path: THANK_FOR_SOMETHING },
      { icon: <SelfImprovement />, label: "Relax", path: RELAX_YOUR_MIND },
    ],
    secondary: [
      { icon: <LocalLibrary />, label: "Read", path: BLOG.HOME },
      { icon: <BookRounded />, label: "About", path: ABOUT },
    ],
    notLogged: [
      { icon: <Login />, label: "Sign in", path: AUTH.LOG_IN },
      { icon: <Login />, label: "Sign up", path: AUTH.SIGN_UP },
    ],
    logged: [
      { icon: <FolderShared />, label: "Dashboard", path: DASHBOARD.HOME },
      { icon: <VolunteerActivism />, label: "My actions done", path: DASHBOARD.MY_ACTIONS },
      { icon: <Diversity1 />, label: "My thanks", path: DASHBOARD.MY_THANKS },
      { icon: <FavoriteBorder />, label: "My favorites", path: DASHBOARD.MY_FAVORITES },
      { icon: <Settings />, label: "Settings", path: DASHBOARD.SETTINGS },
      { icon: <Logout />, label: "Sign out", path: AUTH.LOG_OUT },
    ],
  },
};
