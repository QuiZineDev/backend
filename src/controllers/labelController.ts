import { Request, Response } from "express"
import { createLabel,findLabelByName,labelise } from "../models/Label"


export const postCreateLabel = async (req: Request, res: Response) => {
  await createLabel(req.params.nameLabel)
  res.json({message:`Label ${req.params.nameLabel} created`})
}

export const getLabelByName = async (req: Request, res: Response) => {
  const { name } = req.body.name
  const label = await findLabelByName(name)
  if (label) {
    res.json({ label })
  } else {
    res.status(404).json({ message: "Label not found" })
  }
}

export const addLabelToLabelisable = async (req: Request, res: Response) => {
    const label = req.body.id_label
    const labelisable = req.body.id_labelisable
    const nn_label_labelisable = await labelise(label, labelisable)
    if (nn_label_labelisable) {
        res.json({ message: "Label added to labelisable" })
    } else {
        res.status(404).json({ message: "Label or labelisable not found" })
    }
}
