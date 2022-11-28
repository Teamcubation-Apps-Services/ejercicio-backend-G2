import { NextFunction, Request, Response } from 'express'
import { createBenefit, deleteBenefit, getAllBenefits, updateBenefit } from '../../services/sql/benefitService'

export const getAllBenefitsController = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getAllBenefits(_, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const createBenefitController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, discountPercentage, refoundCap, valideSince, valideTo } = req.body
    if (name && discountPercentage && refoundCap && valideSince && valideTo) await createBenefit(req, res)
    else res.status(400).send('Missing value')
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const updateBenefitController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await updateBenefit(req, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const deleteBenefitController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await deleteBenefit(req, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}
