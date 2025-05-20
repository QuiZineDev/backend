import { Router } from "express"
import { getFriends,askFriend,acceptFriend,refuseFriend } from "../controllers/friendsController"
const router = Router()

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
 */
router.post("/ask/:idValidator", askFriend)

/**
 * @swagger
 * /friends/accept/{idRequestor}:
 *   post:
 *     summary: Accepter une demande d’ami
 *     tags: [Friends]
 *     parameters:
 *       - in: path
 *         name: idRequestor
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du demandeur
 *     responses:
 *       200:
 *         description: Ami accepté
 *       400:
 *         description: Erreur de paramètre
 */
router.post("/accept/:idRequestor", acceptFriend)

/**
 * @swagger
 * /friends/refuse/{idRequestor}:
 *   post:
 *     summary: Refuser une demande d’ami
 *     tags: [Friends]
 *     parameters:
 *       - in: path
 *         name: idRequestor
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du demandeur
 *     responses:
 *       200:
 *         description: Demande refusée
 */
router.post("/refuse/:idRequestor", refuseFriend)

/**
 * @swagger
 * /friends:
 *   get:
 *     summary: Liste des amis de l’utilisateur
 *     tags: [Friends]
 *     responses:
 *       200:
 *         description: Liste des amis
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", getFriends)

export default router