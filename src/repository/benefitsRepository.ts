import { Request, Response } from 'express'
import { PrismaClient as SqlClient, Benefits } from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllBenefitsRepository = async (req: Request, res: Response): Promise<Benefits[]> => {
  return await prisma.benefits.findMany({})
}
