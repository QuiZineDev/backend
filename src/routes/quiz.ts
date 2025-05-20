import { Router } from "express"
import { getQuizes } from "../controllers/quizController"
const router = Router()

/**
 * @swagger
 * /quiz/{idQuiz}:
 *   get:
 *     summary: Détail d’un quiz par ID
 *     tags: [Quiz]
 *     parameters:
 *       - in: path
 *         name: idQuiz
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du quiz
 *     responses:
 *       200:
 *         description: Détail du quiz
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: idQuiz manquant
 *       404:
 *         description: Quiz non trouvé
 */
router.get("/:idQuiz", getQuizes)

export default router