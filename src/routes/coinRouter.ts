import { Router } from 'express'
import { deleteCoinController, getAllCoinsController, getCoinController, postCoinController, updateCoinController } from '../controllers/coinController'

const coins = Router()

coins.route('/').get(getAllCoinsController).post(postCoinController)
coins.route('/:id').get(getCoinController).put(updateCoinController).delete(deleteCoinController)

export default coins