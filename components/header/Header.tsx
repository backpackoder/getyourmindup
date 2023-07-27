"use client";

import { usePathname } from "next/navigation";
import { AppBar, Box, List, Toolbar } from "@mui/material";

// Components
import { Logo } from "../Logo";
import { ListItemTemplate } from "../ui/sidebar/ListItemTemplate";

// Utils
import { NAVBAR_ITEMS } from "@/components/header/components/navbarItems";
import { Buttons } from "./components/Buttons";

export function NavbarMain() {
  const asPath = usePathname();

  return (
    <AppBar elevation={1}>
      <Toolbar>
        <Logo width={35} height={35} />

        <Box flex={1} />

        <List
          sx={{
            display: { xs: "none", md: "flex" },
            height: 74,
          }}
        >
          {NAVBAR_ITEMS.APP.primary.map((route) => {
            const isActive = asPath === route.path;

            return <ListItemTemplate key={route.path} route={route} isActive={isActive} />;
          })}
        </List>

        <Box flex={1} />

        <Buttons />

      </Toolbar>
    </AppBar>
  );
}


