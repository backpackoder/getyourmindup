"use client";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  VpnKeyOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useContext, useMemo, useState } from "react";
import { AuthContext, UiContext } from "@/context";

import {
  Diversity1,
  Favorite,
  FolderShared,
  Logout,
  Settings,
  VolunteerActivism,
} from "@mui/icons-material";
import { ROUTES } from "@/commons/commons";

const { AUTH, DASHBOARD } = ROUTES;

const routes = [
  { icon: <FolderShared />, label: "Dashboard", path: DASHBOARD.HOME },
  { icon: <VolunteerActivism />, label: "My actions done", path: DASHBOARD.MY_ACTIONS },
  { icon: <Diversity1 />, label: "My thanks", path: DASHBOARD.MY_THANKS },
  { icon: <Favorite />, label: "My favorites", path: DASHBOARD.MY_FAVORITES },
  { icon: <Settings />, label: "Settings", path: DASHBOARD.SETTINGS },
  { icon: <Logout />, label: "Sign out", path: AUTH.SIGN_OUT },
];

export const SideMenu = () => {
  const router = useRouter();
  const asPath = usePathname();
  const { toggleSideMenu, isMenuOpen } = useContext(UiContext);
  const { user, onLogout } = useContext(AuthContext);
  const userRole = useMemo(() => user?.role, [user]);

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
          {userRole ?
            routes.map((route, index) => {
              const isActive = asPath === route.path;

              if (route.label === 'Sign out') {
                return (
                  <>
                    <Divider />
                    <ListItem key={route.path} button onClick={onLogout}>
                      <ListItemIcon>
                        {route.icon}
                      </ListItemIcon>
                      <ListItemText primary={route.label} />
                    </ListItem>
                  </>);
              }
              return (
                <ListItem key={route.path} button onClick={() => navigateTo(route.path)}>
                  <ListItemIcon>
                    {route.icon}
                  </ListItemIcon>
                  <ListItemText primary={route.label} />
                </ListItem>

              );
            }) : (<ListItem
              button
              onClick={() => navigateTo(`/auth/login?p=${asPath}`)}
            >
              <ListItemIcon>
                <VpnKeyOutlined />
              </ListItemIcon>
              <ListItemText primary={"Sign In"} />
            </ListItem>
            )}
        </List>
      </Box>
    </Drawer>
  );
};
