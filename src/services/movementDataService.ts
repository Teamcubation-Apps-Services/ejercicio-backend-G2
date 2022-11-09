import { Request, Response } from 'express'
import { getAllMovmentDataRepository, getMovementDataRepository, postMovementDataRepository, updateMovementDataRepository, deleteMovementDataRepository } from '../repository/movementDataRepository'

export const getAllMovementData = async (req: Request, res: Response): Promise<void> => {
  const coins = await getAllMovmentDataRepository(req, res)
  res.status(200).json(coins)
}

export const getMovementData = async (req: Request, res: Response): Promise<void> => {
    const coin = await getMovementDataRepository(req, res)
    res.status(200).json(coin)
}

export const postMovementData = async (req: Request, res: Response): Promise<void> => {
    const coin = await postMovementDataRepository(req, res)
    res.status(201).json(coin)
}

export const updateMovementData = async (req: Request, res: Response): Promise<void> => {
    const coin = await updateMovementDataRepository(req, res)
    res.status(201).json(coin)
}

export const deleteMovementData = async (req: Request, res: Response): Promise<void> => {
    await deleteMovementDataRepository(req,res)
    res.status(204)
}