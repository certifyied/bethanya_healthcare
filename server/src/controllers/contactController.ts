// import { Request, Response } from "express";
// import nodemailer from "nodemailer";

// export const sendMessage = async (req: Request, res: Response) => {
//   try {
//     const { name, email, message } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       replyTo: email,
//       to: "bethanyaweb@gmail.com",
//       subject: `New Contact Message from ${name}`,
//       html: `
//         <h2>New Contact Message</h2>

//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Message sent successfully",
//     });

//   } catch (error: any) {
//     console.log(error);

//     res.status(500).json({
//       success: false,
//       message: "Failed to send message",
//       error: error.message,
//     });
//   }
// };
import { Request, Response } from "express";  // 👈 add this
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (req: Request, res: Response) => {
  try {
    console.log("CONTACT API HIT");
    console.log("BODY:", req.body);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "bethanyaweb@gmail.com",
      subject: "New Contact Message",
      text: `
Name: ${req.body.name}
Email: ${req.body.email}
Message: ${req.body.message}
      `,
    });

    console.log("MAIL SENT");

    return res.status(200).json({ success: true, message: "Message sent successfully" });

  } catch (error) {
    console.log("FULL EMAIL ERROR:", error);
    return res.status(500).json({ success: false, message: "Email failed", error });
  }
};