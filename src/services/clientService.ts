import { Request, Response } from 'express'
import { getAllClientRepository, createClientRepository, updateClientRepository, deleteClientRepository } from '../repository/clientsRepository'

export const getAllClients = async (req: Request, res: Response): Promise<void> => {
  const clients = await getAllClientRepository(req, res)
  res.status(200).json(clients)
}

export const createClient = async (req: Request, res: Response): Promise<void> => {
  const client = await createClientRepository(req, res)
  res.status(201).json(client)
}

export const updateClient = async (req: Request, res: Response): Promise<void> => {
  await updateClientRepository(req, res)
  res.status(204)
}

export const deleteClient = async (req: Request, res: Response): Promise<void> => {
  await deleteClientRepository(req, res)
  res.status(204)
}
