"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@mui/material";

// Commons
import { ROUTES } from "@/commons/commons";

// Types
import { CategorysPlaylistsItem } from "@/utils/spotify/music/getCategorysPlaylists/types";

type PlaylistItemProps = {
  item: CategorysPlaylistsItem;
};

export function PlaylistItem({ item }: PlaylistItemProps) {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-[300px] rounded-xl">
      <Link
        href={ROUTES.RELAX_YOUR_MIND_MUSIC_PLAYLISTS_PLAYLIST(item.id)}
        className="duration-300 hover:underline hover:text-blue-500"
      >
        <h3 className="text-2xl font-medium">{item.name}</h3>
      </Link>

      <div className="group relative">
        <p
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden max-w-[300px] max-h-full
          text-white text-center font-medium p-2 overflow-hidden z-10
        pointer-events-none ${isShowed ? "" : "group-hover:block"}`}
        >
          {item.description}
        </p>

        {isShowed ? (
          <iframe
            src={`https://open.spotify.com/embed/playlist/${item.id}`}
            width="300"
            height="380"
            allow="encrypted-media"
            className="mx-auto"
          ></iframe>
        ) : (
          <Image
            src={item.images[0].url}
            alt={item.name}
            width={300}
            height={300}
            onClick={() => setIsShowed(true)}
            className="duration-300 cursor-pointer group-hover:brightness-[0.25]"
          />
        )}
      </div>

      <Buttons isShowed={isShowed} setIsShowed={setIsShowed} id={item.id} />
    </div>
  );
}

type ButtonsProps = {
  isShowed: boolean;
  setIsShowed: Dispatch<SetStateAction<boolean>>;
  id: string;
};

function Buttons({ isShowed, setIsShowed, id }: ButtonsProps) {
  return (
    <div className="flex items-center justify-between gap-4 text-center">
      <Button className="w-full" onClick={() => setIsShowed((prev) => !prev)}>
        {isShowed ? "CLOSE" : "LISTEN"}
      </Button>

      <Link
        href={ROUTES.RELAX_YOUR_MIND_MUSIC_PLAYLISTS_PLAYLIST(id)}
        className="w-full bg-blue-200 p-2 rounded-md"
      >
        Go to playlist
      </Link>
    </div>
  );
}
