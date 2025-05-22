import { Router } from "express"
import { rate,getRate } from "../controllers/rateController"
const router = Router()

/**
 * @swagger
 * tags:
 *   - name: rate
 *     description: Rate management
 * /:
 *   get:
 *     tags:
 *       - rate
 *     summary: Get the current rate
 *     responses:
 *       200:
 *         description: Returns the current rate
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 rate:
 *                   type: number
 *                   example: 4.5
 *       500:
 *         description: Server error
 * /new:
 *   post:
 *     tags:
 *       - rate
 *     summary: Submit a new rate
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idLabelisable:
 *                 type: string
 *                 example: "quiz123"
 *               grade:
 *                 type: number
 *                 example: 5
 *     responses:
 *       200:
 *         description: Rated quiz successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Rated quiz quiz123 with grade 5"
 *                 newGrade:
 *                   type: object
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.get("/", getRate)
router.post("/new", rate)

export default router