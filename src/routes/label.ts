import { Router } from "express"
import { postCreateLabel,addLabelToLabelisable } from "../controllers/labelController"
const router = Router()

/**
 * @swagger
 * tags:
 *   - name: Labels
 *     description: Opérations liées aux labels
 */

/**
 * @swagger
 * /new/:{nameLabel}:
 *   post:
 * 
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
 */
router.post("/new/:nameLabel", postCreateLabel)

/**
 * @swagger
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
 *               id_label:
 *                 type: number
 *                 description: L'identifiant du label
 *               id_labelisable:
 *                 type: number
 *                 description: L'identifiant de l'élément labellisable
 *     responses:
 *       200:
 *         description: Label ajouté avec succès
 *       404:
 *         description: Label or labelisable not found
 */
router.post("/add", addLabelToLabelisable)

export default router