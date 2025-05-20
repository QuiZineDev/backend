import { Request, Response } from "express"

export const getFriends = (req: Request, res: Response) => {
  // Dummy login logic
  res.json({ message: `Get friends of the current user` })
}