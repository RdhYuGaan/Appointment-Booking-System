import mysql from 'mysql2';
import dotenv from 'dotenv'; // Updated import statement for dotenv

dotenv.config(); // Load environment variables from .env file

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

// Function to check MySQL connection
const checkDBConnection = async () => {
  try {
    const connection = await pool.promise().getConnection();
    console.log("✅ MySQL Connected Successfully!");
    connection.release();  // Release the connection back to the pool
  } catch (err) {
    console.error("❌ MySQL Connection Failed:", err.message);
  }
};

// Check the DB connection on server start
checkDBConnection();

export default pool.promise();
