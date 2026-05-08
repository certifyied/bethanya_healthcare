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


import { Request, Response } from "express";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessage = async (req: Request, res: Response) => {
  try {
    console.log("CONTACT API HIT");
    console.log("BODY:", req.body);

    const { name, email, message, phone } = req.body;

    // ✅ Strict email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|org|net|co\.in|co\.uk|edu|gov|io)$/i;
    if (!emailRegex.test(email?.trim())) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "bethanyahealthcare@gmail.com",
      subject: `New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #c2a97a; border-radius: 12px; overflow: hidden;">
          
          <!-- HEADER -->
          <div style="background-color: #0f2218; padding: 24px; text-align: center;">
            <h1 style="color: #c2a97a; margin: 0; font-size: 24px; letter-spacing: 2px;">
              BETHANYA AYURVEDA
            </h1>
            <p style="color: #d4af37; margin: 6px 0 0; font-size: 13px;">
              New Message Received
            </p>
          </div>

          <!-- BODY -->
          <div style="background-color: #ffffff; padding: 32px;">

            <table style="width: 100%; border-collapse: collapse;">
              
              <tr>
                <td style="padding: 12px 16px; background-color: #f9f5ee; border-left: 4px solid #c2a97a; margin-bottom: 12px; display: block;">
                  <p style="margin: 0; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Name</p>
                  <p style="margin: 4px 0 0; font-size: 16px; color: #0f2218; font-weight: bold;">${name}</p>
                </td>
              </tr>

              <tr><td style="height: 10px;"></td></tr>

              <tr>
                <td style="padding: 12px 16px; background-color: #f9f5ee; border-left: 4px solid #c2a97a; display: block;">
                  <p style="margin: 0; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                  <p style="margin: 4px 0 0; font-size: 16px; color: #0f2218;">
                    <a href="mailto:${email}" style="color: #c2a97a; text-decoration: none;">${email}</a>
                  </p>
                </td>
              </tr>

              <tr><td style="height: 10px;"></td></tr>

              ${phone ? `
              <tr>
                <td style="padding: 12px 16px; background-color: #f9f5ee; border-left: 4px solid #c2a97a; display: block;">
                  <p style="margin: 0; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Phone</p>
                  <p style="margin: 4px 0 0; font-size: 16px; color: #0f2218;">${phone}</p>
                </td>
              </tr>
              <tr><td style="height: 10px;"></td></tr>
              ` : ""}

              <tr>
                <td style="padding: 12px 16px; background-color: #f9f5ee; border-left: 4px solid #c2a97a; display: block;">
                  <p style="margin: 0; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                  <p style="margin: 4px 0 0; font-size: 15px; color: #333; line-height: 1.6;">${message}</p>
                </td>
              </tr>

            </table>

          </div>

          <!-- FOOTER -->
          <div style="background-color: #0f2218; padding: 16px; text-align: center;">
            <p style="color: #c2a97a; margin: 0; font-size: 12px;">
              © 2026 Bethanya Ayurveda Healthcare. All rights reserved.
            </p>
          </div>

        </div>
      `,
    });

    console.log("MAIL SENT");

    return res.status(200).json({ success: true, message: "Message sent successfully" });

  } catch (error) {
    console.log("FULL EMAIL ERROR:", error);
    return res.status(500).json({ success: false, message: "Email failed", error });
  }
};