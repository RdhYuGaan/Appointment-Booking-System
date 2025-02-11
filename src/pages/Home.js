import React, { useState } from "react";
import SlotList from "../components/SlotList";
import AppointmentForm from "../components/AppointmentForm";
import { Container, Typography, Paper } from "@mui/material";

const Home = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Appointment Booking
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <SlotList onSelect={setSelectedSlot} />
      </Paper>
      {selectedSlot && (
        <Paper sx={{ p: 2 }}>
          <AppointmentForm selectedSlot={selectedSlot} onSuccess={() => setSelectedSlot(null)} />
        </Paper>
      )}
    </Container>
  );
};

export default Home;
