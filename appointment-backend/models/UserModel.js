import db from "../config/db.js";

// Function to create a new user
export const createUser = async (name, email, hashedPassword) => {
  const [result] = await db.execute(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );
  return result;
};

// Function to fetch a user by email (for authentication)
export const getUserByEmail = async (email) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};
