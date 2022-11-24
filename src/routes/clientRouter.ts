import { Router } from 'express'
import { getAllClientsController, getClientController, createClientController, updateClientController, deleteClientController } from '../controllers/clientController'

const clients = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    ClientBody:
 *      type: object
 *      properties:
 *        dni:
 *          type: number
 *        firstName:
 *          type: string
 *        lastName:
 *          type: string
 *        email:
 *          type: string
 *        phoneNumber:
 *          type: number
 *    ClientResponse:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        dni:
 *          type: number
 *        firstName:
 *          type: string
 *        lastName:
 *          type: string
 *        email:
 *          type: string
 *        phoneNumber:
 *          type: number
 *        isActive:
 *          type: boolean
 */
/**
  * @swagger
  * tags:
  *   name: clients
 */
/**
 * @swagger
 * /clients:
 *  get:
 *    summary: List all clients
 *    tags: [clients]
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/ClientResponse'
 *  post:
 *    summary: Create a new client
 *    tags: [clients]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ClientBody'
 *    responses:
 *      201:
 *        description: Created client
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClientResponse'
 */
/**
 * @swagger
 * /clients/{id}:
 *  put:
 *    summary: Update a client
 *    tags: [clients]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the client to update
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ClientBody'
 *    responses:
 *      200:
 *        description: Updated client
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/ClientResponse'
 *  delete:
 *    summary: Delete a client
 *    tags: [clients]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the client to delete
 *    responses:
 *      200:
 *        description: Deleted client
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/ClientResponse'
 *            example:
 *                id: 4
 *                dni: 20202020
 *                fistName: estoy probando
 *                lastName: swagger
 *                email: estoyprobando@swagger.com
 *                phoneNumber: 12345678
 *                isActive: false
 */

clients.route('/').get(getAllClientsController)
clients.route('/:id').get(getClientController)
clients.route('/').post(createClientController)
clients.route('/:id').put(updateClientController)
clients.route('/:id').delete(deleteClientController)

export default clients
