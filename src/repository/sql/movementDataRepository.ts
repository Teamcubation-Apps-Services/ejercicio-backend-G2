import { Request, Response } from 'express'
import {
  PrismaClient as SqlClient,
  MovementData
} from '../../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllMovmentDataRepository = async (
  req: Request,
  res: Response
): Promise<MovementData[] | Error> => {
  try {
    return await prisma.movementData.findMany({
      where: {
        isActive: true
      },
      include: {
        coin: {
          select: {
            name: true
          }
        },
        movement: {
          select: {
            type: true
          }
        }
      }
    })
  } catch (e: any) {
    console.log(e)
    return new Error(e.meta.cause)
  }
}

export const getMovementDataRepository = async (
  req: Request,
  res: Response
): Promise<MovementData[] | Error> => {
  try {
    const id = Number(req.params.id)

    return await prisma.movementData.findMany({
      where: {
        clientId: id,
        isActive: true
      },
      include: {
        coin: {
          select: {
            name: true
          }
        },
        movement: {
          select: {
            type: true
          }
        }
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const postMovementDataRepository = async (
  req: Request,
  res: Response
): Promise<MovementData | Error> => {
  try {
    const {
      clientId,
      movementId,
      senderWalletAddress,
      receiverWalletAddress,
      coinId,
      amount,
      fee
    } = req.body

    return await prisma.movementData.create({
      data: {
        date: new Date(),
        clientId,
        movementId,
        senderWalletAddress,
        receiverWalletAddress,
        coinId,
        amount,
        fee
      }
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const updateMovementDataRepository = async (
  req: Request,
  res: Response
): Promise<MovementData | Error> => {
  try {
    const data = req.body
    const id = Number(req.params.id)
    const movementData = await prisma.movementData.findUnique({
      where: { id }
    })
    if (movementData === null) {
      return new Error('Record not found.')
    }
    if (!movementData.isActive) {
      return new Error('Invalid id')
    }
    return await prisma.movementData.update({
      where: {
        id: Number(id)
      },
      data
    })
  } catch (e: any) {
    return new Error(e.meta.cause)
  }
}

export const deleteMovementDataRepository = async (
  req: Request,
  res: Response
): Promise<MovementData | Error> => {
  try {
    const { id } = req.params
    const movementData = await prisma.movementData.findUnique({
      where: {
        id: Number(id)
      }
    })
    if (movementData === null) {
      return new Error('Record not found')
    }
    if (!movementData.isActive) {
      return new Error('Movement data already deleted')
    }
    return await prisma.movementData.update({
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
