import { NextResponse } from 'next/server'
import { db } from "@/db";
import { User } from "@/models";
import { jwt } from "@/utils";
import { cookies } from 'next/headers';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';

export async function PUT() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse
        .json({ message: "you must be authenticated to do this" }, { status: 401 });
    }
    
    await db.connect();
    const user = await User.findByIdAndUpdate((session.user as any)._id, { level: (session.user as any).level + 1 }).lean();
    return NextResponse.json({
      ...user,
      level: (session.user as any).level + 1
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Review server logs",
    }, { status: 500 });
  }
}