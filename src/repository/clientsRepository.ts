import { Request, Response } from 'express'
import { PrismaClient as SqlClient, Client } from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllClientRepository = async (req: Request, res: Response): Promise<Client[]> => {
  return await prisma.client.findMany({})
}