import { IUser } from "@/interfaces";
import { AuthState } from "./AuthProvider";

type AuthAction =
  | { type: "Auth - Login"; payload: IUser }
  | { type: "Auth - Logout" }
  | { type: "Auth - LevelUp", payload: IUser };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "Auth - Login":
      return {
        ...state,
        isLoggedIn: true,
        user: {
          ...action.payload,
          level: state.user?.level ? state.user?.level : action.payload.level
        },
      };
    case "Auth - Logout":
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
      };
    case "Auth - LevelUp":
      return {
        ...state,
        user: {
          ...action.payload,
          level: state.user?.level ? state.user?.level + 1 : action.payload.level + 1
        }
      };
    default:
      return state;
  }
};
