import { Request, Response } from 'express'
import { createBenefitRepository, deleteBenefitRepository, getAllBenefitsRepository, updateBenefitRepository } from '../../repository/sql/benefitRepository'

export const getAllBenefits = async (req: Request, res: Response): Promise<void> => {
  const benefits = await getAllBenefitsRepository(req, res)
  if (benefits instanceof Error) {
    res.status(400).json({ message: benefits.message })
  } else {
    res.status(200).json(benefits)
  }
}

export const createBenefit = async (req: Request, res: Response): Promise<void> => {
  const benefit = await createBenefitRepository(req, res)
  if (benefit instanceof Error) {
    res.status(400).json({ message: benefit.message })
  } else {
    res.status(201).json(benefit)
  }
}

export const updateBenefit = async (req: Request, res: Response): Promise<void> => {
  const updated = await updateBenefitRepository(req, res)
  if (updated instanceof Error) {
    res.status(400).json({ message: updated.message })
  } else {
    res.status(200).json(updated)
  }
}

export const deleteBenefit = async (req: Request, res: Response): Promise<void> => {
  const deleted = await deleteBenefitRepository(req, res)
  if (deleted instanceof Error) {
    res.status(400).json({ message: deleted.message })
  } else {
    res.status(200).json(deleted)
  }
}
