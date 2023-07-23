import Link from "next/link";

// Components
import { GetPlaylist } from "@/utils/spotify/music/getCategorysPlaylists/types";

// Types
import { RelaxRowItem } from "./RelaxRowItem";
import { GetPodcast } from "@/utils/spotify/podcasts/getPodcastsThemes/types";

type RelaxRowProps = {
  name: "Music" | "Podcasts";
  data: GetPlaylist[] | GetPodcast[];
  route: string;
  title: string;
};

export function RelaxRow({ name, data, route, title }: RelaxRowProps) {
  return (
    <article className="flex flex-col items-start justify-center gap-8">
      <section className="flex flex-col items-start gap-2">
        <h3 className="text-xl">
          <Link href={route}>{title}</Link>
        </h3>

        <div className="relative flex flex-wrap gap-4">
          {data.map((item, index) => {
            return <RelaxRowItem key={index} name={name} item={item} />;
          })}
        </div>
      </section>
    </article>
  );
}
