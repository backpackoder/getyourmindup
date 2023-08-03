// Components
import { RelaxListsWrapper } from "@/components/relax/components/RelaxListsWrapper";
import { PlaylistItem } from "@/components/relax/components/PlaylistItem";

// Utils
import { getCategorysPlaylists } from "@/utils/spotify/music/getCategorysPlaylists";

// Types
import { CategorysPlaylists } from "@/utils/spotify/music/getCategorysPlaylists/types";

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
        {categorysPlaylists.playlists.items.map((item) => {
          return <PlaylistItem key={item.id} item={item} />;
        })}
      </>
    </RelaxListsWrapper>
  );
}
