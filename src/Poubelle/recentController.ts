import { Request, Response } from "express"

export const getRecentlyAccssedQuizzes = (req: Request, res: Response) => {
  // Dummy data for example
  res.json([{message:"recently accessed quizzes for the current user"}])
}