import { Router } from "express"
import { CreateQuiz } from "../controllers/createQuizController"
const router = Router()

/**
 * @swagger
 * tags:
 *   name: CreateQuiz
 *   description: Création de quiz
 */

/**
 * @swagger
 * /createQuiz:
 *   get:
 *     summary: Créer un nouveau quiz
 *     tags: [CreateQuiz]
 *     responses:
 *       200:
 *         description: Quiz créé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Create new quiz"
 */
router.get("/", CreateQuiz)

export default router