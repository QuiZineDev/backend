import { Router } from "express"
import { returnHistory } from "../controllers/historyController"
const router = Router()

/**
 * @swagger
 * tags:
 *   name: History
 *   description: Historique des parties et quiz joués
 */

/**
 * @swagger
 * /history:
 *   get:
 *     summary: Récupérer l'historique de l'utilisateur
 *     tags: [History]
 *     responses:
 *       200:
 *         description: Historique récupéré
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logged in as 1"
 */
router.get("/", returnHistory)

export default router