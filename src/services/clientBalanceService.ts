import { Request, Response } from 'express'
import { createClientBalanceRepository, deleteClientBalanceRepository, getAllClientBalancesRepository, getClientBalanceRepository, updateClientBalanceRepository } from '../repository/clientBalanceRepository'

export const getAllClientBalances = async (req: Request, res: Response): Promise<void> => {
  const benefits = await getAllClientBalancesRepository(req, res)
  res.status(200).json(benefits)
}

export const getClientBalance = async (req: Request, res: Response): Promise<void> => {
  const benefits = await getClientBalanceRepository(req, res)
  res.status(200).json(benefits)
}

export const createClientBalance = async (req: Request, res: Response): Promise<void> => {
  const benefit = await createClientBalanceRepository(req, res)
  res.status(201).json(benefit)
}

export const updateClientBalance = async (req: Request, res: Response): Promise<void> => {
  const updated = await updateClientBalanceRepository(req, res)
  res.status(200).json(updated)
}

export const deleteClientBalance = async (req: Request, res: Response): Promise<void> => {
  const deleted = await deleteClientBalanceRepository(req, res)
  res.status(200).json(deleted)
}
