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
router.post("/accept/:idRequestor", acceptFriend)
router.post("/refuse/:idRequestor", refuseFriend)
router.get("/", getFriends)

export default router