import Image from "next/image";
import Link from "next/link";

// Commons
import { ROUTES } from "@/commons/commons";

// Types
import { GetPodcast } from "@/utils/spotify/podcasts/getPodcastsThemes/types";

type ItemProps = {
  playlist: GetPodcast;
};

export async function Item({ playlist }: ItemProps) {
  const coverImage = playlist.theme.shows.items[0].images[0];

  return coverImage ? (
    <>
      <Link
        href={ROUTES.RELAX_YOUR_MIND_PODCASTS_CHANNELS_THEME(playlist.name)}
        className="group relative flex flex-col gap-2 max-w-[150px] bg-[bisque] p-4 rounded-md overflow-hidden"
      >
        <h3 className="text-2xl font-medium">{playlist.name}</h3>

        <p className="absolute top-0 left-0 opacity-0 bg-[#ffb050] p-2 rounded-md delay-300 duration-300 z-10 pointer-events-none group-hover:flex group-hover:opacity-100">
          {playlist.description}
        </p>

        <div className="group relative">
          <Image
            src={coverImage.url}
            alt={playlist.theme.shows.items[0].name}
            width={150}
            height={150}
            className="rounded-md duration-300 cursor-pointer hover:brightness-[0.25]"
          />
        </div>
      </Link>
    </>
  ) : null;
}
