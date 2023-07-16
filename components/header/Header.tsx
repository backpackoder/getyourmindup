"use client";

import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { AppBar, Box, Button, List, Toolbar } from "@mui/material";

// Contexts
import { AuthContext, UiContext } from "@/context";

// Components
import { Logo } from "../Logo";
import { ListItemTemplate } from "../ui/sidebar/ListItemTemplate";

// Utils
import { NAVBAR_ITEMS } from "@/utils/navbarItems";

export function NavbarMain() {
  const asPath = usePathname();

  return (
    <AppBar>
      <Toolbar>
        <Logo width={35} height={35} />

        <Separator />

        <List
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          {NAVBAR_ITEMS.APP.primary.map((route) => {
            const isActive = asPath === route.path;

            return <ListItemTemplate key={route.path} route={route} isActive={isActive} />;
          })}
        </List>

        <Separator />

        <Buttons />
      </Toolbar>
    </AppBar>
  );
}

function Separator() {
  return (
    <>
      <Box flex={1} />
      <Box sx={{ display: { xs: "none", sm: "block" } }} className="fadeIn"></Box>
      <Box flex={1} />
    </>
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
