import { NextFunction, Request, Response } from 'express'
import { getAllMovements, getMovement, createMovement, updateMovement, deleteMovement } from '../../services/sql/movementService'

export const getAllMovementsController = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getAllMovements(_, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const getMovementController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getMovement(req, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const createMovementController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { type } = req.body
    if (type) await createMovement(req, res)
    else res.status(400).send('Missing value')
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
