// import { Request, Response } from "express"

// export const login = (req: Request, res: Response) => {
//   // Dummy login logic
//   const { username } = req.body
//   res.json({ message: `Logged in as ${username}` })
// }

// export const logout = (_req: Request, res: Response) => {
//   // Dummy logout logic
//   res.json({ message: "Logged out" })
// }

// src/controllers/authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { createUser, findUserByUsername } from '../models/User';

const SALT_ROUNDS = 10;

export async function register(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Missing username or password' });

  // Check if user already exists
  const existingUser = await findUserByUsername(username);
  if (existingUser) return res.status(409).json({ message: 'Username already taken' });

  // Hash password
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  // Create user
  const newUser = await createUser(username, hashedPassword);
  if (!newUser) return res.status(500).json({ message: 'Failed to create user' });

  res.status(201).json({ message: 'User registered successfully' });
}

export async function login(req: Request, res: Response) {
  // Passport handles authentication and attaches user to req.user
  res.json({ message: 'Logged in', user: req.user });
}

export function logout(req: Request, res: Response) {
  req.logout(() => {
    res.json({ message: 'Logged out' });
  });
}
