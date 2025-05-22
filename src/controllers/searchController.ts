import { Request, Response } from "express"
import { findQuizzesByName } from "../models/Quiz"
import { findUserByUsername,allUsers } from "../models/User"
import { findLabelByName } from "../models/Label"

export const getQuizesByName = (req: Request, res: Response) => {
  findQuizzesByName(req.params.name).then((quizzes) => {
    if (quizzes) {
      res.status(200).json(quizzes)
    } else {
      res.status(404).json({ error: "Quiz not found" })
    }
  })
}

export const getUsersByName = (req: Request, res: Response) => {
  findUserByUsername(req.params.name).then((user) => {
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ error: "User not found" })
    }
  })
}

export const getLabelByName = (req: Request, res: Response) => {
  findLabelByName(req.params.name).then((label) => {
    if (label) {
      res.status(200).json(label)
    } else {
      res.status(404).json({ error: "Label not found" })
    }
  })
}

export const getAllUsers = (req: Request, res: Response) => {
  allUsers().then((allUsersData) => {
    if (allUsersData) {
      return res.status(200).json(allUsersData);
    } else {
      return res.status(404).json({ error: "No users found" });
    }
  })
}