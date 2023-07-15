import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
// import Facebook from "next-auth/providers/facebook";
// import Twitter from "next-auth/providers/twitter";

export const authOptions: NextAuthOptions = {
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    // Facebook({
    //   clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
    // }),
    // Twitter({
    //   clientId: process.env.TWITTER_CLIENT_ID ?? "",
    //   clientSecret: process.env.TWITTER_CLIENT_SECRET ?? "",
    // }),
  ],
};