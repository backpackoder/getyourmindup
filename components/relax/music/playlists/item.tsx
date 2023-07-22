import Image from "next/image";
import Link from "next/link";

// Utils
import { getPlaylistCoverImage } from "@/utils/spotify/music/getPlaylistCoverImage";

// Commons
import { ROUTES } from "@/commons/commons";

// Types
import { GetPlaylist } from "@/utils/spotify/music/getCategorysPlaylists/types";

type ItemProps = {
  playlist: GetPlaylist;
};

export async function Item({ playlist }: ItemProps) {
  const coverImage = await getPlaylistCoverImage({
    category_id: playlist.category.playlists.items[0].id,
  });

  return coverImage ? (
    <>
      <Link
        href={ROUTES.RELAX_YOUR_MIND_MUSIC_PLAYLISTS_CATEGORY(playlist.name)}
        className="group relative flex flex-col gap-2 max-w-[150px] bg-[bisque] p-4 rounded-md overflow-hidden"
      >
        <h3 className="text-2xl font-medium">{playlist.name}</h3>

        <p className="absolute top-0 left-0 opacity-0 bg-[#ffb050] p-2 rounded-md delay-300 duration-300 z-10 pointer-events-none group-hover:flex group-hover:opacity-100">
          {playlist.description}
        </p>

        <div className="group relative">
          <Image
            src={coverImage[0].url}
            alt={playlist.category.playlists.items[0].name}
            width={150}
            height={150}
            className="rounded-md duration-300 cursor-pointer hover:brightness-[0.25]"
          />
        </div>
      </Link>
    </>
  ) : null;
}
