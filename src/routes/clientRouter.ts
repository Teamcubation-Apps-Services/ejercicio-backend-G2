import { Router } from 'express'
import { getAllClientsController, createClientController, updateClientController, deleteClientController } from '../controllers/clientController'

const clients = Router()

clients.route('/').get(getAllClientsController)
clients.route('/').post(createClientController)
clients.route('/:id').put(updateClientController)
clients.route('/:id').delete(deleteClientController)

export default clients
