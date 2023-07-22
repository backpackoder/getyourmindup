// Utils
import { getToken } from "../../getToken";

// Commons
import { SPOTIFY_API } from "@/commons/commons";

// Types
import { PlaylistCoverImage } from "./types";

type GetPlaylistCoverImageProps = {
  category_id: string;
};

export async function getPlaylistCoverImage({ category_id }: GetPlaylistCoverImageProps) {
  const TOKEN = await getToken();

  const data: PlaylistCoverImage[] = await fetch(
    `${SPOTIFY_API.URLS.BASE}${SPOTIFY_API.ENDPOINTS.MUSIC.PLAYLIST_COVER_IMAGE(category_id)}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  ).then((response) => response.json());

  return data;
}
