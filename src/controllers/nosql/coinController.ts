import { NextFunction, Request, Response } from 'express'
import { deleteCoin, getAllCoin, getCoin, postCoin, updateCoin} from '../../services/nosql/coinService'

export const getAllCoinsController = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getAllCoin(_, res) 
    next()
  } catch (e) {
    console.log(`Error: he he he${e}`)
  }
}

export const getCoinController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        await getCoin(req,res)
        next()
    }catch(e){
        console.log(`Error: her her${e}`)
    }
}

export const postCoinController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        const { name, description, quotationReference, annualPerformance } = req.body
        console.log(req.body);
        
        if (name && description && quotationReference && annualPerformance) await postCoin(req,res)
        else res.status(400).send('Missing value')
        next()
    }catch(e){
        console.log(`Error: here her here${e}`)
    }
}

export const updateCoinController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        await updateCoin(req,res)
        next()
    }catch(e){
        console.log(`Error: turkish${e}`)
    }
}

export const deleteCoinController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try{
        await deleteCoin(req,res)
        next()
    }catch(e){
        console.log(`Error: arruscuchuchu${e}`)
    }
}