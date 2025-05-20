import { Router } from "express"
import { getFriends,askFriend,acceptFriend,refuseFriend } from "../controllers/friendsController"
const router = Router()

/**
 * @swagger
 * tags:
 *   name: Friends
 *   description: Gestion des amis
 */

/**
 * @swagger
 * /friends/ask/{idValidator}:
 *   post:
 *     summary: Demander en ami un utilisateur
 *     tags: [Friends]
 *     parameters:
 *       - in: path
 *         name: idValidator
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur à ajouter
 *         example: 2
 *     responses:
 *       200:
 *         description: Demande envoyée ou déjà existante
 *       400:
 *         description: Erreur de validation
 *       404:
 *         description: Utilisateur non trouvé
 */
router.post("/ask/:idValidator", askFriend)

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
 *         description: ID de l'utilisateur demandeur
 *         example: 1
 *     responses:
 *       200:
 *         description: Demande acceptée
 *       400:
 *         description: Erreur de validation
 */
router.post("/accept/:idRequestor", acceptFriend)

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
 *         description: ID de l'utilisateur demandeur
 *         example: 1
 *     responses:
 *       200:
 *         description: Demande refusée
 */
router.post("/refuse/:idRequestor", refuseFriend)

/**
 * @swagger
 * /friends:
 *   get:
 *     summary: Récupérer la liste des amis de l'utilisateur courant
 *     tags: [Friends]
 *     responses:
 *       200:
 *         description: Liste des amis
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Amis'
 *       404:
 *         description: Aucun ami trouvé
 */
router.get("/", getFriends)

export default router