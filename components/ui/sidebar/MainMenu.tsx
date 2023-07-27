import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

// Contexts
import { UiContext } from "@/context";

// Components
import { ListItemTemplate } from "./ListItemTemplate";

// Utils
import { NAVBAR_ITEMS } from "@/components/ui/navbar/constants/navbarItems";
import { Box, Divider, IconButton } from "@mui/material";
import { amber, blue } from "@mui/material/colors";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export function MainMenu() {
  const asPath = usePathname();
  const router = useRouter();
  const { toggleSideMenu } = useContext(UiContext);

  function navigateTo(url: string) {
    toggleSideMenu();
    router.push(url);
  }

  return (
    <>

      <IconButton onClick={toggleSideMenu} size="large">
        <ChevronRightIcon sx={{ color: 'white' }} />
      </IconButton>

      <Divider color={blue[800]} />
      <Box sx={{ display: { md: 'none' } }}>

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
        <Divider color={blue[800]} />
      </Box>
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
    </>
  );
}
