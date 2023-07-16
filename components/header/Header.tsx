"use client";

import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { AppBar, Box, Button, List, Toolbar } from "@mui/material";
import { Login, Logout } from "@mui/icons-material";

// Contexts
import { AuthContext, UiContext } from "@/context";

// Components
import { Logo } from "../Logo";
import { ListItemTemplate } from "../ui/sidebar/ListItemTemplate";

// Utils
import { NAVBAR_ITEMS } from "@/utils/navbarItems";
import { ROUTES } from "@/commons/commons";

export function NavbarMain() {
  const asPath = usePathname();
  const router = useRouter();
  const { toggleSideMenu } = useContext(UiContext);

  const navigateTo = (url: string) => {
    toggleSideMenu();
    router.push(url);
  };

  return (
    <AppBar>
      <Toolbar>
        <Logo width={35} height={35} />

        <Box flex={1} />
        <Box sx={{ display: { xs: "none", sm: "block" } }} className="fadeIn"></Box>
        <Box flex={1} />

        {/* A VER QUE PASA PQ ESTA MUY GRANDE POR AHORA */}
        <List
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          {NAVBAR_ITEMS.APP.primary.map((route) => {
            const isActive = asPath === route.path;

            return (
              <ListItemTemplate
                key={route.path}
                navigateTo={navigateTo}
                route={route}
                isActive={isActive}
              />
            );
          })}
        </List>

        <Box flex={1} />
        <Box sx={{ display: { xs: "none", sm: "block" } }} className="fadeIn"></Box>
        <Box flex={1} />

        <Buttons />
      </Toolbar>
    </AppBar>
  );
}

function Buttons() {
  const asPath = usePathname();
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const { toggleSideMenu } = useContext(UiContext);

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
      <Button onClick={() => toggleSideMenu()}>Menu</Button>

      {!user &&
        NAVBAR_ITEMS.APP.notLogged.map((route) => {
          return (
            <Button key={route.path(asPath)} onClick={() => router.push(route.path(asPath))}>
              {route.icon} {route.label}
            </Button>
          );
        })}
    </Box>
  );
}
