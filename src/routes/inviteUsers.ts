import { Router } from "express"
import { inviteUsers } from "../controllers/inviteUsersController"
const router = Router()

/**
 * @swagger
 * tags:
 *   name: InviteUsers
 *   description: Invitation d'utilisateurs à une session de quiz
 */

/**
 * @swagger
 * /inviteUsers:
 *   post:
 *     summary: Inviter des utilisateurs à une session
 *     tags: [InviteUsers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               session:
 *                 type: integer
 *                 description: ID de la session de jeu
 *                 example: 123
 *               joueurs:
 *                 type: array
 *                 description: Tableau d'ID d'utilisateurs à inviter
 *                 items:
 *                   type: integer
 *                 example: [1, 2, 3]
 *     responses:
 *       200:
 *         description: Invitation envoyée, on reçoit une request
 *       400:
 *         description: No game requests created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Paramètres requis manquants"
 *       404:
 *         description: Error creating some game requests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Paramètres requis manquants"
 *       500:
 *         description: Error creating game request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erreur interne du serveur"
 */

router.post("/", inviteUsers)

export default router
