import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    idToken?: string
    firstName?: string
    lastName?: string
    provider?: string
    & DefaultSession["user"]
  }
}