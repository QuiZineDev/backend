import { Router } from "express"
import { getQuizzes } from "../controllers/libraryController"
const router = Router()

/**
 * @swagger
 * /library:
 *   get:
 *     summary: Liste tous les quiz publics de la bibliothèque
 *     tags: [Quiz]
 *     responses:
 *       200:
 *         description: Liste des quiz
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get("/", getQuizzes)

export default router