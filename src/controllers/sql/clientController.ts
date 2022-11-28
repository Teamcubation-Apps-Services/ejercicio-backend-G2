import { NextFunction, Request, Response } from 'express'
import { getAllClients, getClient, createClient, updateClient, deleteClient } from '../../services/sql/clientService'

export const getAllClientsController = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getAllClients(_, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const getClientController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getClient(req, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const createClientController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { dni, firstName, lastName, email, phoneNumber } = req.body
    if ( dni && firstName && lastName && email && phoneNumber) await createClient(req, res)
    else res.status(400).send('Missing value')
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
