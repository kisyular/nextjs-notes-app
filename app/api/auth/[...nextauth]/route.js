import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

// console.log(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET)
//Google Auth Provider with next js
const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],

	async session({ session }) {},
	async signIn({ profile }) {},
})

export { handler as GET, handler as POST }
