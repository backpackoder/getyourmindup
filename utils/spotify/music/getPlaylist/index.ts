// Utils
import { getToken } from "../../getToken";

// Commons
import { SPOTIFY_API } from "@/commons/commons";

// Types
import { Playlist } from "./types";

type GetPlaylistProps = {
  playlist_id: string;
};

export async function getPlaylist({ playlist_id }: GetPlaylistProps) {
  const TOKEN = await getToken();

  const data: Playlist = await fetch(
    `${SPOTIFY_API.URLS.BASE}${SPOTIFY_API.ENDPOINTS.MUSIC.PLAYLIST(playlist_id)}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  ).then((response) => response.json());

  return data;
}
