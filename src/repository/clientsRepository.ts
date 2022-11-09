import { Request, Response } from 'express'
import { PrismaClient as SqlClient, Client } from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllClientRepository = async (req: Request, res: Response): Promise<Client[]> => {
  return await prisma.client.findMany({})
}

export const createClientRepository = async (req: Request, res: Response): Promise<Client> => {
  const { id, dni, firstName, lastName, email, phoneNumber } = req.body
  return await prisma.client.create({
    data: {
      id,
      dni,
      firstName,
      lastName,
      email,
      phoneNumber
    }
  })
}

export const updateClientRepository = async (req: Request, res: Response): Promise<Client> => {
  const data = req.body
  const { id } = req.params
  return await prisma.client.update({
    where: {
      id: Number(id)
    },
    data
  })
}

export const deleteClientRepository = async (req: Request, res: Response): Promise<Client> => {
  const { id } = req.params
  return await prisma.client.update({
    where: {
      id: Number(id)
    },
    data: {
      isActive: false
    }
  })
}
