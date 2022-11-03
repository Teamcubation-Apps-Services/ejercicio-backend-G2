import { NextFunction, Request, Response } from 'express'
import { PrismaClient as SqlClient } from '../../prisma/generated/sql-client'

const prisma = new SqlClient()

export const getAllBenefits = async (_: Request, res: Response, next: NextFunction) => {
    try {
        const benefits = await prisma.benefits.findMany()
        res.status(200).json(benefits)
        next()
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

export const getBenefit = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id)
        const benefit = await prisma.benefits.findFirst({ where: { id } })
        res.status(200).json(benefit)
        next();
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

export const postBenefit = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const benefit = await prisma.benefits.create({ data })
        res.status(201).json(benefit)
        next()
    } catch (e) {
        console.log(`Error: ${e}`);

    }
}