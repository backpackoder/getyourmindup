// Utils
import { getSearchForItems } from "../../search/getSearchForItems";

type GetThemesPlaylistsProps = {
  q: string;
  type: "album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook";
  market?: string;
  limit?: number;
  offset?: number;
  include_external?: string;
};

export async function getThemesChannels({
  q,
  type,
  market,
  limit = 20,
  offset,
  include_external,
}: GetThemesPlaylistsProps) {
  const data = await getSearchForItems({
    q,
    type,
    market,
    limit,
    offset,
    include_external,
  });

  return data;
}
