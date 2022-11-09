import { Router } from 'express'
import { getAllMovementDataController, getMovementDataController, postMovementDataController, updateMovementDataController, deleteMovementDataController } from '../controllers/movementDataController'

const movementData = Router()

movementData.route('/').get(getAllMovementDataController).post(postMovementDataController)
movementData.route('/:id').get(getMovementDataController).put(updateMovementDataController).delete(deleteMovementDataController)

export default movementData