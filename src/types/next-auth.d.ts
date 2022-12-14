import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface Session {
    user?: {
      id: string;
    } & User &
      DefaultSession;
  }
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  export interface User {
    name?: string | number | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
  }
}
