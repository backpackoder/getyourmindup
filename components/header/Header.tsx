"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useContext, useState } from "react";
import { Home, VolunteerActivism, Diversity1, SelfImprovement } from "@mui/icons-material";

// Components
import { Logo } from "../Logo";
import { HamburgerMenu } from "./HamburgerMenu";
import { SignInButton } from "../AuthButtons";

// Commons
import { ROUTES } from "@/commons/commons";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { UiContext } from "@/context";
const { GOOD_ACTION_OF_THE_DAY, HOME, RELAX_YOUR_MIND, THANK_FOR_SOMETHING } = ROUTES;

const routes = [
  { icon: <Home />, label: "Home", path: HOME },
  { icon: <VolunteerActivism />, label: "Good action of the day", path: GOOD_ACTION_OF_THE_DAY },
  { icon: <Diversity1 />, label: "Thank for something", path: THANK_FOR_SOMETHING },
  { icon: <SelfImprovement />, label: "Relax your mind", path: RELAX_YOUR_MIND },
];
type Routes = typeof routes;

export function NavbarMain() {
  const [isOpen, setIsOpen] = useState(false);
  const {push} = useRouter()
  const asPath = usePathname();
  const { toggleSideMenu, isMenuOpen } = useContext(UiContext);
  return (
    <AppBar>

      <Toolbar
      // className={`fixed top-0 left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
      //   } gap-8 bg-[rgb(240,240,240)] text-xl p-2 rounded-ee-xl shadow-xl duration-500 z-50
      // sm:static sm:translate-x-0 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:border-4`}
      >



        {/* <HamburgerMenu setIsOpen={setIsOpen} /> */}

        <Logo width={35} height={35} />
        <Box flex={1} />
        <Box sx={{ display: { xs: "none", sm: "block" } }} className="fadeIn">

          <NavBarItem routes={routes} setIsOpen={setIsOpen} />

        </Box>
        <Box flex={1} />
        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
}

type NavBarItemProps = {
  routes: Routes;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBarItem({ routes, setIsOpen }: NavBarItemProps) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col items-center gap-4 p-2 sm:flex-row sm:p-0">
      {routes.map((route, index) => {
        const isActive = pathname === route.path;

        return (
          // key={route.path}
          //   className="w-full sm:flex sm:justify-center"
          // <li
          //   onClick={() => setIsOpen((prev) => !prev)}
          // >
          <Link key={route.path}
            href={route.path}
            className={`flex items-center gap-2 ${isActive ? "text-blue-500" : "text-black"
              } text-center duration-150 hover:text-blue-500`}
          >
            {route.icon} {route.label}
          </Link>
        );
      })}
      <SignInButton setIsOpen={setIsOpen} />
      {/* </li> */}
      {/* <li className="w-full">
      </li> */}


    </ul>
  );
}
