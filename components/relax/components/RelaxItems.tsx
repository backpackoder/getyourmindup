// Components
import { RelaxItem } from "./RelaxItem";
import { RelaxRow } from "./RelaxRow";

// Commons
import { ROUTES } from "@/commons/commons";
import { FullScreenLoading } from "@/components/ui";

// Utils
import { getMusicPlaylists } from "@/utils/spotify/music/getCategorysPlaylists/getMusicPlaylists";
import { getPodcastsThemes } from "@/utils/spotify/podcasts/getPodcastsThemes";

export async function RelaxItemMusic() {
  const playlists = await getMusicPlaylists();
  console.log({playlists});
  if (!playlists) {
    return <FullScreenLoading />
  }
  return (
    <RelaxItem title="Music">
      <RelaxRow
        name="Music"
        data={playlists}
        route={ROUTES.RELAX_YOUR_MIND_MUSIC_PLAYLISTS}
        title="Chill out listening some relaxing music, select your favorite genre:"
      />
    </RelaxItem>
  );
}

export async function RelaxItemPodcasts() {
  const podcasts = await getPodcastsThemes("US");

  return (
    <RelaxItem title="Podcasts">
      <RelaxRow
        name="Podcasts"
        data={podcasts}
        route={ROUTES.RELAX_YOUR_MIND_PODCASTS_CHANNELS}
        title="Learn something new listening to podcasts, select your favorite theme:"
      />
    </RelaxItem>
  );
}
