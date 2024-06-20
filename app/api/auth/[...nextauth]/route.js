import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

//repetition -review the api route TODO
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers here
  ],
  secret: process.env.SECRET,
  callbacks:{
    async signOut({token, session}){
      //signout
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};
