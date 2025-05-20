import { Request, Response } from "express"

export const rate = (req: Request, res: Response) => {
  res.json({ message: `rate a labelisabel element` })
}