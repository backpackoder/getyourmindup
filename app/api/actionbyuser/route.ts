import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { ActionsByUser, ActionsOfTheDay } from "@/models";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { IActionsByUser } from "@/interfaces";


export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse
        .json({ message: "you must be authenticated to do this" }, { status: 401 });
    }

    await db.connect();
    const actionsOfTheDay = await ActionsOfTheDay.find().lean();
    const actionsByUser = await ActionsByUser.findOne({ user: (session?.user as any)?._id }).lean() as IActionsByUser;
    await db.disconnect();
    if (!actionsByUser) {
      return NextResponse.json(actionsOfTheDay[0]);
    }
    const actionsDoneId = (actionsByUser as IActionsByUser)?.actionsDone?.map(({ actionDone }) => actionDone.toString());
    const actionsFiltered = actionsOfTheDay.filter(action => !actionsDoneId.includes(action._id.toString()))
    return NextResponse.json(actionsFiltered[0]);

  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Review server logs",
    }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const {
      actionDone,
      story,
    } = await req.json()

    if (story.length < 10) {
      return NextResponse
        .json({ message: "la historia debe contener almenos 10 caracteres" }, { status: 400 });
    }

    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse
        .json({ message: "you must be authenticated to do this" }, { status: 401 });
    }

    await db.connect();
    const actionsByUser = await ActionsByUser.findOne({ user: (session?.user as any)?._id }).lean();

    if (!actionsByUser) {
      const newActionsByUser = new ActionsByUser({
        user: (session?.user as any)?._id,
        actionsDone: [{ actionDone, story }],
      })
      newActionsByUser.save();
      await db.disconnect();
      return NextResponse.json(newActionsByUser);
    }

    const actionsByUserUpdated = await ActionsByUser.findOneAndUpdate(
      { user: (session?.user as any)?._id },
      { actionsDone: [...actionsByUser.actionsDone, { actionDone, story }] }
    )
      .lean();

    await db.disconnect();



    return NextResponse.json({
      actionsByUserUpdated,
      actionsDone: [
        ...actionsByUser.actionsDone,
        {
          actionDone,
          story,
        }
      ]
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Review server logs",
    }, { status: 500 });
  }
}
