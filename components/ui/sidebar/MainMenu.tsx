import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

// Contexts
import { UiContext } from "@/context";

// Components
import { ListItemTemplate } from "./ListItemTemplate";

// Utils
import { NAVBAR_ITEMS } from "@/components/header/components/navbarItems";

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
    </>
  );
}
