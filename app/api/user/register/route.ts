import { NextResponse } from 'next/server'
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { User } from "@/models";
import { jwt, validations } from "@/utils";
import { IUser } from '@/interfaces/user';

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

export async function POST(req: Request) {

  try {
    const {
      email = "",
      password = "",
      name = "",
      age = "",
      sex = ""
    } = await req.json() as IUser
    if (password.length < 6) {
      return NextResponse.json({
        message: "La contraseña debe tener 6 o más caracteres",
      }, { status: 400 });
    }

    if (name.length < 2) {
      return NextResponse.json({
        message: "El nombre 2 o más caracteres",
      }, { status: 400 });
    }

    if (!validations.isValidEmail(email)) {
      return NextResponse.json({
        message: "El correo no tiene formato de correo",
      }, { status: 400 });
    }

    await db.connect();
    const user = await User.findOne({ email }).lean();

    if (user) {
      await db.disconnect();
      return NextResponse.json({
        message: "Ese correo ya está registrado",
      }, { status: 400 });
    }

    const newUser = new User({
      email: email.toLocaleLowerCase(),
      password: bcrypt.hashSync(password),
      role: 'client',
      name,
      age,
      sex
    })

    await newUser.save({ validateBeforeSave: true })
    await db.disconnect();
    const { _id, role } = newUser;

    const token = jwt.signToken(_id, email);

    return NextResponse.json({
      token,
      user: {
        email,
        role,
        name,
        age,
        sex
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Revisar logs del servidor",
    }, { status: 500 });
  }
};
