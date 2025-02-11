import React, { useEffect, useState } from "react";
import { getAppointments, cancelAppointment } from "../api/api";
import { Card, CardContent, Typography, Button, Grid, CircularProgress, Alert } from "@mui/material";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await getAppointments();
      setAppointments(response.data);
    } catch (err) {
      setError("Error fetching appointments");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    try {
      await cancelAppointment(id);
      setAppointments(appointments.filter((appt) => appt.id !== id));
    } catch (err) {
      setError("Failed to cancel appointment");
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        My Appointments
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {loading ? (
        <CircularProgress />
      ) : appointments.length === 0 ? (
        <Typography>No appointments booked.</Typography>
      ) : (
        <Grid container spacing={2}>
          {appointments.map((appt) => (
            <Grid item xs={12} sm={6} md={4} key={appt.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{appt.date}</Typography>
                  <Typography>{appt.time}</Typography>
                  <Typography>Name: {appt.name}</Typography>
                  <Typography>Contact: {appt.contact}</Typography>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => handleCancel(appt.id)}
                    sx={{ mt: 1 }}
                  >
                    Cancel
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default AppointmentList;
