import NextAuth, { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'
declare module 'next-auth' {
  interface Session {
    user: {
      id?: string
      name?: string
      email?: string
    } & DefaultSession['user']
    accessToken?: string
    refreshToken?: string
  }
  interface User {
    id?: string
    name?: string
    email?: string
    role?: string
    accessToken?: string
    refreshToken?: string
  }
}
declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */

  interface JWT {
    /** OpenID ID Token */
    user: {
      id?: string
      name?: string
      email?: string
    } & DefaultSession['user']
    accessToken?: string
    refreshToken?: string
  }
}
