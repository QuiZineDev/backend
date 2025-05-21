import { Router } from "express"
import { postCreateLabel,addLabelToLabelisable } from "../controllers/labelController"
const router = Router()

/**
 * @swagger
 * tags:
 *   - name: Labels
 *     description: Opérations liées aux labels
 *
 * /new/{name}:
 *   post:
 *     summary: Crée un nouveau label
 *     tags:
 *       - Labels
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Le nom du label à créer
 *     responses:
 *       201:
 *         description: Label créé avec succès
 *       400:
 *         description: Requête invalide
 *
 * /add:
 *   post:
 *     summary: Ajoute un label à un élément labellisable
 *     tags:
 *       - Labels
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               labelId:
 *                 type: string
 *                 description: L'identifiant du label
 *               targetId:
 *                 type: string
 *                 description: L'identifiant de l'élément labellisable
 *     responses:
 *       200:
 *         description: Label ajouté avec succès
 *       400:
 *         description: Requête invalide
 */

router.post("/new/:nameLabel", postCreateLabel)
router.post("/add", addLabelToLabelisable)

export default router