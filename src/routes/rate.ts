import { Router } from "express"
import { rate } from "../controllers/rateController"
const router = Router()

/**
 * @swagger
 * /rate:
 *   post:
 *     tags:
 *       - rate
 *     summary: Rate a quiz
 *     description: Assign a grade to a quiz by a user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idLabelisable:
 *                 type: integer
 *                 example: 1
 *               idUser:
 *                 type: integer
 *                 example: 42
 *               grade:
 *                 type: number
 *                 example: 4.5
 *     responses:
 *       200:
 *         description: Grade created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 newGrade:
 *                   $ref: '#/components/schemas/Grade'
 *   get:
 *     tags:
 *       - rate
 *     summary: Get grades for a quiz
 *     description: Retrieve all grades for a given quiz.
 *     parameters:
 *       - in: query
 *         name: idLabelisable
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the quiz
 *     responses:
 *       200:
 *         description: Grades found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 grades:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Grade'
 *       404:
 *         description: No grades found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.get("/", rate)

export default router