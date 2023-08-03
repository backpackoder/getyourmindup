// Utils
import { getToken } from "../../getToken";
import { getQueryParams } from "../../getQueryParams";

// Commons
import { SPOTIFY_API } from "@/commons/commons";

// Types
import { CategorysPlaylists } from "./types";

type GetCategorysPlaylistsProps = {
  category_id: string;
  country?: string;
  limit?: number;
  offset?: number;
};

export async function getCategorysPlaylists({
  category_id,
  country,
  limit = 20,
  offset,
}: GetCategorysPlaylistsProps) {
  const TOKEN = await getToken();

  const queryParams = getQueryParams([
    { name: "country", value: country },
    { name: "limit", value: limit },
    { name: "offset", value: offset },
  ]);

  const data: CategorysPlaylists = await fetch(
    `${SPOTIFY_API.URLS.BASE}${SPOTIFY_API.ENDPOINTS.MUSIC.CATEGORYS_PLAYLISTS(
      category_id
    )}?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  ).then((response) => response.json());

  return data;
}
