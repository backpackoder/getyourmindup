import Link from "next/link";

// Components
import { Item } from "./item";

// Utils
import { getPodcastsThemes } from "@/utils/spotify/podcasts/getPodcastsThemes";

// Commons
import { ROUTES } from "@/commons/commons";

export async function PodcastsThemes() {
  const podcasts = await getPodcastsThemes("US");

  return (
    <article className="flex flex-col items-center justify-center gap-8">
      <section className="flex flex-col gap-4 border-4">
        <h3 className="text-2xl">
          <Link href={ROUTES.RELAX_YOUR_MIND_PODCASTS_CHANNELS}>
            Learn something new listening to podcasts
          </Link>
        </h3>

        <div className="relative flex flex-wrap gap-4">
          {podcasts.map((playlist, index) => {
            return <Item key={index} playlist={playlist} />;
          })}
        </div>
      </section>
    </article>
  );
}
