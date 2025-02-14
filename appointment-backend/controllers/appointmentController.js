import { createAppointment, getAppointmentsByUser, deleteAppointment } from "../models/AppointmentModel.js";

// Example of backend API endpoint to handle booking
export const bookAppointment = async (req, res) => {
    const { userId, date, timeSlot } = req.body;
  
    try {
      // Ensure valid input data (optional validation)
      if (!userId || !date || !timeSlot) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      // Create the appointment in the database (use your logic for creating appointments)
      await createAppointment(userId, date, timeSlot);
  
      // Respond with a success message
      res.json({ message: 'Appointment booked successfully!' });
    } catch (error) {
      console.error('Error in booking appointment:', error);
      res.status(500).json({ error: 'Error booking appointment' });
    }
  };
  

  export const getAppointments = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Validate userId
      if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
      }
  
      // Fetch user appointments from database
      const appointments = await getAppointmentsByUser(userId);
  
      // Check if appointments exist
      if (!appointments || appointments.length === 0) {
        return res.status(404).json({ message: "No appointments found" });
      }
  
      // Send response
      res.json(appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  };
  
export const cancelAppointment = async (req, res) => {
  const { appointmentId } = req.params;
  await deleteAppointment(appointmentId);
  res.json({ message: "Appointment cancelled successfully!" });
};
