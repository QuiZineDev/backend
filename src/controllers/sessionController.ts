import { Request, Response } from "express"
import { findSessionById, createSession } from "../models/Session"
import { createParticipation, findParticipationByIdSession, addParticipation, deleteParticipation } from "../models/Participation"
import { User } from "../models/User"
import { findQuizById } from "../models/Quiz"

export const joinSession = (req: Request, res: Response) => {
    const { idSession, idUser } = req.body
    const session = findSessionById(idSession)
    if (!session) {
        return res.status(400).json({ message: "Session not found" })
    }

    const participation = findParticipationByIdSession(idSession)
    if (!participation) {
        return res.status(404).json({ message: "Participation not found" })
    }
    const newParticipation = addParticipation(idSession, idUser)
    if (!newParticipation) {
        return res.status(500).json({ message: "Failed to add participation" })
    }

    res.status(200).json({ message: `User ${idUser} joined session ${idSession}` })
}

export const createNewGameSession = (req: Request, res: Response) => {
    const idQuiz = req.params.idQuiz as number | undefined;
    const creator = req.user as User | undefined;
    if (!creator || !idQuiz) {
        return res.status(400).json({ message: "Missing required fields" })
    }

    createSession(idQuiz, creator.id).then((session)=>{
        if (!session) {
            return res.status(500).json({ message: "Failed to create session" })
        }
        createParticipation(session.id, creator.id).then((participation)=>{
            if (!participation) {
                return res.status(501).json({ message: "Failed to create participation" })
            }
            findQuizById(idQuiz, creator).then((q)=>{
                res.status(201).json({quiz: q, sessionId:session.id})
            })
            //res.json({ message: `Session ${session} created by user ${creator}` })
        })

        
    })

    
}

export const quitSessionPrematurely = (req: Request, res: Response) => {
    const idSession = req.params.idSession as string | undefined;
    const user = req.user as User | undefined;

    if (!idSession || !user) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    findParticipationByIdSession(Number(idSession)).then((participations) => {
        let p = participations.find((e)=>e.id_user===user.id)

        if (!p) {
            return res.status(404).json({ message: "Participation not found or unauthorized" });
        }

        deleteParticipation(p.id).then((p)=>{
            res.status(200).json(p)
        })
    }).catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Error finding participation" });
    });
};

export const findSessionByIdController = (req: Request, res: Response) => {
    let idSession = Number(req.params.idSession)
    if(!idSession){
        res.status(500).json({ message: "no id given" });
    }

    findSessionById(idSession).then((s)=>{
        res.status(200).json(s)
    })
}