import { Router } from "express"
import { getFriends, askFriend, acceptFriend, refuseFriend } from "../controllers/friendsController"
const router = Router()

/**
 * @swagger
 * tags:
 *   - name: Friends
 *     description: Gestion des amis
 */

/**
 * @swagger
 * /friends/ask/{idValidator}:
 *   post:
 *     summary: Demander un utilisateur en ami
 *     tags: [Friends]
 *     parameters:
 *       - in: path
 *         name: idValidator
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l’utilisateur à inviter
 *     responses:
 *       200:
 *         description: Demande envoyée
 *       400:
 *         description: Erreur de paramètre ou déjà demandé
 *       404:
 *         description: Utilisateur non trouvé
 *       408:
 *         description: Already Amis
 */

/**
 * @swagger
 * /friends/accept/{idRequestor}:
 *   post:
 *     summary: Accepter une demande d'ami
 *     tags: [Friends]
 *     parameters:
 *       - in: path
 *         name: idRequestor
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l’utilisateur qui a demandé
 *     responses:
 *       200:
 *         description: Demande acceptée
 *       400:
 *         description: idRequestor is required
 */

/**
 * @swagger
 * /friends/refuse/{idRequestor}:
 *   post:
 *     summary: Refuser une demande d'ami
 *     tags: [Friends]
 *     parameters:
 *       - in: path
 *         name: idRequestor
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l’utilisateur qui a demandé
 *     responses:
 *       200:
 *         description: Friend request deleted
 */

/**
 * @swagger
 * /friends:
 *   get:
 *     summary: Récupérer la liste des amis
 *     tags: [Friends]
 *     responses:
 *       200:
 *         description: Liste des amis
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logged in as 1"
 *                 friends:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       username:
 *                         type: string
 *                         example: "JohnDoe"
 *                       status:
 *                         type: string
 *                         example: "accepted"
 *                       createdAt:
 *                         type: string
 *                         example: "2023-10-01T12:00:00Z"
 *                       updatedAt:
 *                         type: string
 *                         example: "2023-10-01T12:00:00Z"
 *       404:
 *         description: No friends found
 */

router.post("/ask/:idValidator", askFriend)
router.post("/accept/:idRequestor", acceptFriend)
router.post("/refuse/:idRequestor", refuseFriend)
router.get("/", getFriends)

export default router