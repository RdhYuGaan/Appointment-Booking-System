import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const AppointmentCard = ({ appointment, onCancel }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{appointment.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {appointment.date} | {appointment.time}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Status: {appointment.status}
        </Typography>
        <Button variant="contained" color="error" onClick={() => onCancel(appointment.id)}>
          Cancel Appointment
        </Button>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
