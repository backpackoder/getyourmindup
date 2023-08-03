// Utils
import { getToken } from "../../getToken";
import { getQueryParams } from "../../getQueryParams";

// Commons
import { SPOTIFY_API } from "@/commons/commons";

// Types
import { Show } from "./types";

type GetSearchForItemsProps = {
  id: string;
  market?: string;
};

export async function getShow({ id, market }: GetSearchForItemsProps) {
  const TOKEN = await getToken();

  const queryParams = getQueryParams([{ name: "market", value: market }]);

  const data: Show = await fetch(
    `${SPOTIFY_API.URLS.BASE}${SPOTIFY_API.ENDPOINTS.PODCASTS.SHOW(id)}?${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  ).then((response) => response.json());

  return data;
}
