import express from "express";
import { bookAppointment, getAppointments, cancelAppointment } from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/book", bookAppointment);
router.get("/user/:userId", getAppointments);
router.delete("/:appointmentId", cancelAppointment);

export default router;
