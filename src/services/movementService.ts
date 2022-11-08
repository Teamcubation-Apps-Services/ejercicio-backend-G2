import { Request, Response } from 'express'
import { getAllMovementsRepository } from '../repository/movementsRepository'

export const getAllMovements = async (req: Request, res: Response): Promise<void> => {
  const movements = await getAllMovementsRepository(req, res)
  res.status(200).json(movements)
}
