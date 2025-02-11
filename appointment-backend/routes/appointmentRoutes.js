import express from "express";
import {
  getSlots,
  bookAppointment,
  getAppointments,
  cancelAppointment,
} from "../models/appointmentModel.js";

const router = express.Router();

router.get("/slots", (req, res) => {
  getSlots((err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});

router.post("/appointments", (req, res) => {
  bookAppointment(req.body, (err, result) => {
    if (err) return res.status(400).json({ error: "Failed to book appointment" });
    res.json({ message: "Appointment booked successfully" });
  });
});

router.get("/appointments", (req, res) => {
  getAppointments((err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json(results);
  });
});

router.delete("/appointments/:id", (req, res) => {
  cancelAppointment(req.params.id, (err, result) => {
    if (err) return res.status(400).json({ error: "Failed to cancel appointment" });
    res.json({ message: "Appointment canceled successfully" });
  });
});

export default router;
