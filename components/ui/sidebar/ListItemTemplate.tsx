"use client";

import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

// Contexts
import { UiContext } from "@/context";
import { amber } from "@mui/material/colors";

type ListItemTemplateProps = {
  navigateTo?: (url: string) => void;
  route: any;
  isActive: boolean;
};

export function ListItemTemplate({ navigateTo, route, isActive }: ListItemTemplateProps) {
  const asPath = usePathname();
  const router = useRouter();
  const { toggleDashboardMenu } = useContext(UiContext);

  function handleNavigate() {
    route.handleMenu
      ? toggleDashboardMenu()
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
        color: 'white',
        transitionDuration: "0.25s",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "primary.light",
        },
      }}
      onClick={() => handleNavigate()}
    >
      <ListItemIcon sx={{color: 'white'}} >{route.icon}</ListItemIcon>
      <ListItemText
        primary={route.label}
        sx={{
          fontWeight: 500,
          textDecoration: isActive ? 'underline' : 'none',
          textDecorationColor: amber[800],
          textDecorationStyle: 'solid',
          textUnderlineOffset: '8px',
          textDecorationThickness: '2px',
        }}
      />
    </ListItem>
  );
}
