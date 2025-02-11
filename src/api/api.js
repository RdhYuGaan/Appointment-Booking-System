import axios from "axios";

const API_URL = "http://localhost:5000"; // Backend URL

export const getSlots = () => axios.get(`${API_URL}/slots`);
export const bookAppointment = (data) => axios.post(`${API_URL}/appointments`, data);
export const getAppointments = () => axios.get(`${API_URL}/appointments`);
export const cancelAppointment = (id) => axios.delete(`${API_URL}/appointments/${id}`);
