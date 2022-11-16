import { Request, Response } from 'express'
import { createMovementRepository, deleteMovementRepository, getAllMovementsRepository, updateMovementRepository } from '../repository/movementsRepository'

export const getAllMovements = async (req: Request, res: Response): Promise<void> => {
  const movements = await getAllMovementsRepository(req, res)
  if (movements instanceof Error) {
    res.status(400).json({ message: movements.message })
  }
  else res.status(200).json(movements)
}

export const createMovement = async (req: Request, res: Response): Promise<void> => {
  const movement = await createMovementRepository(req, res)
  if (movement instanceof Error) {
    res.status(400).json({ message: movement.message })
  } else {
    res.status(201).json(movement)
  }
}

export const updateMovement = async (req: Request, res: Response): Promise<void> => {
  const updated = await updateMovementRepository(req, res)
  if (updated instanceof Error) {
    res.status(400).json({ message: updated.message })
  } else {
    res.status(200).json(updated)
  }
}

export const deleteMovement = async (req: Request, res: Response): Promise<void> => {
  const deleted = await deleteMovementRepository(req, res)
  if (deleted instanceof Error) {
    res.status(400).json({ message: deleted.message })
  } else {
    res.status(200).json(deleted)
  }
  res.status(204)
}
