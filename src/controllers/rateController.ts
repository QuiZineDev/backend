import { Request, Response } from "express"
import { createGrade } from "../models/Grade"   

export const rate = (req: Request, res: Response) => {
    const { idLabelisable, idUser, grade } = req.body
    const newGrade = createGrade(idLabelisable, idUser, grade)
    res.json({ message: `Rated quiz ${idLabelisable} with grade ${grade}`, newGrade })
    }

export const getRate = (req: Request, res: Response) => {
    const { idLabelisable } = req.params
    res.json({ message: `Rating for quiz ${idLabelisable}`, rating: 4.5 })
}

