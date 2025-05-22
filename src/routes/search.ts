import { Router } from "express"
import { getQuizesByName,getUsersByName,getLabelByName } from "../controllers/searchController"
const router = Router()

/**
 * @swagger
 * /search/quiz/{name}:
 *   get:
 *     tags: [search]
 *     summary: Search quizzes by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the quiz to search for
 *     responses:
 *       200:
 *         description: List of quizzes matching the name
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quiz'
 *       404:
 *         description: No quizzes found
 *
 * /search/users/{name}:
 *   get:
 *     tags: [search]
 *     summary: Search users by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the user to search for
 *     responses:
 *       200:
 *         description: List of users matching the name
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: No users found
 *
 * /search/labels/{name}:
 *   get:
 *     tags: [search]
 *     summary: Search labels by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the label to search for
 *     responses:
 *       200:
 *         description: List of labels matching the name
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Label'
 *       404:
 *         description: No labels found
 */
router.get("/quiz/:name", getQuizesByName)
router.get("/users/:name", getUsersByName)
router.get("/labels/:name", getLabelByName)

export default router