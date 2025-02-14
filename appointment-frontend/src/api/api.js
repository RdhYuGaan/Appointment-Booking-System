// src/api/api.js
import axios from 'axios';


// Create an axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Make sure this is set in your .env file
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to book an appointment
export const bookAppointment = async (formData) => {
    try {
      // Retrieve the userId from localStorage (or other state management)
      const userId = localStorage.getItem('userId'); // Assuming userId is stored here
      if (!userId) {
        throw new Error('User is not logged in');
      }
  
      const response = await api.post('/appointments/book', {
        userId: userId,  // Dynamic userId
        date: formData.date,
        timeSlot: formData.time,
      });
  
      return response.data; // Returning response message or data
    } catch (error) {
      console.error('Error booking appointment:', error);
      throw error; // Rethrow the error for handling in the component
    }
  };
  
// Login API call
export const login = (email, password) => {
  return api.post('/auth/login', { email, password });
};

// Register API call
export const register = (name, email, password) => {
  return api.post('/auth/register', { name, email, password });
};

// Fetch available slots API call
export const fetchAvailableSlots = async () => {
  try {
    const response = await api.get('/appointments/available'); // Using axios for consistency
    return response.data;
  } catch (error) {
    console.error('Error fetching available slots:', error);
    return [];
  }
};

// Fetch user appointments (Example function)
export const fetchUserAppointments = async (userId) => {
  try {
    const response = await api.get(`/appointments/user/${userId}`); // Modify based on your actual API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return [];
  }
};

// Cancel appointment API call
export const cancelAppointment = async (appointmentId) => {
  try {
    const response = await api.delete(`/appointments/${appointmentId}`); // Modify based on your actual API endpoint
    return response.data;
  } catch (error) {
    console.error('Error canceling appointment:', error);
    throw error;
  }
};

export default api;
