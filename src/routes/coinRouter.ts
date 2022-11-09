import { Router } from 'express'
import { getAllCoinsController, getCoinController, postCoinController, updateCoinController, deleteCoinController } from '../controllers/coinController'

const coins = Router()

coins.route('/').get(getAllCoinsController).post(postCoinController)
coins.route('/:id').get(getCoinController).put(updateCoinController).delete(deleteCoinController)

export default coins