import { Router } from "express"
import { getQuizzes } from "../controllers/searchController"
const router = Router()

/**
 * @swagger
 * tags:
 *   name: Search
 *   description: Recherche de quiz
 */

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Rechercher des quiz
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Terme de recherche
 *     responses:
 *       200:
 *         description: Résultats de la recherche
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logged in as 1"
 */
router.get("/", getQuizzes)

export default router