// Utils
import { getCategorysPlaylists } from ".";

// Commons
import { SPOTIFY_API } from "@/commons/commons";

// Types
import { GetPlaylist } from "./types";

export async function getMusicPlaylists(country?: string) {
  const categories = Object.values(SPOTIFY_API.GENRE_SEEDS.MUSIC);

  let playlists: GetPlaylist[] = [];

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const categorysPlaylists = await getCategorysPlaylists({
      category_id: category.title,
      country,
    });

    playlists.push({
      name: category.title,
      description: category.description,
      category: categorysPlaylists,
    });
  }

  return playlists;
}
