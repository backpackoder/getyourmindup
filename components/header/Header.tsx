"use client";

import { usePathname } from "next/navigation";
import { AppBar, List, Toolbar } from "@mui/material";

// Components
import { Logo } from "../Logo";
import { ListItemTemplate } from "../ui/sidebar/ListItemTemplate";

// Utils
import { NAVBAR_ITEMS } from "@/utils/navbarItems";
import { Separator } from "./components/Separator";
import { Buttons } from "./components/Buttons";

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
