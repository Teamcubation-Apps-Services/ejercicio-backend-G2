import { Request, Response } from 'express'
import { PrismaClient as SqlClient, Movement } from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllMovementsRepository = async (req: Request, res: Response): Promise<Movement[]> => {
  return await prisma.movement.findMany({})
}
export const createMovementRepository = async (req: Request, res: Response): Promise<Movement> => {
  const { id, type } = req.body
  return await prisma.movement.create({
    data: {
      id,
      type
    }
  })
}

export const updateMovementRepository = async (req: Request, res: Response): Promise<Movement> => {
  const data = req.body
  const { id } = req.params
  return await prisma.movement.update({
    where: {
      id: Number(id)
    },
    data
  })
}

export const deleteMovementRepository = async (req: Request, res: Response): Promise<Movement> => {
  const { id } = req.params
  return await prisma.movement.update({
    where: {
      id: Number(id)
    },
    data: {
      isActive: false
    }
  })
}
