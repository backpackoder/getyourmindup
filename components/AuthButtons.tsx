"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Diversity1,
  Favorite,
  FolderShared,
  Login,
  Logout,
  Settings,
  VolunteerActivism,
} from "@mui/icons-material";

// Styles
import { styles } from "@/assets/styles/styles";

// Commons
import { ROUTES } from "@/commons/commons";
const { AUTH, DASHBOARD } = ROUTES;

export function SignInButton() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [isProfileSubMenuOpen, setIsProfileSubMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const routes = [
    { icon: <FolderShared />, label: "Dashboard", path: DASHBOARD.HOME },
    { icon: <VolunteerActivism />, label: "My actions done", path: DASHBOARD.MY_ACTIONS },
    { icon: <Diversity1 />, label: "My thanks", path: DASHBOARD.MY_THANKS },
    { icon: <Favorite />, label: "My favorites", path: DASHBOARD.MY_FAVORITES },
    { icon: <Settings />, label: "Settings", path: DASHBOARD.SETTINGS },
    { icon: <Logout />, label: "Sign out", path: AUTH.LOG_OUT },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsProfileSubMenuOpen(false);
      }
    }

    if (isProfileSubMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isProfileSubMenuOpen]);

  if (status === "loading") {
    return <></>;
  }

  if (status === "unauthenticated") {
    return (
      <button
        className="flex items-center gap-2 w-max"
        onClick={() => push(`/auth/login?p=${pathname}`)}
      >
        <Login /> Sign in
      </button>
    );
  }

  function handleClick() {
    setIsProfileSubMenuOpen((prev) => !prev);
  }

  return (
    session && (
      <div className="relative">
        <Image
          src={session.user?.image ?? ""}
          alt={session.user?.name ?? "No name"}
          width={32}
          height={32}
          className={`${styles.imgSquareCropped} rounded-full cursor-pointer`}
          onClick={() => setIsProfileSubMenuOpen((prev) => !prev)}
        />

        {isProfileSubMenuOpen && (
          <div
            ref={menuRef}
            className="absolute -bottom-2 translate-y-full min-w-max bg-transparent"
          >
            <ul className="flex flex-col gap-y-2 bg-white p-2 border-2 rounded-md shadow-md">
              {routes.map((route, index) => {
                const isActive = pathname === route.path;

                return (
                  <li
                    key={index}
                    className={`${
                      isActive ? "text-blue-500" : "text-black"
                    } py-1 px-3 rounded-lg duration-300 hover:bg-blue-300`}
                    onClick={() => handleClick()}
                  >
                    <Link href={route.path} className="flex items-center gap-2">
                      {route.icon} {route.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    )
  );
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
