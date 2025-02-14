
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, getUserByEmail } from "../models/UserModel.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(name, email, hashedPassword);
  res.json({ message: "User registered successfully!" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, userId: user.id });
};
