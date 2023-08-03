import { NextResponse } from 'next/server'
import { db } from "@/db";
import { User } from "@/models";
import { jwt } from "@/utils";
import { cookies } from 'next/headers';
import { IUser } from '@/interfaces';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';

export async function PUT(req: Request) {
  try {
    const { passions, profession, hasPet, liveWith } = await req.json() as IUser;

    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse
        .json({ message: "you must be authenticated to do this" }, { status: 401 });
    }
    await db.connect();
    const user = await User.findByIdAndUpdate((session.user as any)._id, { passions, profession, hasPet, liveWith }).lean();
    await db.disconnect();

    if (!user) {
      return NextResponse
        .json({ message: "you must be authenticated to do this" }, { status: 401 });
    }


    return NextResponse.json({
      ...user,
      passions, profession, hasPet, liveWith
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Review server logs",
    }, { status: 500 });
  }
}
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse
        .json({ message: "you must be authenticated to do this" }, { status: 401 });
    }
    await db.connect();
    const user = await User.findById((session.user as any)._id).lean();
    await db.disconnect();

    if (!user) {
      return NextResponse
        .json({ message: "you must be authenticated to do this" }, { status: 401 });
    }


    return NextResponse.json({
      ...user,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Review server logs",
    }, { status: 500 });
  }
}