"use client";

import { FC, useReducer } from "react";
import { UiContext, uiReducer } from ".";

export interface UiState {
  isMenuOpen: boolean;
  isDashboardMenuOpen: boolean;
}

export const UiInitialState: UiState = {
  isMenuOpen: false,
  isDashboardMenuOpen: false,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UiInitialState);

  const toggleSideMenu = () => dispatch({ type: "[UI] - ToggleMenu" });
  const toggleMenu = () => dispatch({ type: "[UI] - openMenu" });
  const toggleDashboardMenu = () => dispatch({ type: "[UI] - openDashboardMenu" });

  return (
    <UiContext.Provider value={{ ...state, toggleSideMenu, toggleMenu, toggleDashboardMenu }}>
      {children}
    </UiContext.Provider>
  );
};
