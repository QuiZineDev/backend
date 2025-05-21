import { Request, Response } from "express"
import { createListOfGamesResquests } from "../models/GameRequest"
import { User } from "../models/User"

export const inviteUsers = async (req: Request, res: Response) => {
  const { session, joueurs } = req.body
  const u = req.user as User
  const request = await createListOfGamesResquests(session, u.id, joueurs)
  if (!request) {
    return res.status(500).json({ message: "Error creating game request" })
  }
  if (request.length === 0) {
    return res.status(400).json({ message: "No game requests created" })
  }
  if (request.includes(false)) {
    return res.status(404).json({ message: "Error creating some game requests" })
  }
  res.status(200).json(request)
}