import { Request, Response } from 'express'
import { PrismaClient as SqlClient, MovementData } from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllMovmentDataRepository = async (req: Request, res: Response): Promise<MovementData[]> => {
    return await prisma.movementData.findMany({})
  }
  
  export const getMovementDataRepository = async (req: Request, res: Response) : Promise<MovementData[]> => {
    const id = Number(req.params.id)
  
    return await prisma.movementData.findMany({where: {id}})
  }
  
  export const postMovementDataRepository = async (req: Request, res: Response) : Promise<MovementData> => {
    const { clientId, movementId, senderWalletAddress, receiverWalletAddress, coinId, amount, fee } = req.body
    
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
  }
  
  export const updateMovementDataRepository = async (req: Request, res: Response) : Promise<MovementData> => {
    const data = req.body
    const id = Number(req.params.id)
  
    return await prisma.movementData.update({
      where: {
        id
      },
      data
    })
  }
  
  export const deleteMovementDataRepository = async (req: Request, res: Response) : Promise<MovementData> => {
    const id = Number(req.params.id)
  
    return await prisma.movementData.update({
      where: {
        id
      },
      data: {
        isActive: false
      }
    })
  }