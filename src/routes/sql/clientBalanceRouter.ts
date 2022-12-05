import { RequestHandler, Router } from 'express'
import { deleteClientBalanceController, getAllClientBalancesController, getClientBalanceController, updateClientBalanceController } from '../../controllers/sql/clientBalanceController'
import { createClientBalance } from '../../services/sql/clientBalanceService'

const clientBalance = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    ClientBalance:
 *      type: object
 *      properties:
 *        clientId:
 *          type: number
 *        coinId:
 *          type: number
 *        balance:
 *          type: string
 *        isActive:
 *          type: boolean
 */
/**
  * @swagger
  * tags:
  *   name: clientBalances
 */
/**
 * @swagger
 * /sql/balances/{clientId}:
 *  get:
 *    summary: List of the active balances for the given clientId
 *    tags: [clientBalances]
 *    parameters:
 *      - in: path
 *        name: clientId
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the client
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/ClientBalance'
 * /sql/balances/{clientId}/{coinId}:
 *  get:
 *    summary: List of the active balances for the given clientId and coinId
 *    tags: [clientBalances]
 *    parameters:
 *      - in: path
 *        name: clientId
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the client
 *      - in: path
 *        name: coinId
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the coin
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/ClientBalance'
 *  put:
 *    summary: Update a balance
 *    tags: [clientBalances]
 *    parameters:
 *      - in: path
 *        name: clientId
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the client
 *      - in: path
 *        name: coinId
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the coin
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              balance:
 *                type: number
 *    responses:
 *      200:
 *        description: Updated balance
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/ClientBalance'
 *  delete:
 *    summary: Delete a balance
 *    tags: [clientBalances]
 *    parameters:
 *      - in: path
 *        name: clientId
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the client
 *      - in: path
 *        name: coinId
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id of the coin
 *    responses:
 *      200:
 *        description: Deleted balance
 *        content:
 *          application/json:
 *            schema:
 *                $ref: '#/components/schemas/ClientBalance'
 *            example:
 *                clientId: 1
 *                coinId: 2
 *                balance: "100"
 *                isActive: false
 * /sql/balances:
 *  post:
 *    summary: Create a new balance
 *    tags: [clientBalances]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              clientId:
 *                type: number
 *              coinId:
 *                type: number
 *              balance:
 *                type: number
 *    responses:
 *      201:
 *        description: Created balance
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClientBalance'
 */

clientBalance.get('/:clientId', getAllClientBalancesController as RequestHandler)
clientBalance.get('/:clientId/:coinId', getClientBalanceController as RequestHandler)
clientBalance.put('/:clientId/:coinId', updateClientBalanceController as RequestHandler)
clientBalance.delete('/:clientId/:coinId', deleteClientBalanceController as RequestHandler)
clientBalance.post('/', createClientBalance as RequestHandler)

export default clientBalance
