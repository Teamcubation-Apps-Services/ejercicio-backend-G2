import { Request, Response } from 'express'
import { PrismaClient as SqlClient, Movement } from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllMovementsRepository = async (req: Request, res: Response): Promise<Movement[]> => {
  return await prisma.movement.findMany({})
}
