import express from "express";
import { createService, deleteService, getAllService, getSingleService, updateService } from "../controllers/serviceController";
import upload from "../middleware/upload";
import adminAuth from "../middleware/adminAuth";

const router = express.Router();

router.post("/create-services", adminAuth, upload.single("image"), createService);
router.put("/update-service/:serviceId", adminAuth, upload.single("image"), updateService);
router.delete("/delete-service/:serviceId", adminAuth, deleteService);
router.get("/services", getAllService);
router.get("/service/:serviceId", adminAuth, getSingleService);
// router.post("/upload-profile", adminAuth, upload.single("image"), uploadProfileImage);
console.log("✅ ServiceRoutes loaded");


export default router;