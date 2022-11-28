import { NextFunction, Request, Response } from 'express'
import { getAllClientBalances, getClientBalance, createClientBalance, updateClientBalance, deleteClientBalance } from '../../services/sql/clientBalanceService'

export const getAllClientBalancesController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { clientId } = req.params
    if (parseInt(clientId) > 0) await getAllClientBalances(req, res)
    else res.status(400).send('Invalid clientId')
    next()
  } catch (e) {
    console.log(e)
  }
}

export const getClientBalanceController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { clientId, coinId } = req.params
    if (parseInt(clientId) > 0 && parseInt(coinId) > 0) await getClientBalance(req, res)
    else res.status(400).send('Invalid clientId/coinId pair')
    next()
  } catch (e) {
    console.log(e)
  }
}

export const createClientBalanceController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { clientId, coinId } = req.params
    const { balance } = req.body
    if (parseInt(clientId) > 0 && parseInt(coinId) > 0) {
      if (parseFloat(balance) >= 0) await createClientBalance(req, res)
      else res.status(400).send('Invalid balance value provided')
    } else res.status(400).send('Invalid clientId/coinId pair')
    next()
  } catch (e) {
    console.log(e)
  }
}

export const updateClientBalanceController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { clientId, coinId } = req.params
    const { balance } = req.body
    if (parseInt(clientId) > 0 && parseInt(coinId) > 0) {
      if (parseFloat(balance) >= 0) await updateClientBalance(req, res)
      else res.status(400).send('Invalid balance value provided')
    } else res.status(400).send('Invalid clientId/coinId pair')
    next()
  } catch (e) {
    console.log(e)
  }
}

export const deleteClientBalanceController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { clientId, coinId } = req.params
    if (parseInt(clientId) > 0 && parseInt(coinId) > 0) {
      await deleteClientBalance(req, res)
    } else res.status(400).send('Invalid clientId/coinId pair')
    next()
  } catch (e) {
    console.log(e)
  }
}
