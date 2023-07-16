"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  BookRounded,
  Diversity1,
  Home,
  LocalLibrary,
  SelfImprovement,
  VolunteerActivism,
} from "@mui/icons-material";

// Components
import { Logo } from "../Logo";
import { HamburgerMenu } from "./HamburgerMenu";
import { SignInButton } from "../AuthButtons";

// Commons
import { ROUTES } from "@/commons/commons";
const { ABOUT, BLOG, GOOD_ACTION_OF_THE_DAY, HOME, RELAX_YOUR_MIND, THANK_FOR_SOMETHING } = ROUTES;

const routes = [
  { icon: <Home />, label: "Home", path: HOME },
  { icon: <VolunteerActivism />, label: "Good action of the day", path: GOOD_ACTION_OF_THE_DAY },
  { icon: <Diversity1 />, label: "Thank for something", path: THANK_FOR_SOMETHING },
  { icon: <SelfImprovement />, label: "Relax your mind", path: RELAX_YOUR_MIND },
  { icon: <LocalLibrary />, label: "Read", path: BLOG.HOME },
  { icon: <BookRounded />, label: "About", path: ABOUT },
];
type Routes = typeof routes;

export function NavbarMain() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } gap-8 bg-[rgb(240,240,240)] text-xl p-2 rounded-ee-xl shadow-xl duration-500 z-50
      md:static md:translate-x-0 md:flex md:items-center md:justify-center md:border-4`}
    >
      <HamburgerMenu setIsOpen={setIsOpen} />

      <Logo width={35} height={35} />

      <NavBarItem routes={routes} setIsOpen={setIsOpen} />
    </nav>
  );
}

type NavBarItemProps = {
  routes: Routes;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavBarItem({ routes, setIsOpen }: NavBarItemProps) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col items-center gap-4 p-2 md:flex-row md:p-0">
      {routes.map((route, index) => {
        const isActive = pathname === route.path;

        return (
          <li
            key={index}
            className="md:flex md:justify-center"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Link
              href={route.path}
              className={`flex items-center gap-2 ${
                isActive ? "text-blue-500" : "text-black"
              } text-center duration-150 hover:text-blue-500`}
            >
              {route.icon} {route.label}
            </Link>
          </li>
        );
      })}
      <li className="">
        <SignInButton setIsOpen={setIsOpen} />
      </li>
    </ul>
  );
}
