// Utils
import { getSearchForItems } from "../../search/getSearchForItems";

// Commons
import { SPOTIFY_API } from "@/commons/commons";

// Types
import { GetPodcast } from "./types";

export async function getPodcastsThemes(market?: string) {
  const themes = Object.values(SPOTIFY_API.GENRE_SEEDS.PODCASTS);

  let playlists: GetPodcast[] = [];

  for (let i = 0; i < themes.length; i++) {
    const theme = themes[i];
    const themesPlaylist = await getSearchForItems({
      q: theme.title,
      type: "show",
      market,
    });

    playlists.push({
      name: theme.title,
      description: theme.description,
      theme: themesPlaylist,
    });
  }

  return playlists;
}
