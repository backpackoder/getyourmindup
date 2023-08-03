// Utils
import { getToken } from "../../getToken";
import { getQueryParams } from "../../getQueryParams";

// Commons
import { SPOTIFY_API } from "@/commons/commons";

// Types
import { PodcastEpisodes } from "./types";

type GetSearchForItemsProps = {
  id: string;
  market?: string;
  limit?: number;
  offset?: number;
};

export async function getShowEpisodes({ id, market, limit = 20, offset }: GetSearchForItemsProps) {
  const TOKEN = await getToken();

  const queryParams = getQueryParams([
    { name: "market", value: market },
    { name: "limit", value: limit },
    { name: "offset", value: offset },
  ]);

  const data: PodcastEpisodes = await fetch(
    `${SPOTIFY_API.URLS.BASE}${SPOTIFY_API.ENDPOINTS.PODCASTS.SHOW_EPISODES(id)}?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  ).then((response) => response.json());

  return data;
}
