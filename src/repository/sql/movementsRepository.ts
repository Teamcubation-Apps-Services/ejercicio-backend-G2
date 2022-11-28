import { Request, Response } from 'express'
import { PrismaClient as SqlClient, Movement } from '../../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllMovementsRepository = async (req: Request, res: Response): Promise<Movement[] | Error> => {
  try {
    return await prisma.movement.findMany({
      where: {
        isActive: true
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const getMovementRepository = async (req: Request, res: Response): Promise<Movement[] | Error> => {
  try {
    const id = Number(req.params.id)

    return await prisma.movement.findMany({ where: { id } })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const createMovementRepository = async (req: Request, res: Response): Promise<Movement | Error> => {
  const { id, type } = req.body
  try {
    return await prisma.movement.create({
      data: {
        id,
        type
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const updateMovementRepository = async (req: Request, res: Response): Promise<Movement | Error> => {
  try {
    const data = req.body
    const { id } = req.params
    const movement = await prisma.movement.findUnique({
      where: {
        id: Number(id)
      }
    })
    if (movement !== null && movement.isActive) {
      return await prisma.movement.update({
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

export const deleteMovementRepository = async (req: Request, res: Response): Promise<Movement | Error> => {
  try {
    const { id } = req.params
    const movement = await prisma.movement.findUnique({
      where: {
        id: Number(id)
      }
    })
    if (movement !== null) {
      if (movement.isActive) {
        return await prisma.movement.update({
          where: {
            id: Number(id)
          },
          data: {
            isActive: false
          }
        })
      } else {
        return new Error('Movement already deleted')
      }
    } else {
      return new Error('Record not found')
    }
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}
