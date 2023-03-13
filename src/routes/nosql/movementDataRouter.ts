import { Router } from 'express'
import {
  getAllMovementDataController,
  getMovementDataController,
  postMovementDataController,
  updateMovementDataController,
  deleteMovementDataController
} from '../../controllers/nosql/movementDataController'

const movementData = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    MongoMovementDataBody:
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
 *    MongoMovementDataResponse:
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
 * /nosql/movement-data:
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
 *                $ref: '#/components/schemas/MongoMovementDataResponse'
 *  post:
 *    summary: Create a new movementData
 *    tags: [movementsData]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/MongoMovementDataBody'
 *    responses:
 *      201:
 *        description: Created movementData
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MongoMovementDataResponse'
 */
/**
 * @swagger
 * /nosql/movement-data/{id}:
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
 *            $ref: '#/components/schemas/MongoMovementDataBody'
 *    responses:
 *      200:
 *        description: Updated movementData
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/MongoMovementDataResponse'
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
 *                $ref: '#/components/schemas/MongoMovementDataResponse'
 *            example:
 *              clientId:
 *              movementId:
 *              senderWalletAddress:
 *              receiverWalletAddress:
 *              coinId:
 *              amount:
 *              fee:
 */

movementData
  .route('/')
  .get(getAllMovementDataController)
  .post(postMovementDataController)
movementData
  .route('/:id')
  .get(getMovementDataController)
  .put(updateMovementDataController)
  .delete(deleteMovementDataController)

export default movementData
