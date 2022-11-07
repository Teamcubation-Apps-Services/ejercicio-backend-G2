import { NextFunction, Request, Response } from 'express'
import { deleteCoin, getAllCoin, getCoin, postCoin, updateCoin} from '../services/coinService'

export const getAllCoinsController = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getAllCoin(_, res)
    next()
  } catch (e) {
    console.log(e)
  }
}

export const getCoinController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        await getCoin(req,res)
        next()
    }catch(e){
        console.log(e)
    }
}

export const postCoinController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        await postCoin(req,res)
        next()
    }catch(e){
        console.log(e)
    }
}

export const updateCoinController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        await updateCoin(req,res)
        next()
    }catch(e){
        console.log(e)
    }
}

export const deleteCoinController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        await deleteCoin(req,res)
        next()
    }catch(e){
        console.log(e)
    }
}