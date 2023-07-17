import bcrypt from "bcryptjs";
import { User } from "@/models";
import { db } from ".";

export const checkUserEmailPassword = async (
  email: string,
  password: string
) => {
  const emailLowerCase = email.toLocaleLowerCase();
  try {
    await db.connect();
    const user = await User.findOne({ email: emailLowerCase });
    await db.disconnect();
    if (!user) {
      return null;
    }
    if (!bcrypt.compareSync(password, user.password!)) {
      return null;
    }
    const { role, name, _id } = user;
    return {
      role,
      name,
      _id,
      email: emailLowerCase,
    };
  } catch (error) {
    console.log("error en login ", error);
    return null;
  }
};

export const oAuthToDbUser = async (oAuthEmail: string, oAuthName: string) => {
  try {
    await db.connect();
    const user = await User.findOne({ email: oAuthEmail });
    if (user) {
      await db.disconnect();
      const { _id, name, email, role, level } = user;
      return { _id, name, email, role, level };
    }

    const newUser = new User({
      email: oAuthEmail,
      name: oAuthName,
      password: "@",
      role: "client",
    });
    await newUser.save();
    await db.disconnect();
    const { _id, name, email, role, level } = newUser;
    return { _id, name, email, role, level };
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return null;
  }
};
