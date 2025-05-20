import { Request, Response } from "express"
import { findSessionById, createSession } from "../models/Session"
import { createParticipation, findParticipationByIdSession, addParticipation } from "../models/Participation"

export const joinSession = (req: Request, res: Response) => {
    const { idSession, idUser } = req.body
    const session = findSessionById(idSession)
    if (!session) {
        return res.status(404).json({ message: "Session not found" })
    }

    const participation = findParticipationByIdSession(idSession)
    if (!participation) {
        return res.status(404).json({ message: "Participation not found" })
    }
    const newParticipation = addParticipation(idSession, idUser)
    if (!newParticipation) {
        return res.status(500).json({ message: "Failed to add participation" })
    }

    res.json({ message: `User ${idUser} joined session ${idSession}` })
}

export const createNewSession = (req: Request, res: Response) => {
    const { idSession, idUser } = req.body
    if (!idSession || !idUser) {
        return res.status(400).json({ message: "Missing required fields" })
    }

    const session = createSession(idSession, idUser)
    if (!session) {
        return res.status(500).json({ message: "Failed to create session" })
    }
    const participation = createParticipation(idSession, idUser)
    if (!participation) {
        return res.status(500).json({ message: "Failed to create participation" })
    }

    res.json({ message: `Session ${idSession} created by user ${idUser}` })
}