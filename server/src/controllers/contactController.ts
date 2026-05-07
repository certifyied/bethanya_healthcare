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
import nodemailer from "nodemailer";

export const sendMessage = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, phone, message } = req.body;

    // ✅ Required field validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // ✅ Phone validation (optional)
    if (phone) {
      const phoneRegex = /^[0-9]{10}$/;

      if (!phoneRegex.test(phone.trim())) {
        return res.status(400).json({
          success: false,
          message: "Phone number must be 10 digits",
        });
      }
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({
        success: false,
        message:
          "Email sender credentials are not configured. Please set EMAIL_USER and EMAIL_PASS.",
      });
    }

    // ✅ Nodemailer Transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  requireTLS: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  family: 4,
} as nodemailer.TransportOptions);

    // ✅ Send Mail
    await transporter.sendMail({
      from: `"Bethanya Ayurveda" <${process.env.EMAIL_USER}>`,
      to: "bethanyaweb@gmail.com",

      subject: `New Contact Message from ${name}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          background: #f8f8f8;
          padding: 30px;
        ">

          <div style="
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e5e5e5;
          ">

            <div style="
              background: #0f2218;
              padding: 25px;
              text-align: center;
            ">
              <h1 style="
                color: #d4af37;
                margin: 0;
                font-size: 28px;
              ">
                Bethanya Ayurveda
              </h1>

              <p style="
                color: #f5e6b3;
                margin-top: 8px;
                font-size: 14px;
              ">
                New Contact Enquiry
              </p>
            </div>

            <div style="padding: 30px; color: #333;">

              <p>
                <strong>Name:</strong><br />
                ${name}
              </p>

              <p>
                <strong>Email:</strong><br />
                ${email}
              </p>

              ${phone
          ? `
                <p>
                  <strong>Phone:</strong><br />
                  ${phone}
                </p>
              `
          : ""
        }

              <p>
                <strong>Message:</strong><br />
                ${message}
              </p>

            </div>

            <div style="
              background: #f5f5f5;
              padding: 15px;
              text-align: center;
              font-size: 12px;
              color: #777;
            ">
              © Bethanya Ayurveda Healthcare
            </div>

          </div>

        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error: any) {

    console.log("FULL EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to send message",
      stack: error.stack,
    });
  }
};