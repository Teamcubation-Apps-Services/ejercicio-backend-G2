import { Request, Response } from 'express'
import { deleteCoinRepository, getAllCoinRepository, getCoinRepository, postCoinRepository, updateCoinRepository } from '../../repository/nosql/coinRepository'

export const getAllCoin = async (req: Request, res: Response): Promise<void> => {
  const coins = await getAllCoinRepository(req, res)
  if (coins instanceof Error) {
    res.status(400).json({ message: coins.message })
  } else {
    res.status(200).json(coins)
  }
}

export const getCoin = async (req: Request, res: Response): Promise<void> => {
    const coin = await getCoinRepository(req, res)
    if (coin instanceof Error) {
        res.status(400).json({ message: coin.message })
    } else {
        res.status(200).json(coin)
    }
}

export const postCoin = async (req: Request, res: Response): Promise<void> => {
    const coin = await postCoinRepository(req, res)
    if (coin instanceof Error) {
        res.status(400).json({ message: coin.message })
    } else {
        res.status(201).json(coin)
    }
}

export const updateCoin = async (req: Request, res: Response): Promise<void> => {
    const coin = await updateCoinRepository(req, res)
    if (coin instanceof Error) {
        res.status(400).json({ message: coin.message })
    } else {
        res.status(200).json(coin)
    }
}

export const deleteCoin = async (req: Request, res: Response): Promise<void> => {
    const coin = await deleteCoinRepository(req,res)
    if (coin instanceof Error) {
        res.status(400).json({ message: coin.message })
    } else {
        res.status(200).json(coin)
    }
}