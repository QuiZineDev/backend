import { Request, Response } from "express"
import { createGrade, getGrade } from "../models/Grade"   
import { User } from "../models/User"

export const rate = (req: Request, res: Response) => {
    const { idLabelisable, grade } = req.body
    const newGrade = createGrade(idLabelisable, (req.user as User).id, grade)
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

