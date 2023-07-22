import Image from "next/image";
import Link from "next/link";

// Commons
import { ROUTES } from "@/commons/commons";

// Types
import { Show } from "@/utils/spotify/search/getSearchForItems/types";

type PodcastItemProps = {
  item: Show;
};

export async function PodcastItem({ item }: PodcastItemProps) {
  return (
    <>
      <div className="group relative">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden max-w-[300px] max-h-full text-white overflow-hidden z-10 pointer-events-none group-hover:block">
          {item.description}
        </p>

        <Image
          src={item.images[0].url}
          alt={item.name}
          width={300}
          height={300}
          className={`duration-300 cursor-pointer hover:brightness-[0.25]`}
        />
      </div>

      <Buttons id={item.id} />
    </>
  );
}

type ButtonsProps = {
  id: string;
};

function Buttons({ id }: ButtonsProps) {
  return (
    <div className="flex items-center justify-between gap-4 text-center">
      <Link
        href={ROUTES.RELAX_YOUR_MIND_PODCASTS_CHANNELS_CHANNEL(id)}
        className="w-full bg-blue-200 p-2 rounded-md"
      >
        Go to playlist
      </Link>
    </div>
  );
}
