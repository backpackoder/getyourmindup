import { NextResponse } from 'next/server'
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { User } from "@/models";
import { jwt } from "@/utils";

type Data =
  | {
    message: string;
  }
  | {
    error: string;
  }
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

export async function POST(req: Request) {
  try {
    const { email = "", password = "" } = await req.json();
    await db.connect();
    const user = await User.findOne({ email }).lean();
    await db.disconnect();

    if (!user) {
      return NextResponse.json({
        message: "Correo o contraseña no válidos - EMAIL",
      }, { status: 400 });
    }

    if (!bcrypt.compareSync(password, user.password!)) {
      return NextResponse.json({
        message: "Correo o contraseña no válidos - PASSWORD",
      }, { status: 400 });
    }
    const { role, name, _id } = user;

    const token = jwt.signToken(_id, email);

    return NextResponse.json({
      token,
      user: {
        email,
        role,
        name,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Error en el servidor",
    }, { status: 500 });
  }
};
