import { Router } from 'express';
import { getAllBenefits, getBenefit, postBenefit} from '../controllers/benefitController'

const benefits = Router();

benefits.route('/').get(getAllBenefits).post(postBenefit);
benefits.route('/:id').get(getBenefit);

export default benefits;