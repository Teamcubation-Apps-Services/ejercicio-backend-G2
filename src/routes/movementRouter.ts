import { Router } from 'express'
import { getAllMovementsController } from '../controllers/movementController'

const movements = Router()

movements.route('/').get(getAllMovementsController)

export default movements
