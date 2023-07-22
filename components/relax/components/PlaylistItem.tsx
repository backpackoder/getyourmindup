"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@mui/material";

// Commons
import { ROUTES } from "@/commons/commons";

// Types
import { CategorysPlaylistsItem } from "@/utils/spotify/music/getCategorysPlaylists/types";
import { Show } from "@/utils/spotify/search/getSearchForItems/types";

type PlaylistItemProps = {
  item: CategorysPlaylistsItem | Show;
};

export function PlaylistItem({ item }: PlaylistItemProps) {
  const [isShowed, setIsShowed] = useState(false);

  return (
    <>
      <div className="group relative">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden max-w-[300px] max-h-full text-white overflow-hidden z-10 pointer-events-none group-hover:block">
          {item.description}
        </p>

        <Image
          src={item.images[0].url}
          alt={item.name}
          width={300}
          height={300}
          onClick={() => setIsShowed(true)}
          className={`${
            isShowed ? "hidden" : "block"
          } duration-300 cursor-pointer hover:brightness-[0.25]`}
        />
      </div>

      <iframe
        src={`https://open.spotify.com/embed/playlist/${item.id}`}
        width="300"
        height="380"
        allow="encrypted-media"
        className={`${isShowed ? "block" : "hidden"} mx-auto`}
      ></iframe>

      <Buttons isShowed={isShowed} setIsShowed={setIsShowed} id={item.id} />
    </>
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
        {isShowed ? "HIDE" : "LISTEN"}
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
