import { Request, Response } from 'express'
import { createClientBalanceRepository, deleteClientBalanceRepository, getAllClientBalancesRepository, getClientBalanceRepository, updateClientBalanceRepository } from '../repository/clientBalanceRepository'

export const getAllClientBalances = async (req: Request, res: Response): Promise<void> => {
  const balances = await getAllClientBalancesRepository(req, res)
  if (balances instanceof Error) {
    res.status(400).json({ message: balances.message })
  } else {
    res.status(200).json(balances)
  }
}

export const getClientBalance = async (req: Request, res: Response): Promise<void> => {
  const balance = await getClientBalanceRepository(req, res)
  if (balance instanceof Error) {
    res.status(400).json({ message: balance.message })
  } else {
    res.status(200).json(balance)
  }
}

export const createClientBalance = async (req: Request, res: Response): Promise<void> => {
  const balance = await createClientBalanceRepository(req, res)
  if (balance instanceof Error) {
    res.status(400).json({ message: balance.message })
  } else {
    res.status(201).json(balance)
  }
}

export const updateClientBalance = async (req: Request, res: Response): Promise<void> => {
  const updated = await updateClientBalanceRepository(req, res)
  if (updated instanceof Error) {
    res.status(400).json({ message: updated.message })
  } else {
    res.status(200).json(updated)
  }
}

export const deleteClientBalance = async (req: Request, res: Response): Promise<void> => {
  const deleted = await deleteClientBalanceRepository(req, res)
  if (deleted instanceof Error) {
    res.status(400).json({ message: deleted.message })
  } else {
    res.status(200).json(deleted)
  }
}
