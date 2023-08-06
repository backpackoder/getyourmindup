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
import { NAVBAR_ITEMS } from "@/components/ui/navbar/constants/navbarItems";
import { blue } from "@mui/material/colors";
import { FolderShared } from "@mui/icons-material";

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
      sx={{ backdropFilter: "blur(4px)", color: 'white', transition: "all 0.5s ease-out" }}
    >
      <List sx={{ backgroundColor: blue[900], height: '100vh', color: 'white' }}>

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

        {
          user && !isDashboardMenuOpen && (
            <ListItemTemplate
              route={{ icon: <FolderShared />, label: "Dashboard", path: null, handleMenu: "dashboard" }}
              isActive={false}
              navigateTo={navigateTo}
            />
          )
        }
      </List>
    </Drawer>
  );
};
