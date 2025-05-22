import { Request, Response } from "express"

export const postQuizResults = (req: Request, res: Response) => {
  // Dummy login logic
  res.json({ message: `post quiz results` })
}