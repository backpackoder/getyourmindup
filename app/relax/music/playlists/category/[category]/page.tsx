// Components
import { PlaylistsByCategory } from "@/components/relax/music/playlists/category";

type PlaylistCategoryDefaultProps = {
  params: { category: string };
};

export default async function PlaylistCategoryDefault({ params }: PlaylistCategoryDefaultProps) {
  return <PlaylistsByCategory category={params.category} />;
}
