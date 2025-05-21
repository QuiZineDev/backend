import { Router } from "express"
import { getQuizesByName,getUsersByName,getLabelByName } from "../controllers/searchController"
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
router.get("/quiz/:name", getQuizesByName)
router.get("/users/:name", getUsersByName)
router.get("/labels/:name", getLabelByName)

export default router