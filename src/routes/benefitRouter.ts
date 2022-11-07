import { Router } from 'express'
import { createBenefitController, deleteBenefitController, getAllBenefitsController, updateBenefitController } from '../controllers/benefitController'

const benefits = Router()

benefits.get('/', getAllBenefitsController)
benefits.post('/', createBenefitController)
benefits.put('/:id', updateBenefitController)
benefits.delete('/:id', deleteBenefitController)

export default benefits
