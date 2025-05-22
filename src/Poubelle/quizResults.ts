import { Router } from "express"
import { postQuizResults } from "./quizResultsController"
const router = Router()

/**
 * @swagger
 * tags:
 *   name: QuizResults
 *   description: Soumission des résultats de quiz
 */

/**
 * @swagger
 * /quizResults:
 *   post:
 *     summary: Soumettre les résultats d'un quiz
 *     tags: [QuizResults]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idQuiz:
 *                 type: integer
 *                 example: 7
 *               score:
 *                 type: number
 *                 example: 8.5
 *     responses:
 *       200:
 *         description: Résultats enregistrés
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "post quiz results"
 */
router.post("/", postQuizResults)

export default router