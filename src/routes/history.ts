import { Router } from "express"
import { returnHistory } from "../controllers/historyController"
const router = Router()

/**
 * @swagger
 * /history:
 *   get:
 *     summary: Historique de l’utilisateur
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Historique de quiz ou d’actions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get("/", returnHistory)

export default router