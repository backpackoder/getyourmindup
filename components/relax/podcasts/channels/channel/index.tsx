// Components
import { Tracks } from "./Tracks";

// Utils
import { getShow } from "@/utils/spotify/podcasts/getShow";

// Types
import { Show } from "@/utils/spotify/podcasts/getShow/types";

type PlaylistItemsProps = {
  channel: string;
};

export async function PodcastsPlaylist({ channel }: PlaylistItemsProps) {
  const channelInfos: Show = await getShow({
    id: channel,
    market: "US",
  });

  return (
    <article className="flex flex-col justify-center gap-4">
      <h1 className="text-2xl font-medium">{channelInfos.name}</h1>

      <section className="flex flex-wrap items-center justify-center gap-8">
        {channelInfos.episodes.items.map((item, index) => {
          return index < 20 && <Tracks key={item.id} episode={item} />;
        })}
      </section>
    </article>
  );
}
