import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies?.admin_token;

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    // check admin role
    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "Only admin can access",
      });
    }

    // attach admin data
    (req as any).admin = decoded;

    next();

  } catch (error: any) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default adminAuth;

// import type { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";

// const adminAuth = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     console.log("🔵 Admin Auth Middleware Called");

//     console.log("🍪 Cookies Received:", req.cookies);
//     console.log("📩 Authorization Header:", req.header("Authorization"));

//     const token =
//       req.cookies?.admin_token ||
//       req.header("Authorization")?.replace("Bearer ", "");

//     console.log("🎫 Final Token Used:", token);

//     if (!token) {
//       console.log("❌ No token provided");

//       return res.status(401).json({
//         message: "No token provided",
//       });
//     }

//     const decoded: any = jwt.verify(
//       token,
//       process.env.JWT_SECRET!
//     );

//     console.log("✅ Decoded Token:", decoded);

//     if (decoded.role !== "admin") {
//       console.log("❌ Access denied: not admin");

//       return res.status(403).json({
//         message: "Only admin can access",
//       });
//     }

//     (req as any).admin = decoded;

//     console.log("✅ Admin authenticated");

//     next();
//   } catch (error: any) {
//     console.log("🔥 JWT Error:", error.message);

//     return res.status(401).json({
//       message: "Invalid or expired token",
//     });
//   }
// };

// export default adminAuth;