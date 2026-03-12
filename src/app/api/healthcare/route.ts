import nodemailer from "nodemailer";

import { NextRequest, NextResponse } from "next/server";

// Create a transporter configuration
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
  const { name, phone, email, company } = await request.json();

  try {
    // Send email
    await transporter.sendMail({
      from: `"ArdentCo" <${process.env.SMTP_FROM}>`,
      to: process.env.HEALTHCARE, // Where you want to receive emails
      // to: "famousforgames@gmail.com",
      replyTo: email, // Set reply-to as sender's email
      subject: `Healthcare Form Submitted by ${email}`,
      text: `
          Name: ${name}
          Phone: ${phone}
          Email: ${email}
          Company: ${company}
        `,
      html: `
          <h1>Healthcare Form</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
        `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Email send error:", error);
    // res.status(500).json({
    //   message: "Failed to send email",
    //   error: error.message,
    // });
    return NextResponse.json(
      { message: "Failed to send email" },
      {
        status: 500,
      }
    );
  }
}
