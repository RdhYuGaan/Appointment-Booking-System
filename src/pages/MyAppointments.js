import React from "react";
import AppointmentList from "../components/AppointmentList";
import { Container, Typography, Paper } from "@mui/material";

const MyAppointments = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Appointments
      </Typography>
      <Paper sx={{ p: 2 }}>
        <AppointmentList />
      </Paper>
    </Container>
  );
};

export default MyAppointments;
