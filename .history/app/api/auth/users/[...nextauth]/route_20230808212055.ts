import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const {email, password} =credentials as{}
                email: string;
                password: string;
            }
        })
    ]
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };