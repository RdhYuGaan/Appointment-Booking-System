import React from 'react';
import { Card, CardContent, Typography, Button, Box, Chip } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'confirmed': return 'success';
    case 'pending': return 'warning';
    case 'canceled': return 'error';
    default: return 'default';
  }
};

const AppointmentCard = ({ appointment, onCancel }) => {
  return (
    <Card sx={{ 
      marginBottom: 2, 
      borderRadius: 3, 
      boxShadow: 3, 
      padding: 2, 
      borderLeft: `6px solid ${getStatusColor(appointment.status) === 'success' ? '#2e7d32' : '#d32f2f'}` 
    }}>
      <CardContent>
        {/* Title and Date */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            {appointment.title}
          </Typography>
          <Chip label={appointment.status} color={getStatusColor(appointment.status)} />
        </Box>
        
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
           {appointment.date} |  {appointment.time}
        </Typography>

        {/* Cancel Button */}
        <Box mt={2} textAlign="right">
          <Button 
            variant="contained" 
            color="error" 
            startIcon={<CancelIcon />} 
            onClick={() => onCancel(appointment.id)}
          >
            Cancel Appointment
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
