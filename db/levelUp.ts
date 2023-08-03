import { db } from "@/db";
import { User } from "@/models";

export async function levelUp(id: string) {
  try {
    await db.connect();
    const user = await User.findById(id).lean();
    if (!user) {
      return false;
    }
    await User.findByIdAndUpdate(id, { level: user.level + 1 }).lean();
    await db.disconnect();
    return {
      ...user,
      level: user?.level + 1
    };
  } catch (error) {
    console.log(error);
    return {
      message: "Review server logs",
      status: 500
    };
  }
}