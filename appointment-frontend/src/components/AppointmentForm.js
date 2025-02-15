import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography, Card, CardContent, Box } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TitleIcon from '@mui/icons-material/Title';

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
    <Container maxWidth="sm">
      <Card sx={{ boxShadow: 3, borderRadius: 3, mt: 4 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
            📅 Book an Appointment
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Appointment Title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  InputProps={{
                    startAdornment: <TitleIcon color="primary" sx={{ marginRight: 1 }} />,
                  }}
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
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: <EventIcon color="primary" sx={{ marginRight: 1 }} />,
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
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: <AccessTimeIcon color="primary" sx={{ marginRight: 1 }} />,
                  }}
                />
              </Grid>
            </Grid>

            {/* Submit Button */}
            <Box mt={3} textAlign="center">
              <Button 
                variant="contained" 
                color="primary" 
                type="submit" 
                size="large" 
                sx={{ borderRadius: 3, textTransform: 'none', px: 4 }}
              >
                Confirm Booking
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AppointmentForm;
