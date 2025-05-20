import { Request, Response } from "express"

export const login = (req: Request, res: Response) => {
  // Dummy login logic
  const { username } = req.body
  res.json({ message: `Logged in as ${username}` })
}

export const logout = (_req: Request, res: Response) => {
  // Dummy logout logic
  res.json({ message: "Logged out" })
}