import { NextFunction, Request, Response } from 'express'
import { getAllClients } from '../services/clientService'

export const getAllClientsController = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getAllClients(_, res)
    next()
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`Error: ${e}`)
  }
}
