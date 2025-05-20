import { Router } from "express"
import { getQuizzes } from "../controllers/searchController"
const router = Router()

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Recherche de quiz
 *     tags: [Quiz]
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
 */
router.get("/", getQuizzes)

export default router