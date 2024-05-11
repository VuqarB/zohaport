import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  const { subject } = await req.json();
  const { EMAIL, KEY_PASS } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: KEY_PASS,
    },
  });

  const mailOptions = {
    from: EMAIL,
    to: EMAIL,

    subject,
    text: "Hey, Hi there",
    html: "<h1>The Title</h1><p>The Body</p>",
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
};
