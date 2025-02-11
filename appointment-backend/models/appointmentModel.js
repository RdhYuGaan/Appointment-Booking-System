import db from "../config/db.js";

export const getSlots = (callback) => {
  db.query("SELECT * FROM slots WHERE booked = FALSE", callback);
};

export const bookAppointment = (appointment, callback) => {
  const { name, contact, date, time } = appointment;

  db.query(
    "INSERT INTO appointments (name, contact, date, time) VALUES (?, ?, ?, ?)",
    [name, contact, date, time],
    (err, result) => {
      if (err) return callback(err);
      
      db.query("UPDATE slots SET booked = TRUE WHERE date = ? AND time = ?", [date, time]);
      callback(null, result);
    }
  );
};

export const getAppointments = (callback) => {
  db.query("SELECT * FROM appointments", callback);
};

export const cancelAppointment = (id, callback) => {
  db.query(
    "SELECT date, time FROM appointments WHERE id = ?",
    [id],
    (err, result) => {
      if (err || result.length === 0) return callback(err || "Appointment not found");

      const { date, time } = result[0];

      db.query("DELETE FROM appointments WHERE id = ?", [id], (err, result) => {
        if (err) return callback(err);
        
        db.query("UPDATE slots SET booked = FALSE WHERE date = ? AND time = ?", [date, time]);
        callback(null, result);
      });
    }
  );
};
