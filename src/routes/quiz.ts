import { Router } from "express"
import { getQuizes, allAccessibleQuiz } from "../controllers/quizController"
const router = Router()

/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: Gestion des quiz
 */

/**
 * @swagger
 * /quiz/{idQuiz}:
 *   get:
 *     summary: Récupérer un quiz par son ID
 *     tags: [Quiz]
 *     parameters:
 *       - in: path
 *         name: idQuiz
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du quiz
 *         example: 7
 *     responses:
 *       200:
 *         description: Quiz trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizWithQuestionsWithChoices'
 *       400:
 *         description: idQuiz manquant ou invalide
 *       404:
 *         description: Quiz non trouvé
 */
router.get("/:idQuiz", getQuizes)

/**
 * @swagger
 * /quiz:
 *   get:
 *     summary: Récupérer tous les quiz accessibles par l'utilisateur
 *     tags: [Quiz]
 *     responses:
 *       200:
 *         description: Liste des quiz accessibles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quiz'
 */

router.get("/", allAccessibleQuiz)
export default router