import express from "express";
import { adminLogout, changeAdminPassword, checkAdmin, getAdminProfile, getAllService, loginAdmin, registerAdmin, updateAdminProfile } from "../controllers/adminController";
import adminAuth from "../middleware/adminAuth";


const router = express.Router();

// ONLY signup route
router.post("/signup", registerAdmin);
router.post("/login", loginAdmin);
router.get("/check-admin", adminAuth, checkAdmin);
router.post("/admin-logout", adminLogout);
router.get("/services", adminAuth, getAllService);
router.get("/admin-profile", adminAuth, getAdminProfile);
router.put("/admin-update", adminAuth, updateAdminProfile);
router.put("/admin-change-password", adminAuth, changeAdminPassword);
console.log("✅ AdminRoutes loaded");
// router.post("/forgot-password", adminAuth, forgotAdminPassword);
// router.put("/reset-password/:token", resetAdminPassword);

export default router;
