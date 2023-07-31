import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
// import Facebook from "next-auth/providers/facebook";
// import Twitter from "next-auth/providers/twitter";
import Credentials from "next-auth/providers/credentials";
import { dbUsers } from "@/db";

export const authOptions: NextAuthOptions = {
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
    Credentials({
      name: "Custom Login",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "mail@google.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Contraseña",
        },
      },
      async authorize(credentials) {
        const resp = (await dbUsers.checkUserEmailPassword(
          credentials!.email,
          credentials!.password
        )) as any; 
        console.log('autorize');
        console.log({resp});
        return resp
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/register",
  },
  jwt: {},
  session: {
    maxAge: 2592000, // 1 month
    strategy: "jwt",
    updateAge: 86400, // 1 day
  },

  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account) {
        console.log('jtw+++++++===================');
        token.accessToken = account.access_token;
        console.log('jtw: ', {account, token, user});
        switch (account.type) {
          case "credentials":
            token.user = user;
            break;

          case "oauth":
            token.user = await dbUsers.oAuthToDbUser(user.email, user.name);
            break;
        }
      }
      return token;
    },
    async session({ session, token, user }: any) {
      console.log('session======= =--- -==');
      console.log({session, token, user});
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
};
