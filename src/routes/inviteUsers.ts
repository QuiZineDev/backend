import { Router } from "express"
import { inviteUsers } from "../controllers/inviteUsersController"
const router = Router()

/**
 * @swagger
 * /inviteUser:
 *   get:
 *     summary: Inviter un utilisateur à une session de quiz
 *     tags: [Session]
 *     parameters:
 *       - in: query
 *         name: idSession
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la session
 *       - in: query
 *         name: idRequestor
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de l’invitant
 *       - in: query
 *         name: idValidator
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de l’invité
 *     responses:
 *       200:
 *         description: Invitation envoyée
 *       400:
 *         description: Paramètres manquants
 */
router.get("/", inviteUsers)

export default router