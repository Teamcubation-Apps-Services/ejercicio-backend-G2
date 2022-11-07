import { Router } from 'express'
import { getAllBenefitsController } from '../controllers/benefitController'

const benefits = Router()

benefits.route('/').get(getAllBenefitsController)

export default benefits
