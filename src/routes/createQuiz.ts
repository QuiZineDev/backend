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
 *   post:
 *     summary: Créer un nouveau quiz
 *     tags: [CreateQuiz]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Nom du quiz
 *               picture:
 *                 type: string
 *                 description: URL de l'image du quiz
 *               isPrivate:
 *                 type: boolean
 *                 description: Quiz privé ou non
 *     responses:
 *       200:
 *         description: Create new quiz
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