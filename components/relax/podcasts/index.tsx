import Image from "next/image";

// Utils
import { getSearchForItems } from "@/utils/spotify/search/getSearchForItems";

export async function Podcasts() {
  const podcasts = await getSearchForItems({
    q: "personnal development",
    type: "show",
    market: "US",
  });

  return (
    <article>
      <h2 className="text-2xl font-medium">Podcasts</h2>

      <div>
        {podcasts.shows.items.map((podcast, index) => {
          return (
            <div key={index}>
              <h3>{podcast.name}</h3>
              <Image
                src={podcast.images[0].url}
                alt={podcast.name}
                width={podcast.images[0].width}
                height={podcast.images[0].height}
              />
            </div>
          );
        })}
      </div>
    </article>
  );
}
