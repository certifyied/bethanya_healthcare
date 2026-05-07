import express from "express";
import { sendMessage } from "../controllers/contactController";

const router = express.Router();

router.post("/send-message", sendMessage);

export default router;