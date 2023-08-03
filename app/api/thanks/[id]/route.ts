import { NextResponse } from 'next/server'
import { db } from "@/db";
import Publication from '@/models/Publication';
import { cookies } from 'next/headers';
import { jwt } from '@/utils';
import { User } from '@/models';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';

export async function PUT(req: Request) {
  try {
    const { body } = await req.json() as { body: string };
    if (body.length < 6) {
      return NextResponse.json({
        message: "Content must be longer than 6 characters",
      }, { status: 400 });
    }

    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse
        .json({ message: "you must be authenticated to do this" }, { status: 401 });
    }


    const id = req.url.split('/').reverse()[0]
    await db.connect();
    const publication = await Publication.findOneAndUpdate({ _id: id, user: (session?.user as any)._id }, { body }).lean();
    await db.disconnect();

    if (!publication) {
      return NextResponse.json({
        message: "Not exists publication",
      }, { status: 400 });
    }

    return NextResponse.json({
      ...publication,
      body
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Review server logs",
    }, { status: 500 });
  }
};


export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse
        .json({ message: "you must be authenticated to do this" }, { status: 401 });
    }
    const id = req.url.split('/').reverse()[0]
    await db.connect();
    const publication = await Publication.findOneAndDelete({ _id: id, user: (session?.user as any)._id }).lean();

    await db.disconnect();
    if (!publication) {
      return NextResponse.json({
        message: "Not exists publication",
      }, { status: 400 });
    }

    return NextResponse.json({
      message: 'Deleted correctly'
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Review server logs",
    }, { status: 500 });
  }
};
