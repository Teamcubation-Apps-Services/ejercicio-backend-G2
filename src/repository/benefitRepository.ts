import { Request, Response } from 'express'
import { PrismaClient as SqlClient, Benefits } from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllBenefitsRepository = async (req: Request, res: Response): Promise<Benefits[] | Error> => {
  try {
    return await prisma.benefits.findMany({
      where: {
        isActive: true
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
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
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const updateBenefitRepository = async (req: Request, res: Response): Promise<Benefits | Error> => {
  try {
    const data = req.body
    const { id } = req.params
    const benefit = await prisma.benefits.findUnique({
      where: {
        id: Number(id)
      }
    })
    if (benefit !== null && benefit.isActive) {
      return await prisma.benefits.update({
        where: {
          id: Number(id)
        },
        data
      })
    } else {
      return new Error('Invalid id')
    }
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const deleteBenefitRepository = async (req: Request, res: Response): Promise<Benefits | Error> => {
  try {
    const { id } = req.params
    const benefit = await prisma.benefits.findUnique({
      where: {
        id: Number(id)
      },
    })
    if (benefit !== null) {
      if (benefit.isActive) {
        return await prisma.benefits.update({
          where: {
            id: Number(id)
          },
          data: {
            isActive: false
          }
        })
      } else {
        return new Error('Benefit already deleted')
      }
    } else {
      return new Error('Record not found')
    }
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}
