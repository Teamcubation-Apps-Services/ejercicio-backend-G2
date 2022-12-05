import { Request, Response } from 'express'
import { PrismaClient as SqlClient, Coin } from '../../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllCoinRepository = async (req: Request, res: Response): Promise<Coin[] | Error> => {
  try {
    return await prisma.coin.findMany({
      where: {
        isActive: true
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const getCoinRepository = async (req: Request, res: Response): Promise<Coin[] | Error> => {
  try {
    const id = Number(req.params.id)

    return await prisma.coin.findMany({ where: { id } })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const postCoinRepository = async (req: Request, res: Response): Promise<Coin | Error> => {
  try {
    const { name, description, quotationReference, annualPerformance } = req.body

    return await prisma.coin.create({
      data: {
        name,
        description,
        quotationReference,
        annualPerformance
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const updateCoinRepository = async (req: Request, res: Response): Promise<Coin | Error> => {
  try {
    const data = req.body
    const id = Number(req.params.id)
    const coin = await prisma.coin.findUnique({ where: { id } })
    if (coin === null) {
      return new Error('Record not found.')
    }
    if (!coin.isActive) {
      return new Error('Invalid id.')
    }
    return await prisma.coin.update({
      where: {
        id: Number(id)
      },
      data
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const deleteCoinRepository = async (req: Request, res: Response): Promise<Coin | Error> => {
  try {
    const { id } = req.params
    const coin = await prisma.coin.findUnique({
      where: {
        id: Number(id)
      }
    })
    if (coin === null) {
      return new Error('Record not found')
    }
    if (!coin.isActive) {
      return new Error('Coin already deleted')
    }
    return await prisma.coin.update({
      where: {
        id: Number(id)
      },
      data: {
        isActive: false
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}
