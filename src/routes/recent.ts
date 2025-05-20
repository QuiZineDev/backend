import { Router } from "express"
import { getRecentlyAccssedQuizzes } from "../controllers/recentController"

const router = Router()

/**
 * @swagger
 * /recent:
 *   get:
 *     summary: Quiz récemment consultés par l’utilisateur
 *     tags: [Quiz]
 *     responses:
 *       200:
 *         description: Liste des quiz récents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 */
router.get("/", getRecentlyAccssedQuizzes)

export default router