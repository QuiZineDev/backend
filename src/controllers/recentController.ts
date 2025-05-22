import { Request, Response } from "express"
import { getRecentQuizes } from "../models/User"

export const getRecentlyAccssedQuizzes = (req: Request, res: Response) => {
  const recentQuizzes = getRecentQuizes(req.user)
  if (recentQuizzes) {
    res.status(200).json(recentQuizzes)
  } else {
    res.status(404).json({ message: `No recent quizzes found for user ${req.user.username}` })
  }
}