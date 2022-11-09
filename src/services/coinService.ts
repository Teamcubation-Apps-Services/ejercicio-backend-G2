import { Request, Response } from 'express'
import { deleteCoinRepository, getAllCoinRepository, getCoinRepository, postCoinRepository, updateCoinRepository } from '../repository/coinRepository'

export const getAllCoin = async (req: Request, res: Response): Promise<void> => {
  const coins = await getAllCoinRepository(req, res)
  res.status(200).json(coins)
}

export const getCoin = async (req: Request, res: Response): Promise<void> => {
    const coin = await getCoinRepository(req, res)
    res.status(200).json(coin)
}

export const postCoin = async (req: Request, res: Response): Promise<void> => {
    const coin = await postCoinRepository(req, res)
    res.status(201).json(coin)
}

export const updateCoin = async (req: Request, res: Response): Promise<void> => {
    const coin = await updateCoinRepository(req, res)
    res.status(201).json(coin)
}

export const deleteCoin = async (req: Request, res: Response): Promise<void> => {
    await deleteCoinRepository(req,res)
    res.status(204)
}