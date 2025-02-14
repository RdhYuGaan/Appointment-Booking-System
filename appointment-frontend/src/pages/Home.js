import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';
import AppointmentForm from '../components/AppointmentForm';
import { bookAppointment, fetchAvailableSlots } from '../api/api'; // API call to fetch available slots

const Home = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const getSlots = async () => {
      try {
        const data = await fetchAvailableSlots();
        setSlots(data);
      } catch (error) {
        console.error('Error fetching slots:', error);
      }
    };
    getSlots();
  }, []);

  // Handle appointment booking submission
  const handleAppointmentSubmit = async (formData) => {
      try {
        // Call the API to book the appointment
        const response = await bookAppointment(formData);
    
        // If the response is successful, you can handle the success message
        console.log('Appointment booked successfully:', response.message);
        // Optionally, show a success message to the user or navigate to another page
      } catch (error) {
        console.error('Error booking appointment:', error);
        // Optionally, show an error message to the user
      }
    };
    
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Book an Appointment
      </Typography>

      <Grid container spacing={3}>
        {/* Display available slots (optional) */}
        {slots.map((slot) => (
          <Grid item xs={12} sm={6} md={4} key={slot.id}>
            {/* Render slot information */}
            <Typography>{slot.title}</Typography>
          </Grid>
        ))}
      </Grid>

      {/* Appointment booking form */}
      <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Book New Appointment
        </Typography>
        <AppointmentForm onSubmit={handleAppointmentSubmit} />
      </Paper>
    </Container>
  );
};

export default Home;
