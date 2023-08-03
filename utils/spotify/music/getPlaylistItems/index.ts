// Utils
import { getToken } from "../../getToken";
import { getQueryParams } from "../../getQueryParams";

// Commons
import { SPOTIFY_API } from "@/commons/commons";

// Types
import { PlaylistItems } from "./types";

type GetPlaylistItemsProps = {
  playlist_id: string;
  market?: string;
  fields?: string;
  limit?: number;
  offset?: number;
  additional_types?: string;
};

export async function getPlaylistItems({
  playlist_id,
  market,
  fields,
  limit,
  offset,
  additional_types,
}: GetPlaylistItemsProps) {
  const TOKEN = await getToken();

  const queryParams = getQueryParams([
    {
      name: "market",
      value: market,
    },
    {
      name: "fields",
      value: fields,
    },
    {
      name: "limit",
      value: limit,
    },
    {
      name: "offset",
      value: offset,
    },
    {
      name: "additional_types",
      value: additional_types,
    },
  ]);

  const data: PlaylistItems = await fetch(
    `${SPOTIFY_API.URLS.BASE}${SPOTIFY_API.ENDPOINTS.MUSIC.PLAYLIST_ITEMS(
      playlist_id
    )}?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  ).then((response) => response.json());

  return data;
}
