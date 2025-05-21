import { Router } from "express"
import { inviteUsers } from "../controllers/inviteUsersController"
import { createNewGameSession } from "../controllers/sessionController"
const router = Router()

/**
 * @swagger
 * tags:
 *   name: Game
 *   description: Gestion des sessions de quiz
 */

/**
 * @swagger
 * /api/game/gamerequest:
 *   post:
 *     tags: [Game]
 *     summary: Invite users to a game
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               session:
 *                 type: number
 *                 description: ID of the game session
 *               joueurs:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: Array of user IDs to invite
 *     responses:
 *       200:
 *         description: Users invited successfully, you received a game request
 *       400:
 *         description: No game requests created
 *       404:
 *         description: Error creating some game requests
 *       500:
 *         description: Error creating game request
 */
router.post("/gamerequest", inviteUsers)

/**
 * @swagger
 * /api/game/create/session/{idQuiz}:
 *   post:
 *     tags: [Game]
 *     summary: Create a new game session
 *     parameters:
 *       - in: path
 *         name: idQuiz
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the quiz
 *     responses:
 *       201:
 *         description: Game session created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sessionId:
 *                   type: number
 *                 quiz:
 *                   type: quiz object
 *       400:
 *         description: Invalid request Missing required fields
 *       500:
 *        description: Error creating game session
 *       501:
 *        description: Failed to create participation
 */
router.post("/create/session/:idQuiz", createNewGameSession)

export default router