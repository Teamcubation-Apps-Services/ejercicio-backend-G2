import { NextFunction, Request, Response } from 'express'
import { getAllMovements } from '../services/movementService'

export const getAllMovementsController = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getAllMovements(_, res)
    next()
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`Error: ${e}`)
  }
}
