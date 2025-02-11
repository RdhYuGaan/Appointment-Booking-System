import React, { useState } from "react";
import { bookAppointment } from "../api/api";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";

const AppointmentForm = ({ selectedSlot, onSuccess }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !contact) {
      setError("All fields are required");
      return;
    }

    try {
      await bookAppointment({
        name,
        contact,
        date: selectedSlot.date,
        time: selectedSlot.time,
      });
      setSuccess("Appointment booked successfully!");
      setError("");
      onSuccess(); // Refresh list
    } catch (err) {
      setError("Failed to book appointment");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6">Book Appointment</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <TextField
        fullWidth
        label="Full Name"
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        label="Contact Number"
        margin="normal"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Confirm Booking
      </Button>
    </Box>
  );
};

export default AppointmentForm;
