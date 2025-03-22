import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export function GET() {
  // some database logic
  return Response.json({
    email: "pnaskardev@gmail.com",
    name: "Priyanshu",
  });
}

export async function POST(req: NextRequest) {
  // extract the body
  const body = await req.json();
  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(user.id);

  return NextResponse.json({
    message: "Signd Up",
    success: true,
  });
}
