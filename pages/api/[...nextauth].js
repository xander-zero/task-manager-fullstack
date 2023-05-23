import NextAuth from "next-auth";
import CreditialsProvider from "next-auth/providers/credentials";

import User from "../../models/User";
import connectDB from "src/utils/connectDB";

import { verifyPassword } from "src/utils/auth";

const authOptions = {
  sesstion: { strategy: "jwt" },
  providers: [
    CreditialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("Error in connecting to DB!");
        }

        if (!password || !email) throw new Error("Invalid Data!");

        const user = await User.findOne({ email: email });

        if (!user) throw new Error("User doesn't Exist!");

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("email or password is incorrect");

        return { email };
      },
    }),
  ],
};

export default NextAuth(authOptions);
