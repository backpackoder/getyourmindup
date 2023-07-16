import { NextRequest, NextResponse } from 'next/server'
import { db } from "@/db";
import { User } from "@/models";
import { jwt } from "@/utils";
import { IPublication } from '@/interfaces';
import { cookies } from 'next/headers';
import Publication from '@/models/Publication';

export async function POST(req: NextRequest) {
  try {
    const {
      body,
      isPrivate = true,
      type = "gratitude"
    } = await req.json() as IPublication
    
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

    const newPublication = new Publication({
      body,
      type,
      isPrivate,
      user: userId,
    })
    
    await newPublication.save({ validateBeforeSave: true })
    await db.disconnect();

    return NextResponse.json({
      newPublication
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Revisar logs del servidor",
    }, { status: 500 });
  }
};


export async function GET() {
  try {
    await db.connect();
    const publications = await Publication.find().lean();
    await db.disconnect();
    return NextResponse.json({
      publications,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Revisar logs del servidor",
    }, { status: 500 });
  }
}