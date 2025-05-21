import { Router } from "express"
import { CreateQuiz } from "../controllers/createQuizController"
const router = Router()

/**
 * @swagger
 * /createQuiz:
 *   get:
 *     summary: Créer un nouveau quiz (formulaire ou structure)
 *     tags: [Quiz]
 *     responses:
 *       200:
 *         description: Création de quiz possible
 */
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
router.post("/", CreateQuiz)

export default router