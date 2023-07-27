"use client";

import { useRouter, usePathname } from "next/navigation";
import { useContext } from "react";
import { Drawer, List } from "@mui/material";

// Contexts
import { AuthContext, UiContext } from "@/context";

// Components
import { MainMenu } from "./MainMenu";
import { ListItemTemplate } from "./ListItemTemplate";

// Utils
import { NAVBAR_ITEMS } from "@/components/header/components/navbarItems";

export const SideMenu = () => {
  const router = useRouter();
  const asPath = usePathname();
  const { user } = useContext(AuthContext);
  const { toggleSideMenu, isMenuOpen, isDashboardMenuOpen } = useContext(UiContext);

  function navigateTo(url: string) {
    toggleSideMenu();
    router.push(url);
  }

  return (
    <Drawer
      open={isMenuOpen}
      onClose={toggleSideMenu}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <List>
        {!isDashboardMenuOpen && <MainMenu />}

        {user &&
          isDashboardMenuOpen &&
          NAVBAR_ITEMS.DASHBOARD.logged.map((route) => {
            const isActive = asPath === route.path;

            return (
              <ListItemTemplate
                key={route.path}
                route={route}
                isActive={isActive}
                navigateTo={navigateTo}
              />
            );
          })}

        {!user &&
          NAVBAR_ITEMS.DASHBOARD.notLogged.map((route) => {
            const isActive = asPath === route.path(asPath);

            return (
              <ListItemTemplate
                key={route.path(asPath)}
                navigateTo={navigateTo}
                route={route}
                isActive={isActive}
              />
            );
          })}
      </List>
    </Drawer>
  );
};
