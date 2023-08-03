// Components
import { PlaylistPage } from "./PlaylistPage";
import { SeeAllTracks } from "./SeeAllTracks";

// Utils
import { getPlaylist } from "@/utils/spotify/music/getPlaylist";

type PlaylistItemsProps = {
  playlist: string;
};

export async function MusicPlaylist({ playlist }: PlaylistItemsProps) {
  const playlistItem = await getPlaylist({
    playlist_id: playlist,
  });

  return (
    <article className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-medium">{playlistItem.name}</h1>

      <PlaylistPage id={playlistItem.id} />
      <SeeAllTracks playlist={playlist} />
    </article>
  );
}
