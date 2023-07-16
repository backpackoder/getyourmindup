"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Badge,
  Input,
  InputAdornment,
} from "@mui/material";
import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { UiContext } from "@/context";

import { Home, VolunteerActivism, Diversity1, SelfImprovement } from "@mui/icons-material";
// Commons
import { ROUTES } from "@/commons/commons";
import { Logo } from "@/components/Logo";
const { GOOD_ACTION_OF_THE_DAY, HOME, RELAX_YOUR_MIND, THANK_FOR_SOMETHING } = ROUTES;

const routes = [
  { icon: <Home />, label: "Home", path: HOME },
  { icon: <VolunteerActivism />, label: "Good action of the day", path: GOOD_ACTION_OF_THE_DAY },
  { icon: <Diversity1 />, label: "Thank for something", path: THANK_FOR_SOMETHING },
  { icon: <SelfImprovement />, label: "Relax your mind", path: RELAX_YOUR_MIND },
];

type Routes = typeof routes;


export const Navbar = () => {
  const { toggleSideMenu, isMenuOpen } = useContext(UiContext);
  const { push } = useRouter();
  const asPath = usePathname();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push(`/search/${searchTerm}`);
  };

  return (
    <AppBar>
      <Toolbar>
        <Link
          href="/"
          passHref
          style={{ display: "flex", alignItems: "center" }}
        >
          <Logo width={35} height={35} />
        </Link>
        <Box flex={1} />
        <Box sx={{ display: isSearchVisible ? 'none' : { xs: "none", sm: "block" } }} className="fadeIn" >

          {routes.map((route, index) => {
            // const isActive = pathname === route.path;

            return (
              <Link key={route.path} href={route.path}>
                <Button startIcon={route.icon} color={asPath === route.path ? "primary" : "info"}>
                  {route.label}
                </Button>
              </Link>
            )
            // return (
            //   <li
            //     key={index}
            //     className="w-full sm:flex sm:justify-center"
            //     onClick={() => setIsOpen((prev) => !prev)}
            //   >
            //     <Link
            //       href={route.path}
            //       className={`flex items-center gap-2 ${isActive ? "text-blue-500" : "text-black"
            //         } text-center duration-150 hover:text-blue-500`}
            //     >
            //       {route.icon} {route.label}
            //     </Link>
            //   </li>
            // );
          })}

        </Box>

        <Box flex={1} />
        <Button onClick={toggleSideMenu}>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};
