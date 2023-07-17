"use client";
import { createContext } from 'react';

interface ContextProps {
  isMenuOpen: boolean;
  toggleSideMenu: () => void;
  setOpenSnackbarSuccess: (open: boolean) => void;
  setOpenSnackbarError: (open: boolean) => void;
}

export const UiContext = createContext({} as ContextProps);