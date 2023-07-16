"use client";
import { FC, useReducer } from "react";
import { UiContext, uiReducer } from ".";

export interface UiState {
  isMenuOpen: boolean;
}

export const UiInitialState: UiState = {
  isMenuOpen: false,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UiInitialState);

  const toggleSideMenu = () => dispatch({ type: "[UI] - ToggleMenu" });
  return (
    <UiContext.Provider value={{ ...state, toggleSideMenu }}>{children}</UiContext.Provider>
  );
};
