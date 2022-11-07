import { NextFunction, Request, Response } from 'express'
import { createBenefit, deleteBenefit, getAllBenefits, updateBenefit } from '../services/benefitService'

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
    await createBenefit(req, res)
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
