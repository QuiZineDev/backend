import { Request, Response } from "express"
import { findQuizById } from "../models/Quiz"


export const getQuizes = (req: Request, res: Response) => {
  const idQuiz = Number(req.params.idQuiz) as (number | null)
  if (!idQuiz) {
    return res.status(400).json({ error: "idQuiz is required" })
  }
  findQuizById(idQuiz).then((quiz) => {
    if (quiz) {
      res.json(quiz)
    } else if(!quiz){
      res.status(404).json({ error: "Quiz not found" })
    }
  })
}