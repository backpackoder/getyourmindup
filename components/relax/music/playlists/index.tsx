import Link from "next/link";

// Components
import { Item } from "./item";

// Utils
import { getMusicPlaylists } from "@/utils/spotify/music/getCategorysPlaylists/getMusicPlaylists";

// Commons
import { ROUTES } from "@/commons/commons";

export async function MusicPlaylists() {
  const playlists = await getMusicPlaylists();

  return (
    <article className="flex flex-col items-center justify-center gap-8">
      <section className="flex flex-col gap-4 border-4">
        <h3 className="text-2xl">
          <Link href={ROUTES.RELAX_YOUR_MIND_MUSIC_PLAYLISTS}>
            Chill out listening some relaxing music
          </Link>
        </h3>

        <div className="relative flex flex-wrap gap-4">
          {playlists.map((playlist, index) => {
            return <Item key={index} playlist={playlist} />;
          })}
        </div>
      </section>
    </article>
  );
}
