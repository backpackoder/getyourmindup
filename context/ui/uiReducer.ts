"use client";

import { UiState } from "./UiProvider";

type UiAction = { type: "[UI] - ToggleSideMenu" | "[UI] - toggleDashboardMenu" };

export const uiReducer = (state: UiState, action: UiAction): UiState => {
  switch (action.type) {
    case "[UI] - ToggleSideMenu":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };

    case "[UI] - toggleDashboardMenu":
      return {
        ...state,
        isMenuOpen: true,
        isDashboardMenuOpen: !state.isDashboardMenuOpen,
      };

    default:
      return state;
  }
};
