import { Router } from "express"
import { postQuizResults } from "../controllers/quizResultsController"
const router = Router()

/**
 * @swagger
 * /quizResults:
 *   post:
 *     summary: Poster les résultats d’un quiz
 *     tags: [Quiz]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Résultats enregistrés
 */
router.post("/", postQuizResults)

export default router