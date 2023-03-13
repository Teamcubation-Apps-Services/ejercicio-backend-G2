import { Router } from 'express'
import { getAllMovementDataController, getMovementDataController, postMovementDataController, updateMovementDataController, deleteMovementDataController } from '../../controllers/sql/movementDataController'

const movementData = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    MovementDataBody:
 *      type: object
 *      properties:
 *        clientId:
 *          type: number
 *        movementId:
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
 *    MovementDataResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        clientId:
 *          type: number
 *        movementId:
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
 * /sql/movement-data:
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
 *                $ref: '#/components/schemas/MovementDataResponse'
 *  post:
 *    summary: Create a new movementData
 *    tags: [movementsData]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/MovementDataBody'
 *    responses:
 *      201:
 *        description: Created movementData
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MovementDataResponse'
 */
/**
 * @swagger
 * /sql/movement-data/{id}:
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
 *            $ref: '#/components/schemas/MovementDataBody'
 *    responses:
 *      200:
 *        description: Updated movementData
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/MovementDataResponse'
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
 *                $ref: '#/components/schemas/MovementDataResponse'
 *            example:
 *              clientId:
 *              movementId:
 *              senderWalletAddress:
 *              receiverWalletAddress:
 *              coinId:
 *              amount:
 *              fee:
 */

movementData.route('/').get(getAllMovementDataController).post(postMovementDataController)
movementData.route('/:id').get(getMovementDataController).put(updateMovementDataController).delete(deleteMovementDataController)

export default movementData
