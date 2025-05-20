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
router.get("/", CreateQuiz)

export default router