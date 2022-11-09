import { Request, Response } from 'express'
import { PrismaClient as SqlClient, Benefits } from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

const ERRORS = {
  BAD_REQ: new Error('Bad Request')
}

export const getAllBenefitsRepository = async (req: Request, res: Response): Promise<Benefits[] | Error> => {
  try {
    return await prisma.benefits.findMany({
      where: {
        isActive: true
      }
    })
  } catch (e) {
    return ERRORS.BAD_REQ
  }
}

export const createBenefitRepository = async (req: Request, res: Response): Promise<Benefits | Error> => {
  const { name, discountPercentage, refoundCap, valideSince, valideTo } = req.body
  try {
    return await prisma.benefits.create({
      data: {
        name,
        discountPercentage,
        refoundCap,
        valideSince: new Date(valideSince),
        valideTo: new Date(valideTo)
      }
    })
  } catch (e) {
    return ERRORS.BAD_REQ
  }
}

export const updateBenefitRepository = async (req: Request, res: Response): Promise<Benefits | Error> => {
  try {
    const data = req.body
    const { id } = req.params
    return await prisma.benefits.update({
      where: {
        id: Number(id)
      },
      data
    })
  } catch (e) {
    return ERRORS.BAD_REQ
  }
}

export const deleteBenefitRepository = async (req: Request, res: Response): Promise<Benefits | Error> => {
  try {
    const { id } = req.params
    return await prisma.benefits.update({
      where: {
        id: Number(id)
      },
      data: {
        isActive: false
      }
    })
  } catch (e) {
    return ERRORS.BAD_REQ
  }
}
