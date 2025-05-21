import { Request, Response } from "express"
import { getHistory } from "../models/User"

export const returnHistory = (req: Request, res: Response) => {
  const currentIdUser = req.user.id
  const history = getHistory(Number(currentIdUser))
  if (history) {
    res.status(200).json({ message: `History for user ${req.user.username}`, history })
  } else {
    res.status(404).json({ message: `No history found for user ${currentIdUser}` })
  }
}