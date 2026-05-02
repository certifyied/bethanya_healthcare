import type { Request, Response } from "express";
import Admin from "../models/Admin"
import bcrypt from "bcrypt";
import * as crypto from "crypto";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import Service from "../models/Service";


export const registerAdmin = async (req: Request, res: Response) => {
    try {
        console.log("🔵 Incoming Request Body:", req.body);

        const { name, email, mobile, password } = req.body;

        // 1️⃣ Check required fields
        if (!name || !email || !mobile || !password) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // 2️⃣ Validate email
        if (!email.endsWith("@gmail.com")) {
            return res.status(400).json({
                message: "Email must be a valid @gmail.com address",
            });
        }

        // 3️⃣ Validate mobile
        const mobileRegex = /^\d{10}$/;

        if (!mobileRegex.test(mobile)) {
            return res.status(400).json({
                message: "Mobile number must be exactly 10 digits",
            });
        }

        // 4️⃣ Password validation
        // Minimum 6 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message:
                    "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
            });
        }

        // 5️⃣ Check existing admin
        const existingAdmin = await Admin.findOne({
            $or: [{ email }, { mobile }],
        });

        if (existingAdmin) {
            return res.status(400).json({
                message: "Admin already exists with this email or mobile",
            });
        }

        // 6️⃣ Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 7️⃣ Create admin
        const newAdmin = new Admin({
            name,
            email,
            mobile,
            password: hashedPassword,
            role: "admin",
            isActive: true,
        });

        await newAdmin.save();

        console.log("✅ Admin registered:", newAdmin._id);

        // 8️⃣ Success response
        return res.status(201).json({
            message: "Admin registered successfully",
            admin: {
                id: newAdmin._id,
                name: newAdmin.name,
                email: newAdmin.email,
                mobile: newAdmin.mobile,
                role: newAdmin.role,
                isActive: newAdmin.isActive,
                createdAt: newAdmin.createdAt,
            },
        });
    } catch (error: any) {
        console.error("🔥 Register Admin Error:", error);

        // Mongo duplicate key error
        if (error.code === 11000) {
            return res.status(400).json({
                message: "Email or mobile already exists",
            });
        }

        // Mongoose validation error
        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: error.message,
            });
        }

        return res.status(500).json({
            message: "Server error",
        });
    }
};


// Login
export const loginAdmin = async (req: Request, res: Response) => {
    try {
        console.log("🔵 Login Request:", req.body);

        const { email, password } = req.body;

        // 1️⃣ Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        // 2️⃣ Check if admin exists
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Email or password is incorrect",
            });
        }

        console.log("🔐 Stored Hashed Password:", admin.password);

        // 3️⃣ Check if admin account is active
        if (!admin.isActive) {
            return res.status(403).json({
                success: false,
                message: "Admin profile is deactivated",
            });
        }

        // 4️⃣ Compare password
        const passwordMatch = await bcrypt.compare(
            password,
            admin.password
        );

        console.log("🔍 Password Match:", passwordMatch);

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Email or password is incorrect",
            });
        }

        console.log("✅ Login successful");

        // 5️⃣ Generate JWT Token
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }

        const token = jwt.sign(
            {
                id: admin._id,
                role: admin.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );

        // 6️⃣ Set cookie
        // res.cookie("admin_token", token, {
        //     httpOnly: true,
        //     secure: false, // true in production with HTTPS
        //     sameSite: "lax", // "none" for production frontend/backend different domains
        //     maxAge: 24 * 60 * 60 * 1000, // 1 day
        //     path: "/",
        // });
        res.cookie("admin_token", token, {
            httpOnly: true,
            secure: true,        // ✅ MUST for HTTPS
            sameSite: "none",    // ✅ MUST for cross-domain
            maxAge: 24 * 60 * 60 * 1000,
            path: "/",
        });

        console.log("🎫 Token generated:", token);

        // 7️⃣ Success response
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                mobile: admin.mobile,
                role: admin.role,
                isActive: admin.isActive,
            },
        });
    } catch (error: any) {
        console.error("🔥 Login Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};


// Check Admin
export const checkAdmin = (req: Request, res: Response) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Authorized admin",
            admin: (req as any).admin,
        });
    } catch (error: any) {
        console.error("Check Admin Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};


// Admin Logout 

export const adminLogout = async (req: Request, res: Response) => {
    try {
        res.clearCookie("admin_token", {
            httpOnly: true,
            secure: true,      // use false if localhost
            sameSite: "none",  // use "lax" for localhost
        });

        return res.status(200).json({
            message: "Admin logged out successfully",
        });
    } catch (error: any) {
        console.error("Logout Error:", error.message);
        return res.status(500).json({
            error: "Internal server error",
        });
    }
};


// Admin profile

export const getAdminProfile = async (req: Request, res: Response) => {
    try {
        const adminId = (req as any).admin.id;

        const admin = await Admin.findById(adminId).select("-password");

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.status(200).json(admin);
    } catch (error) {
        console.error("Profile fetch error:", error);
        res.status(500).json({ message: "Server error" });
    }
};


//Update profile

export const updateAdminProfile = async (req: Request, res: Response) => {
    try {
        const adminId = (req as any).admin.id;

        // let { name, email, mobile } = req.body;
        let { name, email, mobile } = req.body || {};

        const nameTrim = name?.trim();
        const emailTrim = email?.trim();
        const mobileTrim = mobile?.trim();

        // ❗ Prevent update if all fields are empty
        if (!nameTrim && !emailTrim && !mobileTrim) {
            return res.status(400).json({
                message: "At least one field is required to update",
            });
        }

        // Name validation
        if (nameTrim && nameTrim.length < 3) {
            return res.status(400).json({
                message: "Name must be at least 3 characters",
            });
        }

        // Email validation
        if (emailTrim && !/^.+@gmail\.com$/.test(emailTrim)) {
            return res.status(400).json({
                message: "Email must be a valid @gmail.com address",
            });
        }

        // Mobile validation
        if (mobileTrim && !/^\d{10}$/.test(mobileTrim)) {
            return res.status(400).json({
                message: "Mobile number must be exactly 10 digits",
            });
        }

        // Duplicate email check
        if (emailTrim) {
            const existingEmail = await Admin.findOne({ email: emailTrim });
            if (existingEmail && existingEmail._id.toString() !== adminId) {
                return res.status(400).json({ message: "Email already in use" });
            }
        }

        // Duplicate mobile check
        if (mobileTrim) {
            const existingMobile = await Admin.findOne({ mobile: mobileTrim });
            if (existingMobile && existingMobile._id.toString() !== adminId) {
                return res.status(400).json({ message: "Mobile already in use" });
            }
        }

        const admin = await Admin.findById(adminId);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        admin.name = nameTrim || admin.name;
        admin.email = emailTrim || admin.email;
        admin.mobile = mobileTrim || admin.mobile;

        await admin.save();

        res.status(200).json({
            message: "Profile updated successfully",
            admin,
        });
    } catch (error) {
        console.error("Profile update error:", error);
        res.status(500).json({ message: "Server error" });
    }
};


// Change Password

export const changeAdminPassword = async (req: Request, res: Response) => {
    try {
        const adminId = (req as any).admin.id;

        const { oldPassword, newPassword } = req.body;

        // Check required fields
        if (!oldPassword || !newPassword) {
            return res.status(400).json({
                message: "Old password and new password are required",
            });
        }

        // Prevent same old and new password
        if (oldPassword === newPassword) {
            return res.status(400).json({
                message: "New password must be different from old password",
            });
        }

        const admin = await Admin.findById(adminId);

        if (!admin) {
            return res.status(404).json({
                message: "Admin not found",
            });
        }

        // Compare old password with stored password
        const isMatch = await bcrypt.compare(oldPassword, admin.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Old password is incorrect",
            });
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(newPassword, salt);

        await admin.save();

        return res.status(200).json({
            message: "Password changed successfully",
        });

    } catch (error) {
        console.error("Password change error:", error);
        return res.status(500).json({
            message: "Server error",
        });
    }
};


export const getAllService = async (req: Request, res: Response) => {
    try {
        const services = await Service.find();

        res.status(200).json({
            message: "All services fetched successfully",
            services,
        });
    } catch (error: any) {
        console.error("GET ALL SERVICE ERROR:", error);

        res.status(500).json({
            message: "Failed to fetch services",
            error: error.message || error,
        });
    }
};


//Forgot Password
// export const forgotAdminPassword = async (req: Request, res: Response) => {
//     try {
//         const { email } = req.body;

//         const admin = await Admin.findOne({ email });

//         if (!admin) {
//             return res.status(404).json({
//                 message: "Admin not found",
//             });
//         }

//         const resetToken = crypto.randomBytes(20).toString("hex");

//         admin.resetPasswordToken = resetToken;
//         admin.resetPasswordExpire = new Date(Date.now() + 15 * 60 * 1000);

//         await admin.save();

//         const resetUrl = `http://localhost:3000/admin/reset-password/${resetToken}`;

//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL,
//                 pass: process.env.EMAIL_PASS,
//             },
//         });

//         await transporter.sendMail({
//             to: admin.email,
//             subject: "Admin Password Reset",
//             html: `
//         <h3>Reset Admin Password</h3>
//         <p>Click below link (valid for 15 minutes)</p>
//         <a href="${resetUrl}">${resetUrl}</a>
//       `,
//         });

//         res.status(200).json({
//             message: "Reset link sent to admin email",
//         });
//     } catch (error: any) {
//         console.error("ADMIN FORGOT PASSWORD ERROR:", error);

//         res.status(500).json({
//             message: "Something went wrong",
//             error: error.message,
//         });
//     }
// };


// //Reset password
// export const resetAdminPassword = async (req: Request, res: Response) => {
//     try {
//         const { token } = req.params;
//         const { password } = req.body;

//         const admin = await Admin.findOne({
//             resetPasswordToken: token,
//             resetPasswordExpire: { $gt: Date.now() },
//         });

//         if (!admin) {
//             return res.status(400).json({
//                 message: "Invalid or expired token",
//             });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         admin.password = hashedPassword;
//         admin.resetPasswordToken = undefined;
//         admin.resetPasswordExpire = undefined;

//         await admin.save();

//         res.status(200).json({
//             message: "Admin password reset successful",
//         });
//     } catch (error: any) {
//         console.error("ADMIN RESET PASSWORD ERROR:", error);

//         res.status(500).json({
//             message: "Reset failed",
//             error: error.message,
//         });
//     }
// };