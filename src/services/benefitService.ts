import { Request, Response } from 'express'
import { createBenefitRepository, deleteBenefitRepository, getAllBenefitsRepository, updateBenefitRepository } from '../repository/benefitRepository'

export const getAllBenefits = async (req: Request, res: Response): Promise<void> => {
  const benefits = await getAllBenefitsRepository(req, res)
  res.status(200).json(benefits)
}

export const createBenefit = async (req: Request, res: Response): Promise<void> => {
  const benefit = await createBenefitRepository(req, res)
  res.status(201).json(benefit)
}

export const updateBenefit = async (req: Request, res: Response): Promise<void> => {
  await updateBenefitRepository(req, res)
  res.status(204)
}

export const deleteBenefit = async (req: Request, res: Response): Promise<void> => {
  await deleteBenefitRepository(req, res)
  res.status(204)
}
