"use client";
import { FC, useEffect, useReducer, useState } from "react";
import { UiContext, uiReducer } from ".";
import { Alert, Box, Snackbar } from "@mui/material";

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
  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState<boolean>(false)
  const [openSnackbarError, setOpenSnackbarError] = useState<boolean>(false)


  const toggleSideMenu = () => dispatch({ type: "[UI] - ToggleMenu" });
  return (
    <UiContext.Provider value={{ ...state, toggleSideMenu, setOpenSnackbarSuccess, setOpenSnackbarError }}>

      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openSnackbarSuccess} autoHideDuration={4000} onClose={() => setOpenSnackbarSuccess(false)}>
        <Alert severity="success" sx={{ width: '100%' }}>
          The request was completed correctly
        </Alert>
      </Snackbar>

      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openSnackbarError} autoHideDuration={4000} onClose={() => setOpenSnackbarError(false)}>
        <Alert severity="error" sx={{ width: '100%' }}>
          The request could not be completed
        </Alert>
      </Snackbar>

      {children}

    </UiContext.Provider >
  );
};
