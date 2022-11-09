import { Request, Response } from 'express'
import { PrismaClient as SqlClient, ClientBalance } from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllClientBalancesRepository = async (req: Request, res: Response): Promise<ClientBalance[]> => {
  const { clientId } = req.params
  const balances = await prisma.clientBalance.findMany({
    where: {
      clientId: Number(clientId)
    }
  })
  return balances
}

export const getClientBalanceRepository = async (req: Request, res: Response): Promise<ClientBalance | null> => {
  const { clientId, coinId } = req.params
  const balance = await prisma.clientBalance.findUnique({
    where: {
      clientId_coinId: {
        clientId: Number(clientId),
        coinId: Number(coinId)
      }
    }
  })
  return balance
}

export const createClientBalanceRepository = async (req: Request, res: Response): Promise<ClientBalance> => {
  const data = req.body
  return await prisma.clientBalance.create({ data })
}

export const updateClientBalanceRepository = async (req: Request, res: Response): Promise<ClientBalance> => {
  const { clientId, coinId } = req.params
  const { balance } = req.body
  const updated = await prisma.clientBalance.update({
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
  return updated
}

export const deleteClientBalanceRepository = async (req: Request, res: Response): Promise<ClientBalance> => {
  const { clientId, coinId } = req.params
  const deleted = await prisma.clientBalance.update({
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
  return deleted
}
