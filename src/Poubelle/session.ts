import { Router } from "express"
import { joinSession } from "../controllers/sessionController"
const router = Router()

/**
 * @swagger
 * tags:
 *   - name: Session
 *     description: Gestion des sessions de quiz
 */

/**
 * @swagger
 * /session:
 *   get:
 *     summary: Rejoindre une session de quiz
 *     tags: [Session]
 *     parameters:
 *       - in: query
 *         name: idSession
 *         schema:
 *           type: string
 *           format: int32
 *         required: true
 *         description: ID de la session à rejoindre
 *       - in: query
 *         name: idUser
 *         schema:
 *           type: string
 *           format: int32
 *         required: true
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur ajouté à la session
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User 1 joined session 2"
 *       404:
 *         description: Session ou participation non trouvée
 *       500:
 *         description: Erreur lors de l'ajout de la participation
 *     x-codeSamples:
 *       - lang: TypeScript
 *         label: Response Example
 *         source: |
 *           res.status(200).json({ message: `User ${idUser} joined session ${idSession}` })
 */
router.get("/", joinSession)

export default router