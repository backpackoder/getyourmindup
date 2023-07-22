// Components
import { MusicPlaylists } from "./music/playlists";
import { PodcastsThemes } from "./podcasts/channels";

export async function Relax() {
  return (
    <article className="flex flex-col justify-center gap-8">
      <h2 className="text-4xl font-medium">Relax your mind</h2>

      {/* CREAR UN ACCORDEON !!! */}

      <RelaxItem name="Music">
        <MusicPlaylists />
      </RelaxItem>

      <RelaxItem name="Podcasts">
        <PodcastsThemes />
      </RelaxItem>
    </article>
  );
}

type RelaxItemProps = {
  name: string;
  children: JSX.Element;
};

export function RelaxItem({ children }: RelaxItemProps) {
  return <section className="border-4">{children}</section>;
}
