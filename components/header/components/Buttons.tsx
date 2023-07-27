"use client";

import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Box, Button } from "@mui/material";

// Contexts
import { AuthContext, UiContext } from "@/context";

// Utils
import { NAVBAR_ITEMS } from "@/components/header/components/navbarItems";
import { DashboardMenu } from "./DashboardMenu";

export function Buttons() {
  const asPath = usePathname();
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const { toggleSideMenu, toggleMenu } = useContext(UiContext);

  function handleMenu() {
    toggleSideMenu();
    toggleMenu();
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
      className="fadeIn"
    >

      {user ? (
        <DashboardMenu />
      ) : (
        NAVBAR_ITEMS.DASHBOARD.notLogged.map((route) => {
          return (
            <Button variant={route.label === 'Sign in' ? 'outlined' : 'contained'} sx={{ color: 'white', border: 'none' }} key={route.path(asPath)} onClick={() => router.push(route.path(asPath))}>
              {route.icon && <> {route.icon}&nbsp;</>} {route.label}
            </Button>
          );
        })
      )}
      <Button onClick={() => handleMenu()}>Menu</Button>
    </Box>
  );
}
