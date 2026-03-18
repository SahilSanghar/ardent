import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true" ? true : false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  const { name, phone, email, company, designation, message } = await request.json();

  try {
    await transporter.sendMail({
      from: `"ArdentCo" <${process.env.SMTP_FROM}>`,
      to: process.env.PRAGENCY,
      replyTo: email,
      subject: `PR Agency Form Submitted by ${email}`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Company: ${company}
        Designation: ${designation}
        Message: ${message}
      `,
      html: `
        <h1>PR Agency Form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);

    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
