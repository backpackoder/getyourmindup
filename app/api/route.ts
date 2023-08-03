import { NextResponse } from 'next/server'
import { db } from "@/db";
import { User } from "@/models";
import { jwt } from "@/utils";
import { cookies } from 'next/headers';
import { IUser } from '../../interfaces/user';

export async function GET(req: Request) {
  return NextResponse.json({
    message: 'Hello'
  });

}