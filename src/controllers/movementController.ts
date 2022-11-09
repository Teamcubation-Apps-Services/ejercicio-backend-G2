import { NextFunction, Request, Response } from 'express'
import { getAllMovements, createMovement, updateMovement, deleteMovement } from '../services/movementService'

export const getAllMovementsController = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getAllMovements(_, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}
export const createMovementController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await createMovement(req, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const updateMovementController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await updateMovement(req, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const deleteMovementController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await deleteMovement(req, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}
