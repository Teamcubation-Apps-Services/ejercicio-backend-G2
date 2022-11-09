import { NextFunction, Request, Response } from 'express'
import { getAllClientBalances, getClientBalance, createClientBalance, updateClientBalance, deleteClientBalance } from '../services/clientBalanceService'

export const getAllClientBalancesController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getAllClientBalances(req, res)
    next()
  } catch (e) {
    console.log(e)
  }
}

export const getClientBalanceController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await getClientBalance(req, res)
    next()
  } catch (e) {
    console.log(e)
  }
}

export const createClientBalanceController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await createClientBalance(req, res)
    next()
  } catch (e) {
    console.log(e)
  }
}

export const updateClientBalanceController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await updateClientBalance(req, res)
    next()
  } catch (e) {
    console.log(e)
  }
}

export const deleteClientBalanceController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    await deleteClientBalance(req, res)
    next()
  } catch (e) {
    console.log(e)
  }
}
