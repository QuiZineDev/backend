import { Request, Response } from "express"
import { createGameRequest } from "../models/GameRequest"

export const inviteUsers = (req: Request, res: Response) => {
  const { idSession, idRequestor, idValidator } = req.body
  if (!idSession || !idRequestor || !idValidator) {
    return res.status(400).json({ message: "Missing required fields" })
  }
  const request = createGameRequest(idSession, idRequestor, idValidator)
  res.json(request)
}