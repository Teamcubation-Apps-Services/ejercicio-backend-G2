import { Router } from 'express'
import { getAllClientsController } from '../controllers/clientController'

const clients = Router()

clients.route('/').get(getAllClientsController)

export default clients
