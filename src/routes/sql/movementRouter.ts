import { Router } from 'express'
import { getAllMovementsController, getMovementController, createMovementController, updateMovementController, deleteMovementController } from '../../controllers/sql/movementController'

const movements = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    MovementBody:
 *      type: object
 *      properties:
 *        type:
 *          type: string
 *    MovementResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        type:
 *          type: string
 *        isActive:
 *          type: boolean
 */
/**
  * @swagger
  * tags:
  *   name: movements
 */
/**
 * @swagger
 * /sql/movements:
 *  get:
 *    summary: List all movements
 *    tags: [movements]
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/MovementResponse'
 *  post:
 *    summary: Create a new movement
 *    tags: [movements]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/MovementBody'
 *    responses:
 *      201:
 *        description: Created movement
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MovementResponse'
 */
/**
 * @swagger
 * /sql/movements/{id}:
 *  put:
 *    summary: Update a movement
 *    tags: [movements]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the movement to update
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/MovementBody'
 *    responses:
 *      200:
 *        description: Updated movement
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/MovementResponse'
 *  delete:
 *    summary: Delete a movement
 *    tags: [movements]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the movement to delete
 *    responses:
 *      200:
 *        description: Deleted movement
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/MovementResponse'
 *            example:
 *                id: 4
 *                type: transfer
 *                isActive: false
 */

movements.route('/').get(getAllMovementsController)
movements.route('/:id').get(getMovementController)
movements.route('/').post(createMovementController)
movements.route('/:id').put(updateMovementController)
movements.route('/:id').delete(deleteMovementController)

export default movements
