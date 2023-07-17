"use client";
import { createContext } from "react";

interface ContextProps {
  isMenuOpen: boolean;
  isDashboardMenuOpen: boolean;
  toggleSideMenu: () => void;
  toggleMenu: () => void;
  toggleDashboardMenu: () => void;
}

export const UiContext = createContext({} as ContextProps);
