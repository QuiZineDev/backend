import { Request, Response } from "express"
import { createListOfGamesResquests, deleteAllGameRequests, findGameRequestAsSession, findGameRequestAsValidator } from "../models/GameRequest"
import { User } from "../models/User"
import { findQuizById } from "../models/Quiz"
import { getIO } from "../io"

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

  setTimeout(async () => {
    try {
      let s = session
      const remainingRequests = await findGameRequestAsSession(s.id)

      if (remainingRequests.length > 0) {
        await deleteAllGameRequests(s.id) 
        const quiz = await findQuizById(session.id_quiz, u)
        let io = getIO()
        io.of("/api/ws").to("session_" + s.id).emit("gamestart", {
          session: s.id,
          quiz: quiz
        })

        console.log(`[Timeout] Gamestart forcé pour session ${s.id}`)
      }
    } catch (err) {
      console.error(`[Timeout] Erreur dans le timeout de session ${session.id} :`, err)
    }
  }, 2 * 60 * 1000) // 2 minutes
  res.status(200).json(request)
}

export const getGameRequestAsValidator = async (req: Request, res: Response) => {
  const u = req.user as User
  const request = await findGameRequestAsValidator(u.id)
  if (!request) {
    return res.status(500).json({ message: "Error fetching game requests" })
  }
  res.status(200).json(request)
}