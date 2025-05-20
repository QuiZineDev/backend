import { Request, Response } from "express"

export const getThings = (req: Request, res: Response) => {
  // Dummy login logic
  const { idUser } = req.body
  res.json({ message: `Logged in as ${idUser}` })
}