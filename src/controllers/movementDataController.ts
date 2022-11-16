import { NextFunction, Request, Response } from 'express'
import { deleteMovementData, getAllMovementData, getMovementData, postMovementData, updateMovementData} from '../services/movementDataService'

export const getAllMovementDataController = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await getAllMovementData(_, res)
      next()
    } catch (e) {
        console.log(`Error: ${e}`)
    }
  }
  
  export const getMovementDataController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
      try{
          await getMovementData(req,res)
          next()
      }catch(e){
        console.log(`Error: ${e}`)
      }
  }
  
  export const postMovementDataController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
      try{
        const { clientId, movementId, senderWalletAddress, receiverWalletAddress, coinId, amount, fee } = req.body
        if (clientId && movementId && senderWalletAddress && receiverWalletAddress && coinId && amount && fee) await postMovementData(req,res)
        else res.status(400).send('Missing value')
          next()
      }catch(e){
        console.log(`Error: ${e}`)
      }
  }
  
  export const updateMovementDataController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
      try{
          await updateMovementData(req,res)
          next()
      }catch(e){
        console.log(`Error: ${e}`)
      }
  }
  
  export const deleteMovementDataController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
      try{
          await deleteMovementData(req,res)
          next()
      }catch(e){
        console.log(`Error: ${e}`)
      }
  }