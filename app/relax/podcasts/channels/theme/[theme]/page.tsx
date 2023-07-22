// Components
import { PlaylistsByTheme } from "@/components/relax/podcasts/channels/theme";

// Utils
import { getDecodedParam } from "@/utils/getDecodedParam";

type PlaylistCategoryDefaultProps = {
  params: { theme: string };
};

export default async function PlaylistCategoryDefault({ params }: PlaylistCategoryDefaultProps) {
  const decodedParam = getDecodedParam(params.theme);

  return <PlaylistsByTheme theme={decodedParam} />;
}
