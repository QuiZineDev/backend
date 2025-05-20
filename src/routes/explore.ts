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
router.get("/", getThings)

export default router