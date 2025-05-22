import { Router } from "express"
import { getQuizesByName,getUsersByName,getLabelByName } from "../controllers/searchController"
const router = Router()


/**
 * @swagger
 * tags:
 *   - name: Search
 *     description: Search management
 */

/**
 * @swagger
 * /search/quiz/{name}:
 *   get:
 *     tags: [Search]
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
 */
router.get("/quiz/:name", getQuizesByName)

/**
 * @swagger
 * /search/users/{name}:
 *   get:
 *     tags: [Search]
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
 */
router.get("/users/:name", getUsersByName)

/**
 * @swagger
 * /search/labels/{name}:
 *   get:
 *     tags: [Search]
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
router.get("/labels/:name", getLabelByName)

export default router