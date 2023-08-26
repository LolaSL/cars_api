import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        Credentials
    ]
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };