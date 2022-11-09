import { Request, Response } from 'express'
import { createMovementRepository, deleteMovementRepository, getAllMovementsRepository, updateMovementRepository } from '../repository/movementsRepository'

export const getAllMovements = async (req: Request, res: Response): Promise<void> => {
  const movements = await getAllMovementsRepository(req, res)
  res.status(200).json(movements)
}

export const createMovement = async (req: Request, res: Response): Promise<void> => {
  const movement = await createMovementRepository(req, res)
  res.status(201).json(movement)
}

export const updateMovement = async (req: Request, res: Response): Promise<void> => {
  await updateMovementRepository(req, res)
  res.status(204)
}

export const deleteMovement = async (req: Request, res: Response): Promise<void> => {
  await deleteMovementRepository(req, res)
  res.status(204)
}
