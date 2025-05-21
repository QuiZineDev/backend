import { Request, Response } from "express"
import { findQuizzesByName } from "../models/Quiz"
import { findUserByUsername } from "../models/User"
import { findLabelByName } from "../models/Label"

export const getQuizesByName = (req: Request, res: Response) => {
  findQuizzesByName(req.params.name).then((quizzes) => {
    if (quizzes) {
      res.json(quizzes)
    } else {
      res.status(404).json({ error: "Quiz not found" })
    }
  })
}

export const getUsersByName = (req: Request, res: Response) => {
  findUserByUsername(req.params.name).then((user) => {
    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ error: "User not found" })
    }
  })
}

export const getLabelByName = (req: Request, res: Response) => {
  findLabelByName(req.params.name).then((label) => {
    if (label) {
      res.json(label)
    } else {
      res.status(404).json({ error: "Label not found" })
    }
  })
}