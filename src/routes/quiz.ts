import { Router } from "express"
import { getQuizes, allAccessibleQuiz,postQuizWithQuestionsWithChoices } from "../controllers/quizController"
const router = Router()

/**
 * @swagger
 * tags:
 *   name: Quiz
 *   description: Gestion des quiz
 */

/**
 * @swagger
 * /quiz/{idQuiz}:
 *   get:
 *     summary: Récupérer un quiz par son ID
 *     tags: [Quiz]
 *     parameters:
 *       - in: path
 *         name: idQuiz
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du quiz
 *         example: 7
 *     responses:
 *       200:
 *         description: Quiz trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizWithQuestionsWithChoices'
 *       400:
 *         description: idQuiz manquant ou invalide
 *       404:
 *         description: Quiz non trouvé
 */
router.get("/:idQuiz", getQuizes)

/**
 * @swagger
 * /quiz:
 *   get:
 *     summary: Récupérer tous les quiz accessibles par l'utilisateur
 *     tags: [Quiz]
 *     responses:
 *       200:
 *         description: Liste des quiz accessibles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quiz'
 *       404:
 *         description: Quiz non trouvés
 */

router.get("/", allAccessibleQuiz)
/**
 * @swagger
 * /quiz/new:
 *   post:
 *     summary: Créer un nouveau quiz avec ses questions et choix
 *     tags: [Quiz]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Nom du quiz
 *               picture:
 *                 type: string
 *                 nullable: true
 *                 description: URL de l'image du quiz
 *               private:
 *                 type: boolean
 *                 description: Quiz privé ou non
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Intitulé de la question
 *                     picture:
 *                       type: string
 *                       nullable: true
 *                       description: URL de l'image de la question
 *                     duration:
 *                       type: integer
 *                       description: Durée de la question en secondes
 *                     private:
 *                       type: boolean
 *                       description: Question privée ou non
 *                     choices:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           content:
 *                             type: string
 *                             description: Texte du choix
 *     responses:
 *       201:
 *         description: Quiz créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizWithQuestionsWithChoices'
 *       400:
 *         description: Données invalides ou manquantes
 *       401:
 *         description: Non authentifié
 *       500:
 *         description: Erreur serveur
 */
router.post("/new", postQuizWithQuestionsWithChoices)
export default router