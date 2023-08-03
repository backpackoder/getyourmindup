import { NextResponse } from "next/server";

// Commons
import { SPOTIFY_API } from "@/commons/commons";

// Types
import { PlaylistItems } from "@/utils/spotify/music/getPlaylistItems/types";

export async function GET(request: Request, { params }: { params: { playlist: string } }) {
  const TOKEN =
    "BQC6FyoAmaaujnztTD2tcbSd9jhM07os5iuwNBA0OPPgQ_4fOKQvqelsBk1HysNjmNPxCihIATlGKUqK4-i5Husl6MLajZdJYHvCgBgzi2IOSi33t4c";

  const res =
    TOKEN &&
    (await fetch(
      `${SPOTIFY_API.URLS.BASE}${SPOTIFY_API.ENDPOINTS.MUSIC.PLAYLIST_ITEMS(params.playlist)}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    ));

  const data: PlaylistItems = await res.json();

  return NextResponse.json(data);
}
