import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {};

const authHandler = NextAuth(authOptions);
export cont GET