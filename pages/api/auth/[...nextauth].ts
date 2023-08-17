import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      // đây là name để dùng cho các hàm vì có thể muliple provide nên mình có id để xác định đc provider nào
      name: 'credentials',

      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        // const { username, password } = credentials
        //  call api ở đây mà tui mặc định cái data trả về là như bên dưới
        // const res = await axios.post('/auth/user', { username, password })
        const res: any = {
          data: {
            user: {
              id: '2',
              name: 'Huy',
              email: 'huy@gmail.com'
            },
            accessToken:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikh1eSBCdWkiLCJpYXQiOjE1MTYyMzkwMjJ9.0SVyu51YwgsY-qzequoTwvZrl0jEu6CYwQO3WFW5TQ0',
            refreshToken:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikh1eSBCdWkiLCJpYXQiOjE1MTYyMzkwMjJ9.0SVyu51YwgsY-qzequoTwvZrl0jEu6CYwQO3WFW5TQ0'
          }
        }

        const user = res.data

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
        }
      }
    })
  ],
  pages: {
    // signIn: '/auth/signin'
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async session({ session, token }) {
      // cái này mình phải set up \
      // session: {
      //   strategy: 'jwt'
      // },
      // ở trên đầu thì cái hàm async jwt({ token, user }) mới chạy nha
      // mặc định hàm jwt thì trả vè token muốn nhét gì vào thì xem đọa code ở dưới
      session.user = token.user
      session.accessToken = token.accessToken
      return session
    },
    async jwt({ token, user }) {
      // token vs user được overide type bên trong types/nextauth nhé

      // nhận vào 2 đối số là token mặc định với user là data trả về ở trên  async authorize(credentials, req)
      // rồi làm gì làm với nó chủ yếu dùng session để sài

      if (user) {
        token.user = user
        token.accessToken = user.accessToken
      }
      return Promise.resolve(token)
    }
  }
}
export default NextAuth(authOptions)
