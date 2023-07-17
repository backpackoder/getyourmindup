"use client";
import { createContext } from "react";

interface ContextProps {
  isMenuOpen: boolean;
  isDashboardMenuOpen: boolean;
  toggleSideMenu: () => void;
  setOpenSnackbarSuccess: (open: boolean) => void;
  setOpenSnackbarError: (open: boolean) => void;
  toggleMenu: () => void;
  toggleDashboardMenu: () => void;
}

export const UiContext = createContext({} as ContextProps);
