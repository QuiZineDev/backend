import { Request, Response } from "express"

export const inviteUsers = (req: Request, res: Response) => {
  // Dummy login logic
  const { idUser } = req.body
  res.json({ message: `Logged in as ${idUser}` })
}