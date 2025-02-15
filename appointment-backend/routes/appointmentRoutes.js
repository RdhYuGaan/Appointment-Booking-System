import express from "express";
import { bookAppointment, getAppointments, cancelAppointment } from "../controllers/appointmentController.js";

const router = express.Router();

// Route to book a new appointment (POST request)
router.post("/book", bookAppointment);
// Route to get all appointments for a specific user (GET request)
router.get("/user/:userId", getAppointments);
// Route to cancel an appointment by its ID (DELETE request)
router.delete("/:appointmentId", cancelAppointment);

export default router;
