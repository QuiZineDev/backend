import { Request, Response } from "express"
import { createGrade, getGrade } from "../models/Grade"   

export const rate = (req: Request, res: Response) => {
    const { idLabelisable, idUser, grade } = req.body
    const newGrade = createGrade(idLabelisable, idUser, grade)
    res.json({ message: `Rated quiz ${idLabelisable} with grade ${grade}`, newGrade })
    }

export const getRate = async (req: Request, res: Response) => {
    const { idLabelisable } = req.query
    const grades = await getGrade(Number(idLabelisable))
    if (grades) {
        res.json({ message: `Grades for quiz ${idLabelisable}`, grades })
    } else {
        res.status(404).json({ message: `No grades found for quiz ${idLabelisable}` })
    }
}

