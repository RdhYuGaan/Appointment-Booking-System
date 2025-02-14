import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';

const AppointmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', date: '', time: '' }); // Reset form
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Book an Appointment
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Appointment Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              label="Date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="time"
              label="Time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
          Book Appointment
        </Button>
      </form>
    </Container>
  );
};

export default AppointmentForm;
