"use client";

import { UiState } from "./UiProvider";

type UiAction = { type: "[UI] - ToggleMenu" | "[UI] - openMenu" | "[UI] - openDashboardMenu" };

export const uiReducer = (state: UiState, action: UiAction): UiState => {
  switch (action.type) {
    case "[UI] - ToggleMenu":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };

    case "[UI] - openMenu":
      return {
        ...state,
        isMenuOpen: true,
        isDashboardMenuOpen: false,
      };

    case "[UI] - openDashboardMenu":
      return {
        ...state,
        isMenuOpen: true,
        isDashboardMenuOpen: true,
      };

    default:
      return state;
  }
};
