import { Request, Response } from 'express'
import { getAllMovementDataRepository, getMovementDataRepository, postMovementDataRepository, updateMovementDataRepository, deleteMovementDataRepository } from '../../repository/nosql/movementDataRepository'

export const getAllMovementData = async (req: Request, res: Response): Promise<void> => {
  const movementsData = await getAllMovementDataRepository(req, res)
  if (movementsData instanceof Error) {
    res.status(400).json({ message: movementsData.message })
  } else {
    res.status(200).json(movementsData)
  }
}

export const getMovementData = async (req: Request, res: Response): Promise<void> => {
    const movementData = await getMovementDataRepository(req, res)
    if (movementData instanceof Error) {
        res.status(400).json({ message: movementData.message })
    } else {
        res.status(200).json(movementData)
    }
}

export const postMovementData = async (req: Request, res: Response): Promise<void> => {
    const movementData = await postMovementDataRepository(req, res)
    if (movementData instanceof Error) {
        res.status(400).json({ message: movementData.message })
    } else {
        res.status(201).json(movementData)
    }
}

export const updateMovementData = async (req: Request, res: Response): Promise<void> => {
    const movementData = await updateMovementDataRepository(req, res)
    if (movementData instanceof Error) {
        res.status(400).json({ message: movementData.message })
    } else {
        res.status(200).json(movementData)
    }
}

export const deleteMovementData = async (req: Request, res: Response): Promise<void> => {
    const movementData = await deleteMovementDataRepository(req,res)
    if (movementData instanceof Error) {
        res.status(400).json({ message: movementData.message })
    } else {
        res.status(200).json(movementData)
    }
}