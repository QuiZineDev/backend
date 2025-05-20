import { Request, Response } from "express"

export const getUsers = (_req: Request, res: Response) => {
  // Dummy data for example
  res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }])
}

export const createUser = (req: Request, res: Response) => {
  // Dummy create logic
  const user = req.body
  res.status(201).json({ message: "User created", user })
}