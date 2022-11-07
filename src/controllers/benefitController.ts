import { NextFunction, Request, Response } from 'express'
import { getAllBenefits } from '../services/benefitService'

export const getAllBenefitsController = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getAllBenefits(_, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}
