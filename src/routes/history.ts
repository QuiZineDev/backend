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
 *     summary: Récupère l'historique des quiz du joueur connecté
 *     tags: [History]
 *     responses:
 *       200:
 *         description: Liste de l'historique
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Historique récupéré avec succès"
 *                 history:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Quiz'
 *       404:
 *         description: Aucun historique trouvé
 */
router.get("/", returnHistory)

export default router