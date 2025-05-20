import { Router } from "express"
import { getRecentlyAccssedQuizzes } from "../controllers/recentController"

const router = Router()

/**
 * @swagger
 * tags:
 *   name: Recent
 *   description: Quiz récemment consultés
 */

/**
 * @swagger
 * /recent:
 *   get:
 *     summary: Récupérer les quiz récemment consultés
 *     tags: [Recent]
 *     responses:
 *       200:
 *         description: Quiz récemment consultés
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "recently accessed quizzes for the current user"
 */
router.get("/", getRecentlyAccssedQuizzes)

export default router