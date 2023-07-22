// Types
import { Episode } from "@/utils/spotify/podcasts/getShow/types";

type TracksProps = {
  episode: Episode;
};

export async function Tracks({ episode }: TracksProps) {
  return (
    <section>
      <iframe
        src={`https://open.spotify.com/embed/episode/${episode.id}`}
        width="300"
        height="380"
        allow="encrypted-media"
      ></iframe>
    </section>
  );
}
