import { getSession } from "next-auth/react";
import connectDB from "src/utils/connectDB";

import User from "../../../models/User";

async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      status: "failed",
      message: "error in connecting DB",
    });
    return;
  }

  const session = getSession({ req });
  if (!session)
    return res
      .status(401)
      .json({ status: "faild", message: "You are not loged in!" });

  const user = User.findOne({ email: session.user.email });

  if (!user)
    res.status(404).json({ status: "faild", message: "User doesn't exist!" });

  if (req.method === "POST") {
    const { title, desciption, status } = req.body;

    if (!title || !desciption || !status)
      return res.status(422).json({ status: "faild", message: "Invalid Data" });

    user.todos.push({ title, desciption, status });
    user.save();

    res.status(201).json({ status: "success", message: "Todo created" });
  }
}

export default handler;
