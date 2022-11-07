import { Request, Response } from 'express'
import { getAllBenefitsRepository } from '../repository/benefitsRepository'

export const getAllBenefits = async (req: Request, res: Response): Promise<void> => {
  const benefits = await getAllBenefitsRepository(req, res)
  res.status(200).json(benefits)
}
