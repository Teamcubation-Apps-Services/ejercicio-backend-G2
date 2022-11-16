import { Router } from 'express'
import { getAllMovementDataController, getMovementDataController, postMovementDataController, updateMovementDataController, deleteMovementDataController } from '../controllers/movementDataController'

const movementData = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    BenefitBody:
 *      type: object
 *      properties:
 *        clientId:
 *          type: number
 *        senderWalletAddress:
 *          type: string
 *        receiverWalletAddress:
 *          type: string
 *        coinId:
 *          type: number
 *        amount:
 *          type: number
 *        fee:
 *          type: number
 *    BenefitResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        clientId:
 *          type: number
 *        senderWalletAddress:
 *          type: string
 *        receiverWalletAddress:
 *          type: string
 *        coinId:
 *          type: number
 *        amount:
 *          type: number
 *        fee:
 *          type: number
 *        isActive:
 *          type: boolean
 */
/**
  * @swagger
  * tags:
  *   name: movementsData
 */
/**
 * @swagger
 * /movementsData:
 *  get:
 *    summary: List all movementsData
 *    tags: [movementsData]
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/BenefitResponse'
 *  post:
 *    summary: Create a new movementData
 *    tags: [movementsData]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/BenefitBody'
 *    responses:
 *      201:
 *        description: Created movementData
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/BenefitResponse'
 */
/**
 * @swagger
 * /movementsData/{id}:
 *  put:
 *    summary: Update a movementData
 *    tags: [movementsData]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the movementData to update
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/BenefitBody'
 *    responses:
 *      200:
 *        description: Updated movementData
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/BenefitResponse'
 *  delete:
 *    summary: Delete a movementData
 *    tags: [movementsData]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the movementData to delete
 *    responses:
 *      200:
 *        description: Deleted movementData
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/BenefitResponse'
 *            example:
 *                id: 4
 *                name: beneficio super
 *                discountPercentage: "30"
 *                refoundCap: "100"
 *                valideSince: 2022-11-03T00:00:00.000Z
 *                valideTo: 2023-11-03T00:00:00.000Z
 *                isActive: false
 */

movementData.route('/').get(getAllMovementDataController).post(postMovementDataController)
movementData.route('/:id').get(getMovementDataController).put(updateMovementDataController).delete(deleteMovementDataController)

export default movementData