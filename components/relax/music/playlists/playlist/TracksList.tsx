"use client";

import { useEffect, useState } from "react";

// Utils
import { PlaylistItems } from "@/utils/spotify/music/getPlaylistItems/types";

// Types
import { CLIENT_SIDE_URLS } from "@/commons/commons";

type TracksListProps = {
  playlist: string;
};

export function TracksList({ playlist }: TracksListProps) {
  const [tracks, setTracks] = useState<PlaylistItems | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      const tracks = await fetch(
        `${CLIENT_SIDE_URLS.BASE}${CLIENT_SIDE_URLS.SPOTIFY_API.TRACKS(playlist)}`
      );

      const data = await tracks.json();

      setTracks(data);
    };

    fetchTracks();
  }, [playlist]);

  console.log("tracks", tracks);

  return tracks ? (
    <section className="flex flex-col items-center justify-center gap-8">
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-4xl">All the tracks ({tracks.total}):</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {tracks.items.map((item) => {
          return (
            <iframe
              key={item.track.id}
              src={`https://open.spotify.com/embed/track/${item.track.id}`}
              width="200"
              height="250"
              allow="encrypted-media"
            />
          );
        })}
      </div>
    </section>
  ) : null;
}
