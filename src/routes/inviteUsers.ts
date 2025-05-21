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
/**
 * @swagger
 * tags:
 *   name: InviteUsers
 *   description: Invitation d'utilisateurs à une session de quiz
 */

/**
 * @swagger
 * /inviteUsers:
 *   get:
 *     summary: Inviter des utilisateurs à une session
 *     tags: [InviteUsers]
 *     parameters:
 *       - in: query
 *         name: idSession
 *         schema:
 *           type: integer
 *         description: ID de la session
 *       - in: query
 *         name: idRequestor
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur demandeur
 *       - in: query
 *         name: idValidator
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur invité
 *     responses:
 *       200:
 *         description: Invitation envoyée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invitation envoyée"
 */
router.get("/", inviteUsers)

export default router