"use client";
import { createContext } from "react";

interface ContextProps {
  isMenuOpen: boolean;
  isDashboardMenuOpen: boolean;
  toggleSideMenu: () => void;
  toggleDashboardMenu: () => void;
  setOpenSnackbarSuccess: (open: boolean) => void;
  setOpenSnackbarError: (open: boolean) => void;
}

export const UiContext = createContext({} as ContextProps);
