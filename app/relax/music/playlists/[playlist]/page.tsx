// Components
import { MusicPlaylist } from "@/components/relax/music/playlists/playlist";

// Utils
import { getDecodedParam } from "@/utils/getDecodedParam";

type PlaylistItemsDefaultProps = {
  params: { playlist: string };
};

export default async function PlaylistItemsDefault({ params }: PlaylistItemsDefaultProps) {
  const decodedParam = getDecodedParam(params.playlist);

  return <MusicPlaylist playlist={decodedParam} />;
}
