import { Request, Response } from "express"

export const CreateQuiz = (req: Request, res: Response) => {
  res.json({ message: `Create new quiz` })
}