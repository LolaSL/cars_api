import UserModel from "@app/models/user";
import startDB from "@lib/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers";
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(
        credentials: { email: string; password: string },
        req: any
      ) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        await startDB;
        const user = await UserModel.findOne({ email });
        if (!user) throw Error("email or pasword mismatch!");
          const passwordMatch = await user.comparepassword(password);
          if(!passwordMatch) throw Error("email or pasword mismatch!");
        
        },
    }),
  ],
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };

function CredentialsProvider(arg0: {
  type: string;
  credentials: {};
  authorize(
    credentials: { email: string; password: string },
    req: any
  ): Promise<void>;
}): import("next-auth/providers").Provider {
  throw new Error("Function not implemented.");
}
