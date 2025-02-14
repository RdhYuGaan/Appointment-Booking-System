import db from "../config/db.js";

export const createAppointment = async (userId, date, timeSlot) => {
  const [result] = await db.execute(
    "INSERT INTO appointments (user_id, date, time_slot) VALUES (?, ?, ?)",
    [userId, date, timeSlot]
  );
  return result;
};

export const getAppointmentsByUser = async (userId) => {
  const [rows] = await db.execute("SELECT * FROM appointments WHERE user_id = ?", [userId]);
  return rows;
};

export const deleteAppointment = async (appointmentId) => {
  const [result] = await db.execute("DELETE FROM appointments WHERE id = ?", [appointmentId]);
  return result;
};
