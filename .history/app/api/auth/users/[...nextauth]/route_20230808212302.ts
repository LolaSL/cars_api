import UserModel from '@app/models/user';
import startDB from '@lib/db';
import { NextAuthOptions } from "next-auth";


export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials: { email: string; password: string; }, req: any) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                await startDB;
                const user = await UserModel.findOne({ email})
            }
        })
    ]
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };