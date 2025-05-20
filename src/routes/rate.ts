import { Router } from "express"
import { rate } from "../controllers/rateController"
const router = Router()

/**
 * @swagger
 * /rate:
 *   get:
 *     summary: Noter un élément labelisable (quiz, question, etc.)
 *     tags: [Quiz]
 *     parameters:
 *       - in: query
 *         name: id_labelisable
 *         schema:
 *           type: integer
 *         description: ID de l’élément à noter
 *       - in: query
 *         name: grade
 *         schema:
 *           type: number
 *         description: Note attribuée
 *     responses:
 *       200:
 *         description: Note enregistrée
 */
router.get("/", rate)

export default router