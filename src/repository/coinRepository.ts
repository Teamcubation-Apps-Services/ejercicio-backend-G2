import { Request, Response } from 'express'
import { PrismaClient as SqlClient, Coin } from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllCoinRepository = async (req: Request, res: Response): Promise<Coin[]> => {
  return await prisma.coin.findMany({})
}

export const getCoinRepository = async (req: Request, res: Response) : Promise<Coin[]> => {
  const id = Number(req.params.id)

  return await prisma.coin.findMany({where: {id}})
}

export const postCoinRepository = async (req: Request, res: Response) : Promise<Coin> => {
  const { name, description, quotationReference, annualPerformance } = req.body
  
  return await prisma.coin.create({
    data: {
      name,
      description,
      quotationReference,
      annualPerformance
    }
  })
}

export const updateCoinRepository = async (req: Request, res: Response) : Promise<Coin> => {
  const data = req.body
  const id = Number(req.params.id)

  return await prisma.coin.update({
    where: {
      id
    },
    data
  })
}

export const deleteCoinRepository = async (req: Request, res: Response) : Promise<Coin> => {
  const id = Number(req.params.id)
  console.log("Se eliminó piola");

  return await prisma.coin.delete({
    where: {
      id
    }
  })
}