import { RequestHandler, Router } from 'express'
import { deleteClientBalanceController, getAllClientBalancesController, getClientBalanceController, updateClientBalanceController } from '../controllers/clientBalanceController'
import { createClientBalance } from '../services/clientBalanceService'

const clientBalance = Router()

clientBalance.get('/:clientId', getAllClientBalancesController as RequestHandler)
clientBalance.get('/:clientId/:coinId', getClientBalanceController as RequestHandler)
clientBalance.post('/', createClientBalance as RequestHandler)
clientBalance.put('/:clientId/:coinId', updateClientBalanceController as RequestHandler)
clientBalance.delete('/:clientId/:coinId', deleteClientBalanceController as RequestHandler)

export default clientBalance
