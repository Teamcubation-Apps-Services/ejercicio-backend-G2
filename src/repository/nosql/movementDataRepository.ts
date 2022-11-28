import { Request, Response } from 'express'
import { PrismaClient as SqlClient, MovementData } from '../../../prisma/generated/nosql-client'

const prisma = new SqlClient()

export const getAllMovmentDataRepository = async (req: Request, res: Response): Promise<MovementData[] | Error> => {
  try {
    return await prisma.movementData.findMany({
      where: {
        isActive: true
      }
    })
  } catch (e: any) {
    return new Error(e.meta?.cause)
  }
}

export const getMovementDataRepository = async (req: Request, res: Response) : Promise<MovementData[] | Error> => {
  try {
    const id = req.params.id

    return await prisma.movementData.findMany({where: {id}})
  } catch (e: any) {
    return new Error(e.meta?.cause)
  }
}

export const postMovementDataRepository = async (req: Request, res: Response) : Promise<MovementData | Error> => {
  try {
    const { clientId, type, senderWalletAddress, receiverWalletAddress, coinId, amount, fee } = req.body

    return await prisma.movementData.create({
      data: {
        date: new Date(),
        clientId,
        type,
        senderWalletAddress,
        receiverWalletAddress,
        coinId,
        amount,
        fee
      }
    })
  } catch (e: any) {
    return new Error(e)
  }
}

export const updateMovementDataRepository = async (req: Request, res: Response) : Promise<MovementData | Error> => {
  try {
    const data = req.body
    const id = req.params.id
    const movementData = await prisma.movementData.findUnique({where: {id}})
    if (movementData !== null && movementData.isActive) {
      return await prisma.movementData.update({
        where: {
          id
        },
        data
      })
    } else {
      return new Error('Invalid id')
    }
  } catch (e: any) {
    return new Error(e.meta?.cause)
  }
}

export const deleteMovementDataRepository = async (req: Request, res: Response) : Promise<MovementData | Error> => {
  try {
    const { id } = req.params
    const movementData = await prisma.movementData.findUnique({
      where: {
        id
      },
    })
    if (movementData !== null) {
      if (movementData.isActive) {
        return await prisma.movementData.update({
          where: {
            id
          },
          data: {
            isActive: false
          }
        })
      } else {
        return new Error('Movement data already deleted')
      }
    } else {
      return new Error('Record not found')
    }
  } catch (e: any) {
    return new Error(e.meta?.cause)
  }
}