"use client";

import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

// Contexts
import { UiContext } from "@/context";

type ListItemTemplateProps = {
  navigateTo?: (url: string) => void;
  route: any;
  isActive: boolean;
};

export function ListItemTemplate({ navigateTo, route, isActive }: ListItemTemplateProps) {
  const asPath = usePathname();
  const router = useRouter();

  const { toggleMenu, toggleDashboardMenu } = useContext(UiContext);

  function handleMenus(menu: string) {
    switch (menu) {
      case "dashboard":
        toggleDashboardMenu();
        break;

      default:
        toggleMenu();
        break;
    }
  }

  function handleNavigate() {
    route.handleMenu
      ? handleMenus(route.handleMenu)
      : route.path &&
        (navigateTo
          ? navigateTo(
              route.label === "Sign in" || route.label === "Sign up"
                ? route.path(asPath)
                : route.path
            )
          : router.push(route.path));
  }

  return (
    <ListItem
      sx={{
        transitionDuration: "0.25s",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "primary.light",
        },
      }}
      onClick={() => handleNavigate()}
    >
      <ListItemIcon>{route.icon}</ListItemIcon>
      <ListItemText
        primary={route.label}
        sx={{
          color: isActive ? "primary.main" : "text.primary",
        }}
      />
    </ListItem>
  );
}
