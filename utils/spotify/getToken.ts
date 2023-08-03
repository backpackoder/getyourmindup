import { authOptions } from "./authOptions";

type TOKEN_TYPE = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export async function getToken() {
  const TOKEN: TOKEN_TYPE = await fetch("https://accounts.spotify.com/api/token", authOptions)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Failed to retrieve access token:", error);
    });

  console.log("token", TOKEN.access_token);

  return TOKEN.access_token;
}
