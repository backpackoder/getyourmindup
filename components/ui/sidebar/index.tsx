"use client";

import { useRouter, usePathname } from "next/navigation";
import { useContext } from "react";
import { Box, Drawer, List } from "@mui/material";

// Contexts
import { AuthContext, UiContext } from "@/context";

// Components
import { ListItemTemplate } from "./ListItemTemplate";

// Utils
import { NAVBAR_ITEMS } from "@/utils/navbarItems";

export const SideMenu = () => {
  const router = useRouter();
  const asPath = usePathname();
  const { user } = useContext(AuthContext);
  const { toggleSideMenu, isMenuOpen } = useContext(UiContext);

  const navigateTo = (url: string) => {
    toggleSideMenu();
    router.push(url);
  };

  return (
    <Drawer
      open={isMenuOpen}
      onClose={toggleSideMenu}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
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
          {NAVBAR_ITEMS.APP.secondary.map((route) => {
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

          {user
            ? NAVBAR_ITEMS.APP.logged.map((route) => {
                const isActive = asPath === route.path;

                return (
                  <ListItemTemplate
                    key={route.path}
                    navigateTo={navigateTo}
                    route={route}
                    isActive={isActive}
                  />
                );
              })
            : NAVBAR_ITEMS.APP.notLogged.map((route) => {
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
      </Box>
    </Drawer>
  );
};
