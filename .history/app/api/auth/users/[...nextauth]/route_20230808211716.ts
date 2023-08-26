import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    session: {
        stra
    }
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };