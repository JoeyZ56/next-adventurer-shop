import User from "@models/User";
import connect from "@/lib/mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { request } from "express";

export const POST = async (request) => {
  const { email, password } = await request.body.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse(200, { message: "User created", status: 201 });
  } catch (error) {
    return new NextResponse(500, {
      message: "Error creating user",
      status: 500,
    });
  }
};
