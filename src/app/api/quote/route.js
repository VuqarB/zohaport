import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  const { name } = await req.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.KEY_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,

    subject: name,
    text: "Request Email",
    html: "<h1>The Title</h1><p>The Body</p>",
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Request sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
