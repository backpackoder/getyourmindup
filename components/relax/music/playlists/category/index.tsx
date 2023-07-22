import Link from "next/link";

// Components
import { RelaxListsWrapper } from "@/components/relax/components/RelaxListsWrapper";

// Utils
import { getCategorysPlaylists } from "@/utils/spotify/music/getCategorysPlaylists";

// Commons
import { ROUTES } from "@/commons/commons";

// Types
import { CategorysPlaylists } from "@/utils/spotify/music/getCategorysPlaylists/types";
import { PlaylistItem } from "@/components/relax/components/PlaylistItem";

type PlaylistCategoryProps = {
  category: string;
};

export async function PlaylistsByCategory({ category }: PlaylistCategoryProps) {
  const categorysPlaylists: CategorysPlaylists = await getCategorysPlaylists({
    category_id: category,
  });

  return (
    <RelaxListsWrapper type="Playlists" title={category}>
      <>
        {categorysPlaylists &&
          categorysPlaylists.playlists.items.map((item) => {
            return (
              <div key={item.name} className="flex flex-col gap-2 w-[300px] rounded-xl">
                <Link
                  href={ROUTES.RELAX_YOUR_MIND_MUSIC_PLAYLISTS_PLAYLIST(item.id)}
                  className="duration-300 hover:underline hover:text-blue-500"
                >
                  <h3 className="text-2xl font-medium">{item.name}</h3>
                </Link>

                <PlaylistItem item={item} />
              </div>
            );
          })}
      </>
    </RelaxListsWrapper>
  );
}
