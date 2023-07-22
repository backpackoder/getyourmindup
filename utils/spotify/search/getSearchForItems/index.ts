// Utils
import { getToken } from "../../getToken";
import { getQueryParams } from "../../getQueryParams";

// Commons
import { SPOTIFY_API } from "@/commons/commons";

// Types
import { SearchForItems } from "./types";

type GetSearchForItemsProps = {
  q: string;
  type: "album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook";
  market?: string;
  limit?: number;
  offset?: number;
  include_external?: string;
};

export async function getSearchForItems({
  q,
  type,
  market,
  limit = 20,
  offset,
  include_external,
}: GetSearchForItemsProps) {
  const TOKEN = await getToken();

  const queryParams = getQueryParams([
    { name: "q", value: q },
    { name: "type", value: type },
    { name: "market", value: market },
    { name: "limit", value: limit },
    { name: "offset", value: offset },
    { name: "include_external", value: include_external },
  ]);

  const data: SearchForItems = await fetch(
    `${SPOTIFY_API.URLS.BASE}${SPOTIFY_API.ENDPOINTS.SEARCH.SEARCH_FOR_ITEM}?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  ).then((response) => response.json());

  return data;
}
