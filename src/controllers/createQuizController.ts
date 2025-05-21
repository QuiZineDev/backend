import { Request, Response } from "express"
import { Quiz, createQuiz} from "../models/Quiz"

export const CreateQuiz = (req: Request, res: Response) => {
  const userId = req.user.id
  const content = req.body
  createQuiz(content.nom, content.picture, content.isprivate, userId)
  res.status(200).json({ message: `Create new quiz` })
}