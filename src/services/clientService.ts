import { Request, Response } from 'express'
import { getAllClientRepository } from '../repository/clientsRepository'

export const getAllClients = async (req: Request, res: Response): Promise<void> => {
  const clients = await getAllClientRepository(req, res)
  res.status(200).json(clients)
}
