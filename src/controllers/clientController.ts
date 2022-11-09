import { NextFunction, Request, Response } from 'express'
import { getAllClients, createClient, updateClient, deleteClient } from '../services/clientService'

export const getAllClientsController = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getAllClients(_, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const createClientController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await createClient(req, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const updateClientController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await updateClient(req, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const deleteClientController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await deleteClient(req, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}
