import { Request, Response } from "express"
import { findQuizById,findQuizzesByName, allAccessibleQuizOf } from "../models/Quiz"


export const getQuizes = (req: Request, res: Response) => {
  const idQuiz = Number(req.params.idQuiz) as (number | null)
  if (!idQuiz) {
    return res.status(400).json({ error: "idQuiz is required" })
  }
  findQuizById(idQuiz, req.user).then((quiz) => {
    if (quiz) {
      res.status(200).json(quiz)
    } else if(!quiz){
      res.status(404).json({ error: "Quiz not found" })
    }
  })
}

export const allAccessibleQuiz = (req: Request, res: Response) => {
  const idQuiz = Number(req.params.idQuiz) as (number | null)
  if (!idQuiz) {
    return res.status(400).json({ error: "idQuiz is required" })
  }
  allAccessibleQuizOf(req.user).then((quizzes) => {
    if (quizzes) {
      res.status(200).json(quizzes)
    } else if(!quizzes){
      res.status(404).json({ error: "Quizzes not found" })
    }
  })
}