"use client";
import { UiState } from './UiProvider';

type UiAction = { type: '[UI] - ToggleMenu' };

export const uiReducer = (state: UiState, action: UiAction): UiState => {
  switch (action.type) {
    case '[UI] - ToggleMenu':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    default:
      return state;
  }
};