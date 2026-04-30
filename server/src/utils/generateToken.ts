import jwt from "jsonwebtoken";
import type { IAdmin } from "../models/Admin.js";

export const generateAdminToken = (admin: IAdmin) => {
    try {
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }
        console.log("JWT_SECRET:", process.env.JWT_SECRET);

        const token = jwt.sign(
            {
                id: admin._id,
                role: "admin", // 🔒 force admin role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d", // optional but recommended
            }
        );

        return token;
    } catch (error: any) {
        console.error("🔥 Token Generation Error:", error.message);
        throw error; // let controller handle response
    }
};