import { Request, Response } from 'express'
import { PrismaClient as SqlClient, ClientBalance } from '../../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllClientBalancesRepository = async (req: Request, res: Response): Promise<ClientBalance[] | Error> => {
  try {
    const { clientId } = req.params
    return await prisma.clientBalance.findMany({
      where: {
        clientId: Number(clientId),
        isActive: true
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const getClientBalanceRepository = async (req: Request, res: Response): Promise<ClientBalance | Error | null> => {
  try {
    const { clientId, coinId } = req.params
    const balance = await prisma.clientBalance.findUnique({
      where: {
        clientId_coinId: {
          clientId: Number(clientId),
          coinId: Number(coinId)
        }
      }
    })
    if (balance !== null && balance.isActive) {
      return balance
    } else {
      return new Error('Balance not found')
    }
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const createClientBalanceRepository = async (req: Request, res: Response): Promise<ClientBalance | Error> => {
  try {
    const { clientId, coinId, balance } = req.body
    return await prisma.clientBalance.upsert({ 
      where: {
        clientId_coinId: {
          clientId,
          coinId,
        }
     },
     update: {
      isActive: true,
      balance
     },
     create: {
      clientId,
      coinId,
      balance
     }
    })
  } catch (e: any) {
    return new Error(e.meta.cause || 'Invalid clientId/coinId pair')
  }
}

export const updateClientBalanceRepository = async (req: Request, res: Response): Promise<ClientBalance | Error> => {
  try {
    const { clientId, coinId } = req.params
    const { balance } = req.body
    const clientBalance = await prisma.clientBalance.update({
      where: {
        clientId_coinId: {
          clientId: Number(clientId),
          coinId: Number(coinId)
        }
      },
      data: {
        balance: Number(balance)
      }
    })
    if (clientBalance !== null && clientBalance.isActive) return clientBalance
    else return new Error('Fail to update. Balance not found')
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const deleteClientBalanceRepository = async (req: Request, res: Response): Promise<ClientBalance | Error> => {
  try {
    const { clientId, coinId } = req.params
    const clientBalance = await prisma.clientBalance.update({
      where: {
        clientId_coinId: {
          clientId: Number(clientId),
          coinId: Number(coinId)
        }
      },
      data: {
        isActive: false
      }
    })
    if (clientBalance !== null) return clientBalance
    else return new Error('Fail to delete. Balance not found')
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}
