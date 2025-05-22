import { Request, Response } from "express"
import { getRecentHistory } from "../models/User"
import{ User } from "../types/core/User"


export const getProfile = async (req: Request, res: Response) => {
  const u = req.user as User
  res.status(200).json({ User: u.username, historique: await getRecentHistory(Number(u.id)) })
}