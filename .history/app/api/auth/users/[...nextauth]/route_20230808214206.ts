import UserModel from "@app/models/user";
import startDB from "@lib/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";

async function authorize(credentials: { email: string; password: string }) {
  await startDB();
  const user = await UserModel.findOne({ email: credentials.email });

  if (!user) {
    throw new Error("Email or password mismatch!");
  }

  const passwordMatch = await user.comparepassword(credentials.password);

  if (!passwordMatch) {
    throw new Error("Email or password mismatch!");
  }

  return {
    name: user.fullname,
    email: user.email,
    role: user.role,
    id: user._id,
  };
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
      CredentialsProvider({
        type:
      // Use the object configuration format for the provider
      credentials: {
        // Define the fields used for authentication
        // email: {
        //   label: "Email",
        //   type: "text",
        // },
        // password: {
        //   label: "Password",
        //   type: "password",
        // },
      },
      // Use the authorize function
      authorize,
    }),
  ],
  callbacks: {
    jwt(params: any) {
      if (params.user?.role) {
        params.token.role = params.user.role;
        params.token.id = params.user.id;
      }
      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string;
        (session.user as { role: string }).role = token.role as string;
      }
      return session;
    },
  },
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };



// import UserModel from "@app/models/user";
// import startDB from "@lib/db";
// import NextAuth, { NextAuthOptions } from "next-auth";
// import { CredentialsProvider } from "next-auth/providers/credentials";

// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       type: "credentials",
//         credentials: {},
      
//       async authorize(credentials, req) {
//         const { email, password } = credentials as {
//           email: string;
//           password: string;
//         };
//         await startDB;
//         const user = await UserModel.findOne({ email });
//         if (!user) throw Error("email or pasword mismatch!");
//         const passwordMatch = await user.comparepassword(password);
//           if (!passwordMatch) throw Error("email or pasword mismatch!");
//           return {
//               name: user.fullname,
//               email: user.email,
//               role: user.role,
//               id: user._id,
              
//           };
//       },
//     }),
//     ], callbacks: {
//       jwt(params: any) {
//             if (params.user?.role) {
//                 params.token.role = params.user.role;
//                 params.token.id = params.user.id;
//             } return params.token
//       },
//       session({ session, token }) {
//           if (session.user) {
//               (session.user as { id: string }).id = token.id as string;
//               (session.user as { role: string }).role = token.role as string;
//           }
//           return session;
//         }
      
//   }
// };

// const authHandler = NextAuth(authOptions);

// export { authHandler as GET, authHandler as POST };

// function CredentialsProvider(arg0: {
//   type: string;
//   credentials: {};
//   authorize(
//     credentials: { email: string; password: string },
//     req: any
//   ): Promise<void>;
// }): import("next-auth/providers").Provider {
//   throw new Error("Function not implemented.");
// }
