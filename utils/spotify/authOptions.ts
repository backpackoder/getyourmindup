export const authOptions = {
  method: "POST",
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${process.env.spotify_client_id}:${process.env.spotify_client_secret}`
    ).toString("base64")}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "grant_type=client_credentials",
};
