import { Router } from 'express'
import { getAllMovementsController, createMovementController, updateMovementController, deleteMovementController } from '../controllers/movementController'

const movements = Router()

movements.route('/').get(getAllMovementsController)
movements.route('/').post(createMovementController)
movements.route('/:id').put(updateMovementController)
movements.route('/:id').delete(deleteMovementController)


export default movements
