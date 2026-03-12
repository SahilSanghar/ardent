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
  const formData = await request.formData();
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const department = formData.get("department") as string;
  const cv = formData.get("cv") as File;

  // check if file is empty
  if (!cv) {
    return NextResponse.json(
      { message: "Please upload a CV" },
      {
        status: 400,
      }
    );
  }

  try {
    const arrayBuffer = await cv.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    // Send email
    await transporter.sendMail({
      from: `"ArdentCo" <${process.env.SMTP_FROM}>`,
      to: "rushali.k@ardentco.in", // Where you want to receive emails
      // to: "famousforgames@gmail.com",
      replyTo: email, // Set reply-to as sender's email
      subject: `Job Application Submitted by ${email}`,
      text: `
          Name: ${firstName + " " + lastName}
          Phone: ${phone}
          Email: ${email}
          Department: ${department}
        `,
      html: `
          <h1>Job Application Form</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Departmnet:</strong> ${department}</p>
        `,
      attachments: [
        {
          filename: cv.name, // Use the file's name from the `cv` object
          content: buffer, // Use the buffer created from the file's arrayBuffer
          contentType: cv.type, // Use the file's type from the `cv` object
          cid: "cv", // Optional: Content ID for inline images
        },
      ],
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
