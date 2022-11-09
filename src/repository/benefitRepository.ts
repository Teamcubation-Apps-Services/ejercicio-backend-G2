import { Request, Response } from 'express'
import { PrismaClient as SqlClient, Benefits } from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllBenefitsRepository = async (req: Request, res: Response): Promise<Benefits[]> => {
  return await prisma.benefits.findMany({})
}

export const createBenefitRepository = async (req: Request, res: Response): Promise<Benefits> => {
  const { name, discountPercentage, refoundCap, valideSince, valideTo } = req.body
  return await prisma.benefits.create({
    data: {
      name,
      discountPercentage,
      refoundCap,
      valideSince: new Date(valideSince),
      valideTo: new Date(valideTo)
    }
  })
}

export const updateBenefitRepository = async (req: Request, res: Response): Promise<Benefits> => {
  const data = req.body
  const { id } = req.params
  return await prisma.benefits.update({
    where: {
      id: Number(id)
    },
    data
  })
}

export const deleteBenefitRepository = async (req: Request, res: Response): Promise<Benefits> => {
  const { id } = req.params
  return await prisma.benefits.update({
    where: {
      id: Number(id)
    },
    data: {
      isActive: false
    }
  })
}
