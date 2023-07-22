import { NextResponse } from "next/server";

// Commons
import { SPOTIFY_API } from "@/commons/commons";

// Types
import { PlaylistItems } from "@/utils/spotify/music/getPlaylistItems/types";

export async function GET(request: Request, { params }: { params: { playlist: string } }) {
  const TOKEN =
    "BQDvrDC2AwgQkbeVqdnePKeJFtL7aWcXuIv-JNHj5gFA2QKTmQoIGsD4CMnSPm1TgKZ3p23ikzkEs14o-4W-TdE0W6kOyupFk4CaOuIEfCiAXsRTf7Y";

  const res =
    TOKEN &&
    (await fetch(
      `${SPOTIFY_API.URLS.BASE}${SPOTIFY_API.ENDPOINTS.PLAYLIST_ITEMS(params.playlist)}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    ));

  const data: PlaylistItems = await res.json();

  return NextResponse.json(data);
}
