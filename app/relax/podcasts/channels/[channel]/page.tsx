// Components
import { PodcastsPlaylist } from "@/components/relax/podcasts/channels/channel";

// Utils
import { getDecodedParam } from "@/utils/getDecodedParam";

type PlaylistItemsDefaultProps = {
  params: { channel: string };
};

export default async function PodcastsPlaylistItemsDefault({ params }: PlaylistItemsDefaultProps) {
  const decodedParam = getDecodedParam(params.channel);

  return <PodcastsPlaylist channel={decodedParam} />;
}
