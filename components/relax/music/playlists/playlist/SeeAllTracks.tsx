"use client";

import { useState } from "react";
import { TracksList } from "./TracksList";

type SeeAllTracksProps = {
  playlist: string;
};

export function SeeAllTracks({ playlist }: SeeAllTracksProps) {
  const [isClicked, setIsClicked] = useState(false);

  return isClicked ? (
    <TracksList playlist={playlist} />
  ) : (
    <button
      className="bg-green-200 p-2 rounded-lg duration-300 hover:bg-green-300"
      onClick={() => setIsClicked(true)}
    >
      See all tracks
    </button>
  );
}
