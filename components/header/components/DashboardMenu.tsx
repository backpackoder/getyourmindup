"use client";

import Image from "next/image";
import { useContext } from "react";
import { Box } from "@mui/material";

// Contexts
import { AuthContext, UiContext } from "@/context";

// Commons
import { IMAGES } from "@/commons/commons";

export function DashboardMenu() {
  const { user } = useContext(AuthContext);
  const { toggleSideMenu, toggleDashboardMenu } = useContext(UiContext);

  function handleMenu() {
    toggleSideMenu();
    toggleDashboardMenu();
  }

  return (
    user && (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
        className="fadeIn"
      >
        <Image
          src={IMAGES.DEFAULT_PROFILE_IMAGE}
          alt={`${user.name}'s profile picture`}
          width={20}
          height={20}
          className="rounded-full cursor-pointer"
          onClick={() => handleMenu()}
        />
      </Box>
    )
  );
}
