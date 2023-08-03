import Link from "next/link";

// Components
import { RelaxListsWrapper } from "@/components/relax/components/RelaxListsWrapper";
import { PodcastItem } from "@/components/relax/components/PodcastItem";

// Utils
import { getThemesChannels } from "@/utils/spotify/podcasts/getThemesChannels";

// Commons
import { ROUTES } from "@/commons/commons";

type PlaylistByThemeProps = {
  theme: string;
};

export async function PlaylistsByTheme({ theme }: PlaylistByThemeProps) {
  const themesPlaylists = await getThemesChannels({
    q: theme,
    type: "show",
    market: "US",
  });

  return (
    <RelaxListsWrapper type="Channels" title={theme}>
      <>
        {themesPlaylists &&
          themesPlaylists.shows.items.map((item) => {
            return (
              <div key={item.name} className="flex flex-col gap-2 w-[300px] rounded-xl">
                <Link
                  href={ROUTES.RELAX_YOUR_MIND_PODCASTS_CHANNELS_CHANNEL(item.id)}
                  className="duration-300 hover:underline hover:text-blue-500"
                >
                  <h3 className="text-2xl font-medium">{item.name}</h3>
                </Link>

                <PodcastItem item={item} />
              </div>
            );
          })}
      </>
    </RelaxListsWrapper>
  );
}
