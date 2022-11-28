import { Request, Response } from 'express'
import { getAllClientRepository, getClientRepository, createClientRepository, updateClientRepository, deleteClientRepository } from '../../repository/sql/clientsRepository'

export const getAllClients = async (req: Request, res: Response): Promise<void> => {
  const clients = await getAllClientRepository(req, res)
  if (clients instanceof Error) {
    res.status(400).json({ message: clients.message })
  } else {
    res.status(200).json(clients)
  }
}

export const getClient = async (req: Request, res: Response): Promise<void> => {
  const client = await getClientRepository(req, res)
  if (client instanceof Error) {
    res.status(400).json({ message: client.message })
  } else {
    res.status(200).json(client)
  }
}

export const createClient = async (req: Request, res: Response): Promise<void> => {
  const client = await createClientRepository(req, res)
  if (client instanceof Error) {
    res.status(400).json({ message: client.message })
  } else {
    res.status(201).json(client)
  }
}

export const updateClient = async (req: Request, res: Response): Promise<void> => {
  const updated = await updateClientRepository(req, res)
  if (updated instanceof Error) {
    res.status(400).json({ message: updated.message })
  } else {
    res.status(200).json(updated)
  }
}

export const deleteClient = async (req: Request, res: Response): Promise<void> => {
  const deleted = await deleteClientRepository(req, res)
  if (deleted instanceof Error) {
    res.status(400).json({ message: deleted.message })
  } else {
    res.status(200).json(deleted)
  }
}
