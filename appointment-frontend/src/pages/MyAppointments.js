// src/pages/MyAppointments.js
import React, { useEffect, useState, useContext } from 'react';
import { cancelAppointment, fetchUserAppointments } from '../api/api'; // Assume this function fetches user appointments
import { Button, Typography, Card, CardContent, Grid } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
 
  const { user, logout } = useAuth(); // Get current user from context
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAppointments = async () => {
        try {
          const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
          if (userId) {
            const response = await fetchUserAppointments(userId); // Fetch appointments for the user
            setAppointments(response);
          } else {
            console.error('User ID not found in localStorage');
          }
        } catch (error) {
          console.error('Failed to fetch appointments:', error);
        } finally {
          setLoading(false);
        }
      };
      

    if (user) {
      getAppointments();
    }
  }, [user]);

  const handleCancelAppointment = async (appointmentId) => {
    // Call API to cancel the appointment
    try {
      await cancelAppointment(appointmentId);  // Assume cancelAppointment is defined
      setAppointments(appointments.filter((app) => app.id !== appointmentId));
    } catch (error) {
      console.error('Failed to cancel appointment:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        My Appointments
      </Typography>
      {loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : (
        <Grid container spacing={2}>
          {appointments.length === 0 ? (
            <Typography variant="body1">You have no appointments booked.</Typography>
          ) : (
            appointments.map((appointment) => (
              <Grid item xs={12} sm={6} md={4} key={appointment.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{appointment.title}</Typography>
                    <Typography variant="body1">Date: {appointment.date}</Typography>
                    <Typography variant="body2">Time: {appointment.time}</Typography>
                    <Button 
                      variant="contained" 
                      color="error" 
                      onClick={() => handleCancelAppointment(appointment.id)}
                    >
                      Cancel Appointment
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      )}
    </div>
  );
};

export default MyAppointments;
