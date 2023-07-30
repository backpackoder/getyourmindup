import { NextResponse } from "next/server";
import { db, actionsOfTheDay } from "@/db";
import { ActionsOfTheDay } from "@/models";

export async function POST() {
  try {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json({ message: "No tiene acceso" });
    }
    await db.connect();
    await ActionsOfTheDay.deleteMany();
    await ActionsOfTheDay.insertMany(actionsOfTheDay);
    await db.disconnect();

    return NextResponse.json({ message: "todo bien" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Review server logs",
    }, { status: 500 });
  }
}