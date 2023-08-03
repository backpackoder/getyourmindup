import { NextResponse } from 'next/server'
import { db } from "@/db";
import { User } from "@/models";
import { jwt } from "@/utils";
import { cookies } from 'next/headers';

type Data =
  | {
    message: string;
  }
  | {
    token: string;
    user: {
      email: string;
      role: string;
      name: string;
    };
  };

export async function GET() {
  const nextCookies = cookies();

  const token = nextCookies.get('token')
  let userId = '';
  try {
    userId = await jwt.isValidToken(token?.value || '');
    await db.connect();
    const user = await User.findById(userId).lean();

    if (!user) {
      await db.disconnect();
      return NextResponse.json({
        message: "User not exists",
      }, { status: 400 });
    }
    await db.disconnect();
    const { _id, email, role, name } = user;

    return NextResponse.json({
      token: jwt.signToken(_id, email),
      user: {
        email,
        role,
        name,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Unauthorized token",
    }, { status: 500 });
  }
};
