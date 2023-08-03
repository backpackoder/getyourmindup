import { NextResponse } from "next/server";

export async function POST() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.spotify_client_id}:${process.env.spotify_client_secret}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
      grant_type: `client_credentials&client_id=${process.env.spotify_client_id}&client_secret=${process.env.spotify_client_secret}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await res.json();

  return NextResponse.json(data.access_token);
}
