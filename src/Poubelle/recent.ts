import { Router } from "express"
import { getRecentlyAccssedQuizzes } from "./recentController"

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Recent
 * description: Gestion des quiz récemment consultés
 */

/**
 * @swagger
 * /recent:
 *   get:
 *     summary: Récupérer les quiz récemment consultés
 *     tags: [Quiz]
 *     responses:
 *       200:
 *         description: Liste des quiz récemment consultés
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.get("/", getRecentlyAccssedQuizzes)

export default router