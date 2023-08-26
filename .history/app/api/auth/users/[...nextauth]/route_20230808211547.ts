import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {};

const authHandler = NextAuth(authOptions);
export const GET = authHandler;
export const POST = auth