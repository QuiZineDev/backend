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
/**
 * @swagger
 * tags:
 *   name: Rate
 *   description: Notation des quiz
 */

/**
 * @swagger
 * /rate:
 *   get:
 *     summary: Noter un quiz
 *     tags: [Rate]
 *     parameters:
 *       - in: query
 *         name: idLabelisable
 *         schema:
 *           type: integer
 *         description: ID du quiz à noter
 *       - in: query
 *         name: idUser
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *       - in: query
 *         name: grade
 *         schema:
 *           type: number
 *         description: Note attribuée
 *     responses:
 *       200:
 *         description: Quiz noté
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Rated quiz 1 with grade 5"
 */
router.get("/", rate)

export default router