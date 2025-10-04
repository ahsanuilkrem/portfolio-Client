
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";


declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: string;

    };
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role: string;
    accessToken: string | null
  }
  interface JWT {
    id?: string;
    accessToken?: string;
    role?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          console.error("Email or Password is missing");
          return null;
        }

        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );
          console.log("Response From Backend:", res);

          const responseJson = await res.json();

          if (!res.ok || !responseJson?.data?.accessToken || !responseJson?.data?.user) {
            console.error("Login failed:", responseJson?.message);
            return null;
          }
          const { accessToken, user } = responseJson.data;

          if (user.id) {
            return {
              id: user?.id,
              name: user?.name,
              email: user?.email,
              image: user?.picture,
              role: user.role,
              accessToken,
            };
          } else {
            return null;
          }
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) {
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.accessToken = token.accessToken as string;
      }
      return session;
    }

  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};