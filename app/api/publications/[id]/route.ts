import { NextResponse } from 'next/server'
import { db } from "@/db";
import { IPublication } from '@/interfaces';
import Publication from '@/models/Publication';
import { cookies } from 'next/headers';
import { jwt } from '@/utils';
import { User } from '@/models';

export async function PUT(req: Request) {
  try {
    const { body } = await req.json() as { body: string };
    if (body.length < 6) {
      return NextResponse.json({
        message: "Content must be longer than 6 characters",
      }, { status: 400 });
    }

    const nextCookies = cookies();
    const token = nextCookies.get('token')
    let userId = await jwt.isValidToken(token?.value || '');
    await db.connect();
    const user = await User.findById(userId).lean();

    if (!user) {
      await db.disconnect();
      return NextResponse
        .json({ message: "you must be authenticated to do this" }, { status: 401 });
    }

    const id = req.url.split('/').reverse()[0]

    const publication = await Publication.findOneAndUpdate({ _id: id, user: userId }, { body }).lean();
    if (!publication) {
      await db.disconnect();
      return NextResponse
        .json({ message: "you can only update your posts" }, { status: 401 });
    }




    // const publication = await Publication.findByIdAndUpdate(id, { body }).lean();
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
      message: "Revisar logs del servidor",
    }, { status: 500 });
  }
};

