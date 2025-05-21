import { Router } from "express"
import { getThings } from "../controllers/exploreController"
const router = Router()

/**
 * @swagger
 * /explore:
 *   get:
 *     summary: Découvrir des quiz ou thèmes
 *     tags: [Quiz]
 *     responses:
 *       200:
 *         description: Liste ou suggestions de quiz/thèmes
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
 *   name: Explore
 *   description: Découverte de nouveaux quiz
 */

/**
 * @swagger
 * /explore:
 *   get:
 *     summary: Explorer de nouveaux quiz
 *     tags: [Explore]
 *     responses:
 *       200:
 *         description: Quiz découverts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logged in as 1"
 */
router.get("/", getThings)

export default router