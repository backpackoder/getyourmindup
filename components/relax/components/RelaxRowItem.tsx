import Image from "next/image";
import Link from "next/link";

// Commons
import { ROUTES } from "@/commons/commons";

// Types
import { GetPlaylist } from "@/utils/spotify/music/getCategorysPlaylists/types";
import { GetPodcast } from "@/utils/spotify/podcasts/getPodcastsThemes/types";
import { AccordionDatas, AccordionDatasImage } from "./types";

type RelaxRowItemProps = {
  name: "Music" | "Podcasts";
  item: GetPlaylist | GetPodcast;
};

export async function RelaxRowItem({ name, item }: RelaxRowItemProps) {
  function getData(): AccordionDatas {
    switch (name) {
      case "Music":2
        const playlist = item as unknown as GetPlaylist;
        console.log(playlist?.category);
        const getPlaylistCoverImages = () => {
          let images: AccordionDatasImage[] = [];

          for (let i = 0; i < 4; i++) {
            images.push({
              src: playlist.category.playlists?.items[i]?.images[0]?.url,
              alt: `${playlist.category.playlists?.items[i]?.name}'s cover image`,
              width: 100,
              height: 100,
            });
          }

          return images;
        };

        const playlistCoverImages = getPlaylistCoverImages();

        return {
          redirect: ROUTES.RELAX_YOUR_MIND_MUSIC_PLAYLISTS_CATEGORY(playlist.name),
          name: playlist.name,
          description: item.description,
          images: playlistCoverImages,
        };

      case "Podcasts":
        const podcast = item as unknown as GetPodcast;

        const getPodcastCoverImages = () => {
          let images: AccordionDatasImage[] = [];

          for (let i = 0; i < 4; i++) {
            images.push({
              src: podcast.theme.shows?.items[i]?.images[0]?.url,
              alt: `${podcast.theme.shows?.items[i]?.name}'s cover image`,
              width: 100,
              height: 100,
            });
          }

          return images;
        };

        const PodcastCoverImages = getPodcastCoverImages();

        return {
          redirect: ROUTES.RELAX_YOUR_MIND_PODCASTS_CHANNELS_THEME(podcast.name),
          name: podcast.name,
          description: podcast.description,
          images: PodcastCoverImages,
        };
    }
  }

  const data = getData();

  return (
    <Link
      href={data.redirect}
      className="group relative flex flex-col justify-between gap-2 max-w-[250px] bg-yellow-100
      p-4 rounded-md overflow-hidden hover:bg-black duration-300"
    >
      <h3 className="max-w-[200px] w-min text-2xl font-medium group-hover:text-white">
        {item.name}
      </h3>

      <div className="grid grid-cols-2 items-center justify-center gap-1 duration-300 group-hover:opacity-25">
        {data.images.map((item, index) => {
          return (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height ?? item.width}
              className="rounded-md"
            />
          );
        })}
      </div>

      <p
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden w-full
      text-white text-center font-medium p-2 group-hover:flex"
      >
        {item.description}
      </p>
    </Link>
  );
}
